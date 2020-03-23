import { h } from "preact";

export interface NavbarContent {
  icon: string;
  text: string;
  id: string;
}

export const NavbarItem = (props: {
  icon: string;
  text: string;
  id: string;
  current: string;
  onClick: (event: MouseEvent) => void;
}) => {
  const handleSelected = () => {
    if (props.current === props.id) {
      return "selected";
    }
    return "";
  };

  return (
    <button
      className={"bl_navbarItem " + handleSelected()}
      role="tab"
      name={props.id}
      onClick={props.onClick}
    >
      <div className="bl_navbarItem_icon">
        <i className={"fas fa-2x " + props.icon}></i>
      </div>
      <div className="bl_navbarItem_text">
        <p>{props.text}</p>
      </div>
    </button>
  );
};

export default NavbarItem;
