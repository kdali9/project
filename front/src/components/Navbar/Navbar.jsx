import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-cause"
          onClick={() => setMenu("cause")}
          className={menu === "causes" ? "active" : ""}
        >
          Causes
        </a>
        <a
          href="#volunteer"
          onClick={() => setMenu("volunteer")}
          className={menu === "volunteer" ? "active" : ""}
        >
          Volunteer
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        {!token? 
          <button className="sign-in" onClick={() => setShowLogin(true)}>
            Sign in
          </button>
          :<div className="navbar-profile">
            <img src={assets.profile} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag} alt="" />
                <p>Donations</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Log out</p>
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
