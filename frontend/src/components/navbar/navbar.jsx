import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import myphoto from "../../assets/myphoto.jpg";
function navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/chatApp" style={{ textDecoration: "none" }}>
          <span className="logo">lamasocial</span>
        </Link>

        <HomeIcon className="icon" />
        <DarkModeOutlinedIcon className="icon" />
        <GridViewOutlinedIcon className="icon" />
        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon className="icon" />
        <EmailOutlinedIcon className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
        <div className="user">
          <img src={myphoto} alt="user" />
          <span>JGregson</span>
        </div>
      </div>
    </div>
  );
}

export default navbar;
