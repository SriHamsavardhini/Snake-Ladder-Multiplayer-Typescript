import React, { useState } from 'react';
import App from "./App";
import { playerCount } from './Input';


let nameCount = 1;
export default function Username() {
  const [name, setName] = useState("");

  const [nameStart, setNamestart] = useState(false);
  let userNames:string[] = [];

  function namefromuser() {
    console.log("Yes the function is invoked!!!!....................");
    userNames.push(name);
    setName("");
    nameCount++;
    if (nameCount === playerCount + 1) {
      setNamestart(true);
    }
    console.log('namzzzz',userNames)
  }
  return (
    <div>
      <p>Enter player name</p>
      <input
        type="text "
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={namefromuser}>Click</button>

      {nameStart ? <App /> : null}
    </div>
  );
}
