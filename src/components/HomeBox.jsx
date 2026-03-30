import Circle from "./Circle";

export default function HomeBox({ color }) {
  return (
    <div className={`${color}-box`}>
      <div className="white-box">
        <Circle color={color} />
        <Circle color={color} />
        <Circle color={color} />
        <Circle color={color} />
      </div>
    </div>
  );
}