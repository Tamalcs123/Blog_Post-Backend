import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://tamal-blog-post.herokuapp.com/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
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
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          {/* <li className="topListItem">
            {" "}
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li> */}
          <li className="topListItem">
            {" "}
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        {/* <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
    </div>
  );
}
