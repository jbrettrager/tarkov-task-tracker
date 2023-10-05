import React, { useEffect, useState } from "react";
import taskDb from "./taskDb.json";
import Task from "./Task.jsx";
import createTaskDb from "./createTaskDb";
import "./index.css";

export default function MainTable(props) {
  const taskList = taskDb;
  const searchText = props.props[0];
  const playerLevel = props.props[1];
  const traders = props.props[2];
  const repArray = props.props[3];
  const completedTasks = props.props[4];
  const setCompletedTasks = props.props[5];

  function checkLocked(task) {
    let locked = true;
    let requiredTasks = [];
    if (task.taskRequirements[0] != undefined) {
      for (let i = 0; i < task.taskRequirements.length; i++) {
        let requiredTask = task.taskRequirements[i].task.name;
        requiredTasks.push(requiredTask);
      }
      let objectiveCount = requiredTasks.length;
      let completedObjectives = 0;
      for (let i = 0; i < objectiveCount; i++) {
        for (let j = 0; j < completedTasks.length; j++) {
          if (requiredTasks[i] == completedTasks[j].name) {
            completedObjectives++;
          }
        }
      }
      if (completedObjectives == objectiveCount) {
        locked = false
      }
    } else locked = false;
    return locked;
  }

  return (
    <div>
      <table className="main-table no-select">
        <thead className="table-title">
          <th className="title">Trader</th>
          <th>Task</th>
          <th>Map</th>
          <th>Objectives</th>
          <th>Wiki Link</th>
          <th>Completed?</th>
        </thead>
        {taskList
          .filter((task) => task.minPlayerLevel <= playerLevel)
          .filter((task) => {
            if (task.trader.name === "Prapor") {
              if (traders[0] === true) return task;
            }
            if (task.trader.name === "Therapist") {
              if (traders[1] === true) return task;
            }
            if (task.trader.name === "Fence") {
              if (traders[2] === true) return task;
            }
            if (task.trader.name === "Skier") {
              if (traders[3] === true) return task;
            }
            if (task.trader.name === "Peacekeeper") {
              if (traders[4] === true) return task;
            }
            if (task.trader.name === "Mechanic") {
              if (traders[5] === true) return task;
            }
            if (task.trader.name === "Ragman") {
              if (traders[6] === true) return task;
            }
            if (task.trader.name === "Jaeger") {
              if (traders[7] === true) return task;
            }
            if (task.trader.name === "Lightkeeper") {
              if (traders[8] === true) return task;
            }
          })
          .filter((task) => {
            if (searchText != "") {
              return task.name.toLowerCase().includes(searchText);
            } else return task;
          })
          .filter((task) => {
            if (task.traderRequirements[0] != undefined) {
              if (task.traderRequirements[0].trader.name != "Fence")
                return task;
            } else return task;
          })
          .filter((task) => {
            if (completedTasks[0] != undefined) {
              let taskMatch = false;
              for (let i = 0; i < completedTasks.length; i++) {
                if (completedTasks[i].name == task.name) {
                  taskMatch = true;
                }
              }
              if (taskMatch == false) return task;
            } else return task;
          })
          .filter(task => {
            if (!checkLocked(task)) return task
          })
          .map((task) => (
            <Task
              task={task}
              rep={repArray}
              completed={[completedTasks, setCompletedTasks]}
            />
          ))}
      </table>
    </div>
  );
}
