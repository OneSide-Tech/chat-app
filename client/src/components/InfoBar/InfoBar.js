import React from "react";

import closeIcon from "../../img/icons/closeIcon.png";
import onlineIcon from "../../img/icons/onlineIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online img" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerConatiner">
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  </div>
);

export default InfoBar;
