import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UpAndDown from "./components/UpAndDown";
import NumberBtns from "./components/NumberBtns";

interface Floor {
  floorNum: number;
}

const App: React.FC = () => {
  // Current Clicked Buttons
  const [clickedButtons, setClickedButtons] = useState<any>([]);
  // All floors
  const floors: Floor[] = [
    { floorNum: 5 },
    { floorNum: 4 },
    { floorNum: 3 },
    { floorNum: 2 },
    { floorNum: 1 },
    { floorNum: 0 },
  ];

  // floor direction
  const [direction, setDirection] = useState<string>("");

  // Current floor
  const [currentFloor, setCurrentFloor] = useState<number>(0);

  // Check if elevator isMoving
  const [isMoving, setIsMoving] = useState<boolean>(false);

  return (
    <div className="container">
      <h1>React Programming Assignment</h1>

      <div className="elevatorContainer">
        {floors.map((floor: Floor, index: number) => {
          const floorNumber = floor.floorNum;
          return (
            <div key={index} className="singleFloorContainer">
              {currentFloor == floorNumber ? (
                <React.Fragment>
                  <UpAndDown
                    direction={direction}
                    setDirection={setDirection}
                    currentFloor={currentFloor}
                  />
                  <NumberBtns
                    direction={direction}
                    isMoving={isMoving}
                    setIsMoving={setIsMoving}
                    currentFloor={currentFloor}
                    clickedButtons={clickedButtons}
                    setClickedButtons={setClickedButtons}
                    setCurrentFloor={setCurrentFloor}
                    floors={floors}
                  />
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
