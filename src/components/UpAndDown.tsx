import React from "react";
import { useState } from "react";

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
  // to prevent user from going up and down the same time.
  const [loading, setLoading] = useState<boolean>(false);

  // -------------------------- //
  // Change floor up and down //
  const changeFloor = (floorNum: number, action: string) => {
    const oldFloorNum = floorNum;
    if (action == "up" && floorNum < 5 && !loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrentFloor(oldFloorNum + 1);
      }, delayFloor);
    }

    if (action == "down" && floorNum > 0 && !loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
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
