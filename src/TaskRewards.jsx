import React from "react";
import "./task.css";
import { SignatureKind } from "typescript";

export default function TaskRewards(props) {
  const items = props.rewards.items;
  const traderRewards = props.rewards.traderStanding;
  function setTraderImage(name) {
    let traderImage = "NO IMAGE FOUND";
    if (name == "Prapor") {
      traderImage = "https://assets.tarkov.dev/54cb50c76803fa8b248b4571.webp";
    } else if (name == "Therapist") {
      traderImage = "https://assets.tarkov.dev/54cb57776803fa99248b456e.webp";
    } else if (name == "Skier") {
      traderImage = "https://assets.tarkov.dev/58330581ace78e27b8b10cee.webp";
    } else if (name == "Fence") {
      traderImage = "https://assets.tarkov.dev/579dc571d53a0658a154fbec.webp";
    } else if (name == "Peacekeeper") {
      traderImage = "https://assets.tarkov.dev/5935c25fb3acc3127c3d8cd9.webp";
    } else if (name == "Ragman") {
      traderImage = "https://assets.tarkov.dev/5ac3b934156ae10c4430e83c.webp";
    } else if (name == "Mechanic") {
      traderImage = "https://assets.tarkov.dev/5a7c2eca46aef81a7ca2145d.webp";
    } else if (name == "Jaeger") {
      traderImage = "https://assets.tarkov.dev/5c0647fdd443bc2504c2d371.webp";
    } else if (name == "Lightkeeper") {
      traderImage = "https://assets.tarkov.dev/638f541a29ffd1183d187f57.webp";
    }
    return traderImage;
  }
  return (
    <td className="rewards" onClick={() => console.log(props.rewards)}>
      <div className="trader-rewards-box">
        {traderRewards.map((reward) => {
          let traderImage = setTraderImage(reward.trader.name);
          return (
            <div className="trader-rewards">
              <img
                src={traderImage}
                alt="trader"
                className="reward-trader-image"
              ></img>
              {Math.sign(reward.standing) == 1 ? (
                <div className="rep-value positive">+{reward.standing}</div>
              ) : (
                <div className="rep-value negative">{reward.standing}</div>
              )}
            </div>
          );
        })}
      </div>
      {items[0] != undefined && <hr></hr>}
      <div className="item-rewards-box">
        {items.map((item) => {
          return (
            <div className="item-rewards">
              <img
                src={item.item.gridImageLink}
                alt="item"
                className="reward-item-image"
              ></img>
              <div className="quantity">
                {item.quantity}
              </div>
            </div>
          );
        })}
      </div>
    </td>
  );
}
