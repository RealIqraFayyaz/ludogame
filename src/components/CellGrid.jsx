import Cell from "./Cell";

export default function CellGrid({ grid }) {
  return (
    <div className="cell-container">
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((cell, j) => (
            <Cell key={j} color={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}