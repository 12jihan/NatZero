import type { ReactElement } from "react";
import { NavLink } from "react-router";

export default function SideBar(): ReactElement {
  return (
    <>
      <div className="side-nav__group">
        <NavLink className="side-nav__item" to="/">
          Campaigns
        </NavLink>
      </div>
    </>
  );
}
