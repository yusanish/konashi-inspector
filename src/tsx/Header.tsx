import { h } from "preact";
import ConnectBtn from "./ConnectBtn";

const Header = () => {
  return (
    <div className="ly_header_wrapper">
      <header className="ly_header">
        <div className="ly_header_inner">
          <h1 className="bl_header_title">Control konashi 3.0</h1>
          <div className="bl_header_button">
            <ConnectBtn />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
