import React, { useState } from "react";
import "./App.css";

function App() {
  const [range,setRange] = useState(0)
  const [number,setNumber] = useState(0)
    const AddFoo =()=>{
      setNumber(()=>Number(number) + Number(range))
    }
    const SubFoo =()=>{
      setNumber(()=>Number(number) - Number(range))
    }
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="rangeDiv">
            <input
              type="range"
              min={0}
              max={15}
               value={range}
               onChange={(e)=>setRange(e.target.value)}
              className="range"
            />
            <span>{range}</span>
          </div>
          <div className="para">
            <h3>
              {number}
            </h3>
          </div>
          <div className="promptDiv">
            <button className="plusBtn" onClick={AddFoo}>plus</button>
            <input
             type="number"
             className="input"
             value={number}
             onChange={(e)=>setNumber(e.target.value)}
             />
            <button className="plusBtn" onClick={SubFoo}>Minus</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
