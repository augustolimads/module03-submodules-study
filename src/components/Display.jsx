import React from "react";
import style from "./style.module.css";

export const Display = ({ counter }) => {
  return <p className={style.display}>{counter}</p>;
};
