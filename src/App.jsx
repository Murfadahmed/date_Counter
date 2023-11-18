import React, { useState } from "react";
import "./App.css";

function App() {
  const [range, setRange] = useState(0);
  const [number, setNumber] = useState(range);
  const [date, setDate] = useState(new Date());
  const AddFoo = () => {
    if (range === 0) {
      alert("please select the range");
    } else {
      setNumber(() => Number(number) + Number(range));
    }
  };
  const SubFoo = () => {
    if (range === 0) {
      alert("please select the range");
    } else {
      
        setNumber(() => Number(number) - Number(range));
        return 'before'
      
    }
  };

  const setParaDate = () => {
    var days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "August",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (number === 0 || number === "") {
      var datez = date.getDate();
      var year = date.getFullYear();
      var day = days[date.getDay()]+'day';
      var month = months[date.getMonth()];

      return `today is ${datez} of ${month} and day is ${day} ${year} `;
    } else {
      var todayDate = new Date(date);
      todayDate.setDate(todayDate.getDate() + Number(number));
      var datez = todayDate.getDate();
      var year = todayDate.getFullYear();
      var day = days[todayDate.getDay()];
      var month = months[todayDate.getMonth()];

      return `after ${number} days the day is ${day} and ${datez} of ${month} ${year}`;
    }
  };

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
              onChange={(e) => setRange(e.target.value)}
              className="range"
            />
            <span>{range}</span>
          </div>
          <div className="para">
            <h3>{setParaDate()}</h3>
          </div>
          <div className="promptDiv">
            <button className="plusBtn" onClick={AddFoo}>
              plus
            </button>
            <input
              type="number"
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button className="plusBtn" onClick={SubFoo}>
              Minus
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
