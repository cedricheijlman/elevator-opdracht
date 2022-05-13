import React from "react";
import { useState } from "react";

interface Props {
  direction: string;
  setDirection: (direction: string) => void;
  currentFloor: number;
}

const UpAndDown: React.FC<Props> = ({
  direction,
  setDirection,
  currentFloor,
}) => {
  return (
    <div className="upDownButtons">
      <p
        className={direction == "up" && currentFloor !== 5 ? "selectedBtn" : ""}
        onClick={() => {
          if (currentFloor !== 5) {
            setDirection(direction !== "up" ? "up" : "down");
          }
        }}
      >
        Up
      </p>
      <p
        className={
          direction == "down" && currentFloor !== 0 ? "selectedBtn" : ""
        }
        onClick={() => {
          if (currentFloor !== 0) {
            setDirection(direction !== "down" ? "down" : "up");
          }
        }}
      >
        Down
      </p>
    </div>
  );
};

export default UpAndDown;
