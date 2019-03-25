import * as React from "react";
import { WithLoader } from "app/components/WithLoader";
import * as style from "./style.css";

interface IProps {
  handleClick: () => void;
}

const BtnWithLoader: React.FC<IProps> = React.memo(({ handleClick }) => {
  return (
    <button onClick={handleClick} className={style.button}>
      Show more recipes
    </button>
  );
});

export default WithLoader(BtnWithLoader);
