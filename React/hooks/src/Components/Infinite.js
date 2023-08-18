import React,{useState, useEffect} from "react";

function Infinite() {
    const [count , setCount] = useState(0);

    // componentDidMount 
    // It will be used when we need to perform some side effect type work
    
    useEffect( () => {
        console.log("useEffect is Called");
        document.title = `Button clicked ${count} times` ;

        // This code run in finite time
        // setCount(10);

        // This code run in infinte time 
        // let rnum = Math.random() * 100;
        // setCount(rnum);
    });

    console.log("render");

  return (
    <div>
      <button onClick={ () => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={ () => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Infinite