import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { dummyText } from "../TextGenerate/sampleText";

let timer;
export default function TextGenerate() {
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);

  const handleGenerate = () => {
    if (started) {
      return;
    }
    setStarted(true);
    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === dummyText.length - 1) clearInterval(timer);
      setText((prev) => prev + dummyText[i]);
    }, 20);
  };
  const handleReset = () => {
    setText("");
    clearInterval(timer);
    setStarted(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className={styles.buttonsContainer}>
        <button onClick={handleGenerate} className={styles.button}>
          Start Generating
        </button>
        <button onClick={handleReset} className={styles.button}>
          Reset
        </button>
      </div>
      <div className={styles.container}>
        {!text ? "Click Start Generating to see the effect" : text}
      </div>
    </div>
  );
}
