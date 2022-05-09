import React from "react";
import { useState } from "react";

interface Props {
  floorNumber: number;
  delayFloor: number;
  setCurrentFloor: (newFloorNumber: number) => void;
}

const UpAndDown: React.FC<Props> = ({
  floorNumber,
  delayFloor,
  setCurrentFloor,
}) => {
  // to prevent user from going up and down the same time.
  const [loading, setLoading] = useState<boolean>(false);

  // Change floor up and down //
  const changeFloor = (floorNumber: number, action: string) => {
    // Floor number
    const oldFloorNumber = floorNumber;

    // If up
    if (action == "up" && oldFloorNumber < 5 && !loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrentFloor(oldFloorNumber + 1);
      }, delayFloor);
    }

    // If down
    if (action == "down" && oldFloorNumber > 0 && !loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrentFloor(oldFloorNumber - 1);
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
