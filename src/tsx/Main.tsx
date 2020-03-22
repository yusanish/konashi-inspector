import { h } from "preact";
import KonashiContext from "./KonashiContext";
import { useContext } from "preact/hooks";

const Main = () => {
  const { konashi } = useContext(KonashiContext);

  return <div className="ly_main">{konashi}</div>;
};

export default Main;
