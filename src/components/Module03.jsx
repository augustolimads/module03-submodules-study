import React from "react";
import style from "./style.module.css";

export const Module03 = ({ counter }) => {
  return (
    <div className={style.card}>
      <h1>MODULE 03</h1>
      <p className={style.display}>{counter}</p>
    </div>
  );
};
