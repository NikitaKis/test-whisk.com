import * as React from "react";

export namespace Header {
  export interface Props {
  }
}
export class Header extends React.Component<Header.Props> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <header>
        <h1>Recipes</h1>
      </header>
    );
  }
}
