import { useState } from "react";

export default function Likes() {
  let [totalLikes, setTotalLikes] = useState(0);
  function increment() {
    setTotalLikes(totalLikes + 1);
  }
  function decrement() {
    if (totalLikes <= 0) {
      setTotalLikes(0);
    } else {
      setTotalLikes(totalLikes - 1);
    }
  }
  return (
    <div>
      <h2>{totalLikes}</h2>
      <button className="btnincrement" onClick={increment} value="totalLikes">
        <span>+</span>
      </button>
      <button className="btndecrement" onClick={decrement} value="totalLikes">
        <span>-</span>
      </button>
    </div>
  );
}
