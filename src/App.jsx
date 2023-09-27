import React, {useEffect, useState} from 'react'
import "./index.css";
import MainTable from "./MainTable.jsx";
import Header from "./Header.jsx";

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerLevel, setPlayerLevel] = useState(1);
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
  return (
    <div>
      <Header
        props={[
          searchText,
          setSearchText,
          playerLevel,
          setPlayerLevel,
          traders,
          setTraders
        ]}
      />
      <MainTable props={[searchText, playerLevel, traders]}/>
    </div>
  );
}

export default App;
