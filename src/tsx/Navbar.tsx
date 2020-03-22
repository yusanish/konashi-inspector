import { h } from "preact";
import NavbarItem from "./NavbarItem";

// TODO: isActive ハンドリング
// できたら、リストで繰り返し処理で書く

const Navbar = () => {
  return (
    <div className="ly_navbar">
      <div className="ly_navbar_inner">
        <NavbarItem iconClass="fa-info" displayText="info" />
        <NavbarItem iconClass="fa-adjust" displayText="PIO" />
        <NavbarItem iconClass="fa-wave-square" displayText="PWM" />
        <NavbarItem iconClass="fa-tachometer-alt" displayText="AIO" />
        <NavbarItem iconClass="fa-bars" displayText="more" />
      </div>
    </div>
  );
};

export default Navbar;
