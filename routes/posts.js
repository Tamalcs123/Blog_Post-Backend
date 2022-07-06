const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedpost = await newPost.save();
    res.status(200).json(savedpost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE POST

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can only change your posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE POST

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Deleted successfully...");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can only delete your posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("Post not Found!");
  }
});

//GET ALL POST
router.get("/", async (req, res) => {
  const username = await req.query.user;
  const catName = await req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
    } else if (catName) {
      posts = await Post.find({ categories: { $in: [catName] } });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json("Post not Found!");
  }
});

module.exports = router;
