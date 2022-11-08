import React, { useState } from "react";
import Boardprops from "./Boardprops";
import Cell from "./Celldata";
import "./App.css";
import { playerCount, userDetails, emoji } from "./Input";

let playerNo;
let playerPosition:any[];
let playerIcon;
let player = 1;
let Winner:string='';
let spin=0;

const App = () => {
 
  const [division, setDivision] = useState(userDetails);
  let dice=Math.ceil(Math.random()*6)
  function Snakeladder() {
    spin=Number(dice)
    if (spin + userDetails[`P${player}`] <= 100) {
      console.log("spini",spin)
      Cell.forEach((obj) => {
        if 
          (obj.id ===  (spin + userDetails[`P${player}`]) && 
          ( (spin + userDetails[`P${player}`]) === obj.destination)) {
          setDivision( (userDetails[`P${player}`] =  obj.id) );
          console.log(userDetails[`P${player}`]=  (obj.id),'set division');
        } 
        else if ((obj.id ===  (spin + userDetails[`P${player}`])) &&
         ( (spin + userDetails[`P${player}`]) !== obj.destination)) {
          setDivision((userDetails[`P${player}`] = obj.destination));
          console.log(obj.destination,'dest');
          console.log( spin + userDetails[`P${player}`],'value else');
        }
      });
    }
    if (spin + userDetails[`P${player}`] === 100) {
      Winner = `Player${player} ` 
      alert(`Winner is ${Winner}`);
    }
    player++;
    if (player === playerCount + 1) {
      player = 1;
    }
  }
  const Position = (block:number) => {
    playerNo = Object.keys(userDetails);
    playerPosition = Object.values(userDetails);
    playerIcon = Object.values(emoji);
    let find = -1;
    playerPosition.forEach((element) => {
      if (block === element) {
        find = playerPosition.indexOf(element);
      }
    });
    if (find !== -1) {
      return <span>{playerIcon[find]}</span>;
    }
  }

  return (
    <div className="main">
      <div className="head">
        <h2>Snake & Ladder Game</h2>
        <button id="btn" onClick={Snakeladder}>Dice </button>
        <h5>Dicevalue:{spin}</h5>
        <div className="classgrid">
          {Cell.map((obj) => (
            <div id={obj.id}>
              <Boardprops
                Cellno={obj.id}
                Snake={obj.snake === "yes" ? "🐍" : ""}
                Ladder={obj.ladder === "yes" ? "🚀" : ""}
               
              />
              {Position(obj.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
