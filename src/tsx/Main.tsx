import { h } from "preact";
import KonashiContext from "./KonashiContext";
import { useContext } from "preact/hooks";

const Main = (props: { current: string }) => {
  const { konashi } = useContext(KonashiContext);

  return (
    <div className="ly_main">
      {konashi}
      <div>{props.current}</div>
    </div>
  );
};

export default Main;
