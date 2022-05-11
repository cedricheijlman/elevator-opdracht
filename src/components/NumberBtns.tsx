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
  currentFloor: number;
  setCurrentFloor: (newFloorNumber: number) => void;
}

const NumberBtns: React.FC<Props> = ({
  floors,
  currentFloor,
  setCurrentFloor,
  clickedButtons,
  setClickedButtons,
}) => {
  const [targetFloor, setTargetFloor] = useState<number>(0);
  const [isMoving, setIsMoving] = useState<boolean>(false);

  // handle change
  const handleClickButton = (floorNumber: number) => {
    setClickedButtons((oldVal: any) => [...oldVal, floorNumber]);

    setIsMoving(true);
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
