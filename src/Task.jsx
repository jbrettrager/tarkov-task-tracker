import React, { useEffect, useState } from "react";
import "./task.css";

export default function Task(props) {
  const taskImage = props.task.taskImageLink;
  const taskName = props.task.name;
  const trader = props.task.trader.name;
  const traderImage = props.task.trader.imageLink;
  const experience = props.task.experience;
  const kappaRequired = props.task.kappaRequired;
  const levelRequirement = props.task.minPlayerLevel;
  const requiredKeys = props.task.neededKeys;
  const precedingTask = props.task.taskRequirements;
  const taskStartRewards = props.task.startRewards;
  const taskFinishRewards = props.task.finishRewards;
  const wikiLink = props.task.wikiLink;
  const objectives = props.task.objectives;
  const map = props.task.map;
  const isCompleted = false;
  return (
    <tr className="no-select" onClick={() => console.log(trader)}>
      <td className="trader">
        <img src={traderImage}></img>
      </td>
      <td>
        <div>{taskName}</div>
        <div><img src={taskImage}></img></div>
      </td>
      {map ? <td>{map.name}</td> : <td>Any</td>}
      <td>
        {objectives.map((objective) => (
          <li>{objective.description}</li>
        ))}
      </td>
      <td>
        <a href={wikiLink}>Wiki Link</a>
      </td>
    </tr>
  );
}
