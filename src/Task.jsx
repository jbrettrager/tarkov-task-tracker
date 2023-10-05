import React, { useEffect, useState } from "react";
import "./task.css";
import TaskRewards from "./TaskRewards.jsx";

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
  const repArray = props.rep;
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
          repArray[1](Math.round((repArray[0] + repChanges[i].standing)*100)/100);
        if (repChanges[i].trader.name == "Therapist")
          repArray[3](Math.round((repArray[2] + repChanges[i].standing)*100)/100);
        if (repChanges[i].trader.name == "Skier")
          repArray[5](Math.round((repArray[4] + repChanges[i].standing)*100)/100);
        if (repChanges[i].trader.name == "Fence")
          repArray[7](Math.round((repArray[6] + repChanges[i].standing)*100)/100);
        if (repChanges[i].trader.name == "Peacekeeper")
          repArray[9](Math.round((repArray[8] + repChanges[i].standing)*100)/100);
        if (repChanges[i].trader.name == "Ragman")
          repArray[11](Math.round((repArray[10] + repChanges[i].standing)*100)/100);
        if (repChanges[i].trader.name == "Mechanic")
          repArray[13](Math.round((repArray[12] + repChanges[i].standing)*100)/100);
        if (repChanges[i].trader.name == "Jaeger")
          repArray[15](Math.round((repArray[14] + repChanges[i].standing)*100)/100);
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
      <td className="task-title">
        <a href={wikiLink}>{taskName}</a>
        <div>
          <img src={taskImage}></img>
        </div>
        {kappaRequired && (
          <div className="kappa-required">REQUIRED FOR KAPPA</div>
        )}
      </td>
      {map.name ? <td>{map.name}</td> : <td>Any</td>}
      <td className="objectives">
        <div className="objective-list">
          <div>
          {objectives.map((objective) => (
            <li>{objective.description}</li>
          ))}
          </div>
          <div className="needed-keys">
            {requiredKeys[0] != undefined && (
              requiredKeys[0].keys.map((key) => {
                return (
                  <div className="key">
                    <img src={key.gridImageLink}></img>
                    <div>{key.name}</div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </td>
      <TaskRewards rewards={taskFinishRewards} />
    </tr>
  );
}
