import React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Floor {
  floorNum: number;
}

interface Props {
  floors: Floor[];

  clickedButtons: number[];
  setClickedButtons: (array: any) => void;

  isMoving: boolean;
  setIsMoving: (newStatus: boolean) => void;

  currentFloor: number;
  setCurrentFloor: (newFloorNumber: number) => void;
}

const NumberBtns: React.FC<Props> = ({
  floors,
  currentFloor,
  setCurrentFloor,
  clickedButtons,
  setClickedButtons,
  isMoving,
  setIsMoving,
}) => {
  useEffect(() => {
    if (isMoving && clickedButtons.length > 0) {
      setTimeout(() => {
        setCurrentFloor(clickedButtons[0]);
        setClickedButtons((oldVal: any) =>
          oldVal.filter((val: any) => val != oldVal[0])
        );
      }, 4000);
    } else if (isMoving && clickedButtons.length == 0) {
      setIsMoving(false);
    }
  }, [isMoving]);

  // handle change
  const handleClickButton = (floorNumber: number) => {
    setClickedButtons((oldVal: any) => [...oldVal, floorNumber]);
    if (!isMoving) {
      setIsMoving(true);
    }
  };

  return (
    <div className="numberBtnsContainer">
      {floors.map((floor: Floor, index: number) => {
        const floorNumber = floor.floorNum;
        return (
          <p
            key={index}
            onClick={() => {
              handleClickButton(floorNumber);
            }}
            className={
              clickedButtons.includes(floorNumber)
                ? "floorNumber include"
                : "floorNumber"
            }
          >
            {floor.floorNum}
          </p>
        );
      })}
    </div>
  );
};

export default NumberBtns;
