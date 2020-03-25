import { h } from "preact";
import { NavbarItem, NavbarContent } from "./NavbarItem";

export const NavbarContents: NavbarContent[] = [
  {
    id: "info",
    text: "info",
    icon: "fa-info"
  },
  {
    id: "pio",
    text: "PIO",
    icon: "fa-adjust"
  },
  {
    id: "pwm",
    text: "PWM",
    icon: "fa-wave-square"
  },
  {
    id: "aio",
    text: "AIO",
    icon: "fa-tachometer-alt"
  },
  {
    id: "more",
    text: "more",
    icon: "fa-bars"
  }
];

const Navbar = (props: {
  current: string;
  setCurrent: (arg0: string) => void;
}) => {
  const handleClick = (event: MouseEvent) => {
    const element = event.currentTarget as Element; // https://stackoverflow.com/questions/28900077
    const currentId = element.getAttribute("name");
    props.setCurrent(currentId !== null ? currentId : "info");
  };

  const navbarItems = NavbarContents.map(item => {
    return (
      <NavbarItem
        key={item.id}
        id={item.id}
        icon={item.icon}
        text={item.text}
        current={props.current}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="ly_navbar">
      <div className="ly_navbar_inner">{navbarItems}</div>
    </div>
  );
};

export default Navbar;
