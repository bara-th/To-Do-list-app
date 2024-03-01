import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Use state</h3>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{count} times you have clicked !</p>
    </div>
  );
}

export default UseState;
