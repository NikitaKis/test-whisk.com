import * as React from "react";
import * as style from "./style.css";
import { NavLink } from "react-router-dom";

export namespace Navbar {
  export interface Props {}
}
export class Navbar extends React.Component<Navbar.Props> {
  constructor(props: Navbar.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div className={style.navbar}>
        <div className={style.navbar_link_brand}>Whisk</div>
        <div className={style.navbar_link_toggle}>
          <i className={style.fa_bars} />
        </div>
        <nav className={style.navbar_items}>
          <div className={style.navbar_link}>
            <NavLink to="/">Recipe feed</NavLink>
          </div>
          <div className={style.navbar_link}>Your Cookbook</div>
          <div className={style.navbar_link}>Meal Planner</div>
        </nav>
        <nav className={style.navbar_items_right}>
          <div className={style.navbar_link}>Sign Up</div>
          <div className={style.navbar_link}>LogIn</div>
        </nav>
      </div>
    );
  }
}
