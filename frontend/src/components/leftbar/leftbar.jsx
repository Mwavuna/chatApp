import React from "react";
import "./leftbar.scss";
import myPhoto from "../../assets/myphoto.jpg";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import MarketPlace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Fundraiser from "../../assets/11.png";
import Tutorials from "../../assets/12.png";
import Courses from "../../assets/13.png";
function leftbar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="user">
          <img src={myPhoto} alt="" />
          <span>Gregson</span>
        </div>
        <div className="menu">
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>

          <div className="item">
            <img src={MarketPlace} alt="" />
            <span>MarketPlace</span>
          </div>

          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>

          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <span>Your Stories</span>

        <div className="menu">
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>

          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>

          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />
        <span>Others</span>

        <div className="menu">
          <div className="item">
            <img src={Fundraiser} alt="" />
            <span>Fandraiser</span>
          </div>

          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>

          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default leftbar;
