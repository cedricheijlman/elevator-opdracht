import React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Floor {
  floorNum: number;
}

interface Props {
  floors: Floor[];

  clickedButtons: number[];
  setClickedButtons: (array: number[]) => void;

  isMoving: boolean;
  setIsMoving: (newStatus: boolean) => void;

  currentFloor: number;
  setCurrentFloor: (newFloorNumber: number) => void;

  direction: string;
}

const NumberBtns: React.FC<Props> = ({
  floors,
  currentFloor,
  setCurrentFloor,
  clickedButtons,
  setClickedButtons,
  isMoving,
  setIsMoving,
  direction,
}) => {
  let clickedButtonsLocalArr: number[] = clickedButtons;

  // every rerender
  useEffect(() => {
    if (isMoving && clickedButtons.length > 0) {
      setClickedButtons(clickedButtonsLocalArr);
      setTimeout(() => {
        sortArray(clickedButtonsLocalArr);
      }, 5000);
    } else if (isMoving && clickedButtons.length == 0) {
      setIsMoving(false);
    }
  }, [isMoving]);

  // sort arr to get to nearest floor
  const sortArray = (array: number[]) => {
    let goUp = array
      .filter((floor: number) => floor > currentFloor)
      .sort((a: number, b: number) => a - b);
    let goDown = array
      .filter((floor: number) => floor < currentFloor)
      .sort((a: number, b: number) => b - a);

    // if Direction is up
    if (direction == "up") {
      let newArr = goUp.concat(goDown);
      setCurrentFloor(newArr[0]);
      return setClickedButtons(
        newArr.filter((val: number) => val != newArr[0])
      );
    }

    // If direction is down
    if (direction == "down") {
      let newArr = goDown.concat(goUp);
      setCurrentFloor(newArr[0]);
      return setClickedButtons(
        newArr.filter((val: number) => val != newArr[0])
      );
    }

    // If no direction is set
    if (direction == "") {
      return array.sort((a: number, b: number) => {
        return Math.abs(currentFloor - a) - Math.abs(currentFloor - b);
      });
    }
  };

  // handle change
  const handleClickButton = (floorNumber: number) => {
    if (!isMoving) {
      setIsMoving(true);
    }

    if (floorNumber != currentFloor) {
      clickedButtonsLocalArr.push(floorNumber);
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
            className="floorNumber"
          >
            {floor.floorNum}
          </p>
        );
      })}
    </div>
  );
};

export default NumberBtns;
