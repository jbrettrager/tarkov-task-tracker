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
  const repArray = props.rep; //prapor, therapist, skier, fence, peacekeeper, ragman, mechanic, jaeger
  const completedTasks = props.completed[0];
  const setCompletedTasks = props.completed[1];

  function checkCompletedTasks(task) {
    let taskMatch = false;
    let arrayIndex = null;
    for (let i = 0; i < completedTasks.length; i++) {
      if (completedTasks[i].name == task.name) {
        taskMatch = true;
        arrayIndex = i;
      }
    }
    return taskMatch;
  }

  function setRep() {
    let repChanges = taskFinishRewards.traderStanding;
    console.log(completedTasks);
    let tempArray = [];
    if (completedTasks[0] != undefined) {
      tempArray = [...completedTasks];
    }
    if (!checkCompletedTasks(props.task)) {
      tempArray.push(props.task);
      for (let i = 0; i < repChanges.length; i++) {
        if (repChanges[i].trader.name == "Prapor")
          repArray[1](repArray[0] + repChanges[i].standing);
        if (repChanges[i].trader.name == "Therapist")
          repArray[3](repArray[2] + repChanges[i].standing);
        if (repChanges[i].trader.name == "Skier")
          repArray[5](repArray[4] + repChanges[i].standing);
        if (repChanges[i].trader.name == "Fence")
          repArray[7](repArray[6] + repChanges[i].standing);
        if (repChanges[i].trader.name == "Peacekeeper")
          repArray[9](repArray[8] + repChanges[i].standing);
        if (repChanges[i].trader.name == "Ragman")
          repArray[11](repArray[10] + repChanges[i].standing);
        if (repChanges[i].trader.name == "Mechanic")
          repArray[13](repArray[12] + repChanges[i].standing);
        if (repChanges[i].trader.name == "Jaeger")
          repArray[15](repArray[14] + repChanges[i].standing);
      }
    }
    setCompletedTasks(tempArray);
    console.log(completedTasks);
  }

  return (
    <tr className="no-select" onClick={setRep}>
      <td className="trader">
        <img src={traderImage}></img>
      </td>
      <td>
        <div>{taskName}</div>
        <div>
          <img src={taskImage}></img>
        </div>
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
      <td>{checkCompletedTasks(props.task) ? "YEA" : "NO"}</td>
    </tr>
  );
}
