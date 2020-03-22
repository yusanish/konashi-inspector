import { h } from "preact";

const NavbarItem = (props: { iconClass: string; displayText: string }) => {
  return (
    <button className="bl_navbarItem" role="tab">
      <div className="bl_navbarItem_icon">
        <i className={"fas fa-2x " + props.iconClass}></i>
      </div>
      <div className="bl_navbarItem_text">
        <p>{props.displayText}</p>
      </div>
    </button>
  );
};

export default NavbarItem;
