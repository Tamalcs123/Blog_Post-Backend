import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media-exp2.licdn.com/dms/image/C5603AQFLKXQ10iT8SA/profile-displayphoto-shrink_800_800/0/1647543139352?e=1662595200&v=beta&t=-q3w7IU199W-ls6LWc70Q6dA5WoE-A6hHCKvWn4fjuM"
          alt=""
        />
        <p>
          Hello there My name is Tamal Naskar, I am currently a final year
          student pursuing my Bachelor of Technology in Computer Science and
          Engineering from Government College of Engineering and Leather
          Technology. My current cumulative GPA is 9.48/10. My primary field of
          interest lies in Web Development.My tech stack is MERN stack. Besides
          development, I am skilled in problem-solving.I am also a 5* Gold Badge
          winner at Hackerrank. Do reach out to me in case of any new
          opportunities or queries, my email id is <b>naskartamal428@gmail.com</b>.
          Thank you for reading it till here. That's all about me!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIE</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="http://facebook.com" className="link">
            <i className=" sidebarIcon fa-brands fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/tamalnaskar428/" className="link">
            <i className=" sidebarIcon fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/tamal-naskar-97a652218/"
            className="link"
          >
            {" "}
            <i className=" sidebarIcon fa-brands fa-linkedin"></i>
          </a>

          <a href="https://github.com/Tamalcs123" className="link">
            <i className=" sidebarIcon fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
