import React from "react";
import { Display } from "./Display";
import style from "./style.module.css";

export const Module03 = ({ counter }) => {
  return (
    <div className={style.card}>
      <h1>MODULE 03</h1>
      <Display counter={counter + 2} />
    </div>
  );
};
