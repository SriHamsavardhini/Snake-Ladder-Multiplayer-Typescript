import React, { useState } from "react";
import Username from "./Inputname";

let playerCount: number;
let userDetails: any;
let emoji: string;
let options = ["🥰", "😍", "🤑", "😇", "@", "#", "$", "&"];
export default function Userinput() {
  const [count, setCount] = useState<number>(0);
  const [start, setStart] = useState(false);
  function Countfromuser() {
    let userData: any = {};
    let userEmoji: any = {};
    if (count <= 8) {
      playerCount = Number(count);
      for (let i = 1; i <= playerCount; i++) {
        userData[`P${i}`] = 0;
        userEmoji[`P${i}Emoji`] = options[i - 1];
        setStart(true);
      }
      console.log("count", playerCount);
    }
    userDetails = userData;
    emoji = userEmoji;
  }

  return (
    <div>
      <h1>Enter number of players</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(Number(e.target.value));
        }}
      />
      <button onClick={Countfromuser}>submit</button>
      {start ? <Username /> : null}
    </div>
  );
}

export { userDetails, playerCount, emoji };
