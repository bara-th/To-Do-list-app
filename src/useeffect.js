import React, { useEffect, useState } from "react";

function Useeffect() {
  const [colour, setcolour] = useState("yellow");
  useEffect(() => {
    document.body.style.background = colour;
    document.body.style.color = "grey";
  });

  function changeColour() {
    setcolour("gold");
  }
  return (
    <div>
      <h3>Use Effect</h3>
      <button onClick={changeColour}>Change background</button>
    </div>
  );
}

export default Useeffect;
