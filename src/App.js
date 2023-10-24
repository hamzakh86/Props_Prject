//src App.js
import './App.css';
import React from 'react';
import PlayersList from "./PlayersList";
function App() {
//style props
  const style={backgroundColor:"black",textAlign:"center"}
  return (
    <div style={style}>
        <h1 style={{color:"lightblue"}}>Football Players</h1>
       <div className="container"><PlayersList /></div>

    </div>
  );
}
export default App;
