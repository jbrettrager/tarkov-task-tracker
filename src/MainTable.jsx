import React, {useEffect, useState} from "react"
import taskDb from './taskDb.json'
import Task from "./Task.jsx"
import createTaskDb from "./createTaskDb"
import './index.css'

export default function MainTable(props) {
    const taskList = taskDb
    const searchText = props.props[0]
    const playerLevel = props.props[1]
    const traders = props.props[2]
    const repArray = props.props[3]

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
                {taskList.filter(task => task.minPlayerLevel <= playerLevel)
                .filter(task => {
                    if (task.trader.name === "Prapor") {
                        if (traders[0] === true) return task
                    }
                    if (task.trader.name === "Therapist") {
                        if (traders[1] === true) return task
                    }
                    if (task.trader.name === "Fence") {
                        if (traders[2] === true) return task
                    }
                    if (task.trader.name === "Skier") {
                        if (traders[3] === true) return task
                    }
                    if (task.trader.name === "Peacekeeper") {
                        if (traders[4] === true) return task
                    }
                    if (task.trader.name === "Mechanic") {
                        if (traders[5] === true) return task
                    }
                    if (task.trader.name === "Ragman") {
                        if (traders[6] === true) return task
                    }
                    if (task.trader.name === "Jaeger") {
                        if (traders[7] === true) return task
                    }
                    if (task.trader.name === "Lightkeeper") {
                        if (traders[8] === true) return task
                    }
                })
                .filter(task => {
                    if (searchText != "") {
                        return task.name.toLowerCase().includes(searchText)
                    }
                    else return task
                })
                .map(task => <Task task={task} rep={repArray}/>)}
              </table>
        </div>
    )
}