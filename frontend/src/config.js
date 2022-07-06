import axios from "axios";
export const axiosInstance=axios.create({
    baseURL:"https://tamal-blog-post.herokuapp.com/api/"
})