import React, { useState, useEffect } from "react";

function Ue3() {
  const [count, setCount] = useState(0);
  const [msg, setMsg ] = useState({sayHi : "I am Bhardwaj"});

  // componentDidMount + componentDidUpdate
  // It will be used when we want useEffect to run only when a particuler state is change.


  useEffect(() => {
    console.log("useEffect is Called");
    document.title = `Button clicked ${count} times`;
  }, [count]);

  let changeText = (e) => {
    msg.sayHi = e.target.value;
    console.log(msg);
    setMsg({...msg});
  }

  console.log("render");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <input type="text" value={msg.sayHi} onChange={ (e) => changeText(e)}/>
    </div>
  );
}

export default Ue3;
