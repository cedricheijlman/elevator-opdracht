import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [currentFloor, setCurrentFloor] = useState(0);

  const floors: Object[] = [
    { floorNum: 0 },
    { floorNum: 1 },
    { floorNum: 2 },
    { floorNum: 3 },
    { floorNum: 4 },
    { floorNum: 5 },
  ];

  return (
    <div className="container">
      <h1>Elevator</h1>
      <div className="elevatorContainer">
        {floors.reverse().map((floor: any) => {
          return (
            <div
              className={
                currentFloor == floor.floorNum
                  ? "singleFloor current"
                  : "singleFloor"
              }
            >
              <p>{floor.floorNum}</p>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
