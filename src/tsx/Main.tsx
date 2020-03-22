import { h } from "preact";
import KonashiContext from "./KonashiContext";
import { useContext } from "preact/hooks";

const Main = () => {
  const { konashi } = useContext(KonashiContext);

  return <div>{konashi}</div>;
};

export default Main;
