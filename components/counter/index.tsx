"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Counter = ({ count, text }: { count: number; text: string }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < count) {
      const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [counter, count]);
  return (
    <div className={styles.firstCount}>
      <h1>{counter}</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default Counter;
