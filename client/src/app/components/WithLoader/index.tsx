import * as React from "react";
import * as style from "./style.css";

interface IProps {
  isFetching: boolean;
}

export const WithLoader = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & IProps> => (props: P & IProps) =>
  props.isFetching ? (
    <div className={style.loader} />
  ) : (
    <Component {...props} />
  );
