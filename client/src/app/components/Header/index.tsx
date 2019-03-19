import * as React from "react";
import * as style from "./style.css";

export namespace Header {
  export interface Props {}
}
export class Header extends React.Component<Header.Props> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div className={style.header_container}>
        <div className={style.background_header} />
        <h1>Pick the recipe you prefer for lunch</h1>
      </div>
    );
  }
}
