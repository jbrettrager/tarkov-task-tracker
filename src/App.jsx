import React, { useEffect, useState } from "react";
import "./index.css";
import MainTable from "./MainTable.jsx";
import Header from "./Header.jsx";
import taskDb from "./taskDb.json";
import createTaskDb from "./createTaskDb";

function App() {
  const [searchText, setSearchText] = useState("");
  const [maps, setMaps] = useState({
    "Factory": "checked",
    "Night Factory": "checked",
    "Customs": "checked",
    "Woods": "checked",
    "Shoreline": "checked",
    "Interchange": "checked",
    "Reserve": "checked",
    "Lighthouse": "checked",
    "The Lab": "checked",
    "Streets of Tarkov": "checked",
    "Any": "checked"
  });
  const [playerLevel, setPlayerLevel] = useState(1);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [traders, setTraders] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [isEOD, setIsEOD] = useState(false)
  const [praporRep, setPraporRep] = useState(0.0);
  const [therapistRep, setTherapistRep] = useState(0.0);
  const [skierRep, setSkierRep] = useState(0.0);
  const [fenceRep, setFenceRep] = useState(0.0);
  const [peacekeeperRep, setPeacekeeperRep] = useState(0.0);
  const [ragmanRep, setRagmanRep] = useState(0.0);
  const [mechanicRep, setMechanicRep] = useState(0.0);
  const [jaegerRep, setJaegerRep] = useState(0.0);
  const repArray = [
    praporRep,
    setPraporRep,
    therapistRep,
    setTherapistRep,
    skierRep,
    setSkierRep,
    fenceRep,
    setFenceRep,
    peacekeeperRep,
    setPeacekeeperRep,
    ragmanRep,
    setRagmanRep,
    mechanicRep,
    setMechanicRep,
    jaegerRep,
    setJaegerRep,
  ];

  return (
    <div>
      <Header
        props={[
          searchText,
          setSearchText,
          playerLevel,
          setPlayerLevel,
          traders,
          setTraders,
          repArray,
          maps, setMaps
          ,isEOD, setIsEOD
        ]}
      />
      <MainTable
        props={[
          searchText,
          playerLevel,
          traders,
          repArray,
          completedTasks,
          setCompletedTasks,
          maps
        ]}
      />
    </div>
  );
}

export default App;
