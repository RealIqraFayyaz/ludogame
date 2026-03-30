import HomeBox from "./HomeBox";
import CellGrid from "./CellGrid";

export default function LudoBoard() {

  const greenPath = [
    ["", "", ""],
    ["", "green", "green"],
    ["green", "green", ""],
    ["", "green", ""],
    ["", "green", ""],
    ["", "green", ""],
  ];

  const redPath = [
    ["", "red", "", "", "", ""],
    ["", "red", "red", "red", "red", "red"],
    ["", "", "red", "", "", ""],
  ];

  const yellowPath = [
    ["", "", "", "yellow", "", ""],
    ["yellow", "yellow", "yellow", "yellow", "yellow", ""],
    ["", "", "", "", "yellow", ""],
  ];

  const bluePath = [
    ["", "blue", ""],
    ["", "blue", ""],
    ["", "blue", ""],
    ["", "blue", "blue"],
    ["blue", "blue", ""],
    ["", "", ""],
  ];

  return (
    <div className="board">

   
      <div className="row">
        <HomeBox color="red" />
        <CellGrid grid={greenPath} />
        <HomeBox color="green" />
      </div>

     
      <div className="row">
        <CellGrid grid={redPath} />
        <div className="destination"></div>
        <CellGrid grid={yellowPath} />
      </div>

    
      <div className="row">
        <HomeBox color="blue" />
        <CellGrid grid={bluePath} />
        <HomeBox color="yellow" />
      </div>

    </div>
  );
}