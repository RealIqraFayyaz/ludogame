export default function Cell({ color }) {
  return <div className={`cell ${color ? color : ""}`}></div>;
}