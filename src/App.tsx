import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  // All floors
  const floors: Object[] = [
    { floorNum: 0 },
    { floorNum: 1 },
    { floorNum: 2 },
    { floorNum: 3 },
    { floorNum: 4 },
    { floorNum: 5 },
  ];

  // Current floor
  const [currentFloor, setCurrentFloor] = useState<number>(0);

  // Change floor up and down
  const changeFloor = (floorNum: number, action: string): void => {
    const oldFloorNum = floorNum;
    if (action == "up" && floorNum < 5) {
      setTimeout(() => {
        setCurrentFloor(oldFloorNum + 1);
      }, 1000);
    }

    if (action == "down" && floorNum > 0) {
      setTimeout(() => {
        setCurrentFloor(oldFloorNum - 1);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h1>Elevator</h1>
      <div className="elevatorContainer">
        {floors.reverse().map((floor: any) => {
          const floorNumber = floor.floorNum;
          return (
            <div className="singleFloorContainer">
              {currentFloor == floorNumber ? (
                <div className="upDownButtons">
                  <p
                    onClick={() => {
                      changeFloor(floorNumber, "up");
                    }}
                  >
                    Up
                  </p>
                  <p
                    onClick={() => {
                      changeFloor(floorNumber, "down");
                    }}
                  >
                    Down
                  </p>
                </div>
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
