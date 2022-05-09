import React from "react";

interface Floor {
  floorNum: number;
}

interface Props {
  floors: Floor[];
}

const NumberBtns: React.FC<Props> = ({ floors }) => {
  return (
    <div className="numberBtnsContainer">
      {floors.map((floor: Floor) => {
        return <p className="floorNumber">{floor.floorNum}</p>;
      })}
    </div>
  );
};

export default NumberBtns;
