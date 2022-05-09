import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UpAndDown from "./components/UpAndDown";
import NumberBtns from "./components/NumberBtns";

interface Floor {
  floorNum: number;
}

const App: React.FC = () => {
  // All floors
  const floors: Floor[] = [
    { floorNum: 5 },
    { floorNum: 4 },
    { floorNum: 3 },
    { floorNum: 2 },
    { floorNum: 1 },
    { floorNum: 0 },
  ];

  // Current floor
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  // Delay Floor Change in seconds
  const [delayFloor, setDelayFloor] = useState<number>(1000);

  return (
    <div className="container">
      <h1>React Programming Assignment</h1>

      <div className="elevatorContainer">
        {floors.map((floor: Floor, index: number) => {
          const floorNumber = floor.floorNum;
          return (
            <div className="singleFloorContainer">
              {currentFloor == floorNumber ? (
                <React.Fragment>
                  <UpAndDown
                    setCurrentFloor={setCurrentFloor}
                    floorNumber={floorNumber}
                    delayFloor={delayFloor}
                  />
                  <NumberBtns floors={floors} />
                </React.Fragment>
              ) : (
                <div></div>
              )}
              <div
                className={
                  currentFloor == floor.floorNum
                    ? "singleFloor current"
                    : "singleFloor"
                }
              >
                <p>{floor.floorNum}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
