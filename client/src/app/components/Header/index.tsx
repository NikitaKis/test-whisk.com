import * as React from "react";
import * as style from "./style.css";

interface IProps {}

export const Header: React.FC<IProps> = () => (
  <div className={style.header_container}>
    <div className={style.background_header} />
    <h1>Pick the recipe you prefer for lunch</h1>
  </div>
);
