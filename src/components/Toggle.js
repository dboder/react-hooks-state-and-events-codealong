import React, { useState } from "react";

function Toggle() {
  //useState -  State is data that is dynamic in your component: it changes over time as users interact with your application.
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "white"; // background color On==Red, Off=White 
  // ... the rest of Toggle component
  function handleClick() { // Upon click change state
    setIsOn((isOn) => !isOn); //  isOn = !isOn; will not work it has to be set using specific set Function
  }
  return (<button onClick={handleClick} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>); // notice the shorthand if statement in that gets printed
}

export default Toggle;
