import React, { useState, useEffect } from "react";
import "./header.css";
import rank1Icon from "./img/1.png";
import rank2Icon from "./img/2.png";
import rank3Icon from "./img/3.png";
import rank4Icon from "./img/4.png";
import rank5Icon from "./img/5.png";
import rank6Icon from "./img/6.png";
import rank7Icon from "./img/7.png";
import rank8Icon from "./img/8.png";
import rank9Icon from "./img/9.png";
import rank10Icon from "./img/10.png";
import rank11Icon from "./img/11.png";
import rank12Icon from "./img/12.png";
import rank13Icon from "./img/13.png";
import rank14Icon from "./img/14.png";
import rank15Icon from "./img/15.png";
import rank16Icon from "./img/16.png";

export default function Header(props) {
  const searchText = props.props[0]
  const setSearchText = props.props[1]
  const playerLevel = props.props[2]
  const setPlayerLevel = props.props[3]
  const traders = props.props[4]
  const setTraders = props.props[5]
  const [levelIcon, setLevelIcon] = useState(rank1Icon);
  function handleSearch(e) {
    setSearchText(e.target.value);
  }
  function incrementLevel() {
    if (playerLevel != 79) {
      setPlayerLevel(playerLevel + 1);
    }
    setLevelIcon(playerIconSet(playerLevel + 1));
  }
  function decrementLevel() {
    if (playerLevel != 1) {
      setPlayerLevel(playerLevel - 1);
    }
    setLevelIcon(playerIconSet(playerLevel - 1));
  }
  function playerIconSet(level) {
    let newIcon;
    if (level < 5) {
      newIcon = rank1Icon;
    } else if (level < 10) {
      newIcon = rank2Icon;
    } else if (level < 15) {
      newIcon = rank3Icon;
    } else if (level < 20) {
      newIcon = rank4Icon;
    } else if (level < 25) {
      newIcon = rank5Icon;
    } else if (level < 30) {
      newIcon = rank6Icon;
    } else if (level < 35) {
      newIcon = rank7Icon;
    } else if (level < 40) {
      newIcon = rank8Icon;
    } else if (level < 45) {
      newIcon = rank9Icon;
    } else if (level < 50) {
      newIcon = rank10Icon;
    } else if (level < 55) {
      newIcon = rank11Icon;
    } else if (level < 60) {
      newIcon = rank12Icon;
    } else if (level < 65) {
      newIcon = rank13Icon;
    } else if (level < 70) {
      newIcon = rank14Icon;
    } else if (level < 75) {
      newIcon = rank15Icon;
    } else if (level < 80) {
      newIcon = rank16Icon;
    }
    return newIcon;
  }
  function handleClickTrader(e) {
    let newTraders = [...traders];
    if (e.target.className.split(" ").includes("prapor")) {
      newTraders[0] = !newTraders[0];
      setTraders(newTraders);
    }
    if (e.target.className.split(" ").includes("therapist")) {
      newTraders[1] = !newTraders[1];
      setTraders(newTraders);
    }
    if (e.target.className.split(" ").includes("fence")) {
      newTraders[2] = !newTraders[2];
      setTraders(newTraders);
    }
    if (e.target.className.split(" ").includes("skier")) {
      newTraders[3] = !newTraders[3];
      setTraders(newTraders);
    }
    if (e.target.className.split(" ").includes("peacekeeper")) {
      newTraders[4] = !newTraders[4];
      setTraders(newTraders);
    }
    if (e.target.className.split(" ").includes("mechanic")) {
      newTraders[5] = !newTraders[5];
      setTraders(newTraders);
    }
    if (e.target.className.split(" ").includes("ragman")) {
      newTraders[6] = !newTraders[6];
      setTraders(newTraders);
    }
    if (e.target.className.split(" ").includes("jaeger")) {
      newTraders[7] = !newTraders[7];
      setTraders(newTraders);
    }
    if (e.target.className.split(" ").includes("lightkeeper")) {
      newTraders[8] = !newTraders[8];
      setTraders(newTraders);
    }
  }
  return (
    <div>
      <h2>Escape From Tarkov Quest Tracker</h2>
      <div className="search-area">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchText}
          className="search-text"
        ></input>
        <div className="current-level no-select">
          <div className="level-title no-select">Level</div>
          <div className="level-icon-arrows">
            <div
              className="arrow left no-select"
              onClick={decrementLevel}
            ></div>
            <img
              src={levelIcon}
              alt="level icon"
              className="level-icon no-select"
            ></img>
            <div
              className="arrow right no-select"
              onClick={incrementLevel}
            ></div>
          </div>
          <div className="player-level no-select">{playerLevel}</div>
        </div>
        <div className="trader-filter">
          <div className="trader-filter-title">Filter by Trader</div>
          <div className="image-container">
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/54cb50c76803fa8b248b4571.webp"
              alt="prapor image"
              className={traders[0] ? "prapor" : "prapor unselected"}
            ></img>
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/54cb57776803fa99248b456e.webp"
              alt="therapist image"
              className={traders[1] ? "therapist" : "therapist unselected"}
            ></img>
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/579dc571d53a0658a154fbec.webp"
              alt="fence image"
              className={traders[2] ? "fence" : "fence unselected"}
            ></img>
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/58330581ace78e27b8b10cee.webp"
              alt="skier image"
              className={traders[3] ? "skier" : "skier unselected"}
            ></img>
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/5935c25fb3acc3127c3d8cd9.webp"
              alt="peacekeeper image"
              className={traders[4] ? "peacekeeper" : "peacekeeper unselected"}
            ></img>
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/5a7c2eca46aef81a7ca2145d.webp"
              alt="mechanic image"
              className={traders[5] ? "mechanic" : "mechanic unselected"}
            ></img>
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/5ac3b934156ae10c4430e83c.webp"
              alt="ragman image"
              className={traders[6] ? "ragman" : "ragman unselected"}
            ></img>
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/5c0647fdd443bc2504c2d371.webp"
              alt="jaeger image"
              className={traders[7] ? "jaeger" : "jaeger unselected"}
            ></img>
            <img
              onClick={handleClickTrader}
              src="https://assets.tarkov.dev/638f541a29ffd1183d187f57.webp"
              alt="lightkeeper image"
              className={traders[8] ? "lightkeeper" : "lightkeeper unselected"}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
