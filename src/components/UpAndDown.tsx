import React from "react";

interface Props {
  floorNumber: number;
  delayFloor: number;
  setCurrentFloor: (newFloorNum: number) => void;
}

const UpAndDown: React.FC<Props> = ({
  floorNumber,
  delayFloor,
  setCurrentFloor,
}) => {
  // -------------------------- //
  // Change floor up and down //
  const changeFloor = (floorNum: number, action: string): void => {
    const oldFloorNum = floorNum;
    if (action == "up" && floorNum < 5) {
      setTimeout(() => {
        setCurrentFloor(oldFloorNum + 1);
      }, delayFloor);
    }

    if (action == "down" && floorNum > 0) {
      setTimeout(() => {
        setCurrentFloor(oldFloorNum - 1);
      }, delayFloor);
    }
  };
  return (
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
  );
};

export default UpAndDown;
