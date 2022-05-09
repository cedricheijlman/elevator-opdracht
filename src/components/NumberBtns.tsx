import React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Floor {
  floorNum: number;
}

interface Props {
  floors: Floor[];
  setCurrentFloor: (newFloorNumber: number) => void;
}

const NumberBtns: React.FC<Props> = ({ floors, setCurrentFloor }) => {
  // Current Clicked Buttons
  const [clickedButtons, setClickedButtons] = useState<any>([]);

  // handle change
  const handleClickButton = (floorNumber: number) => {
    setClickedButtons((oldVal: any) => [...oldVal, floorNumber]);
  };

  return (
    <div className="numberBtnsContainer">
      {floors.map((floor: Floor) => {
        const floorNumber = floor.floorNum;
        return (
          <p
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
