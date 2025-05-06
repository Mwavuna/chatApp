import React from "react";
import "./rightbar.scss";
import myPhoto from "../../assets/myphoto.jpg";
import { useContext } from "react";
import { darkTheme } from "../../contexts/themeContext";
import myphoto from "../../assets/myphoto.jpg";

function rightbar() {
  const { dark, toggleTheme } = useContext(darkTheme);

  return (
    <div className="rightbar">
      <div className="container">
        <div className="section">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <span>Gregson Mwavuna</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <span>Gregson Mwavuna</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <span>Gregson Mwavuna</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <span>Gregson Mwavuna</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <span>Gregson Mwavuna</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <span>Gregson Mwavuna</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <span>Gregson Mwavuna</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismis</button>
            </div>
          </div>
        </div>

        <div className="section">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <p>
                <span>Gregson Mwavuna</span> changed their cover photo
              </p>
            </div>
            <span>1 min Ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <p>
                <span>Gregson Mwavuna</span> changed their cover photo
              </p>
            </div>
            <span>2 min Ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <p>
                <span>Gregson Mwavuna</span> changed their cover photo
              </p>
            </div>
            <span>2 min Ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={myPhoto} alt="image" />
              <p>
                <span>Gregson Mwavuna</span> changed their cover photo
              </p>
            </div>
            <span>2 min Ago</span>
          </div>
        </div>

        <div className="section">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <div className="dot"></div>
              <img src={myPhoto} alt="" />
              <span>Gregson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="dot"></div>
              <img src={myPhoto} alt="" />
              <span>Gregson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="dot"></div>
              <img src={myPhoto} alt="" />
              <span>Gregson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="dot"></div>
              <img src={myPhoto} alt="" />
              <span>Gregson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <div className="dot"></div>
              <img src={myPhoto} alt="" />
              <span>Gregson</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <div className="dot"></div>
              <img src={myPhoto} alt="" />
              <span>Gregson</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <div className="dot"></div>
              <img src={myPhoto} alt="" />
              <span>Gregson</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default rightbar;
