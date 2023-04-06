import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [number, setNumber] = useState();
  const [startClicked, setStartClicked] = useState(false);
  const increment = useRef(null);
  const handleDecrement = (e) => {
    setStartClicked(true);
    increment.current = setInterval(() => {
      setNumber((timer) => {
        if (timer < 1) {
          handleEnd();
        }
        return timer - 1;
      });
    }, 1000);
  };
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const handleEnd = () => {
    clearInterval(increment.current);
    setStartClicked(false);
    setNumber("");
  };
  return (
    <div className="App">
      <input type="tel" onChange={handleChange} value={number} />

      <button onClick={handleDecrement}>Start</button>
      <button onClick={handleEnd}>End</button>

      {startClicked && <h1>{number}</h1>}
    </div>
  );
}
