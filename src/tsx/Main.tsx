import { h } from "preact";
import { useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";
import Info from "./Info";
import PIO from "./PIO";

const Main = (props: { current: string }) => {
  const { konashi } = useContext(KonashiContext);

  const isUnable = () => {
    if (konashi === null) {
      return "unable";
    }
    return "";
  };

  const selectRenderItem = (selected: string) => {
    switch (selected) {
      case "info":
        return <Info />
      case "pio":
        return <PIO />
        break;
      case "pwm":
        break;
      case "aio":
        break;
      case "more":
        break;
      default:
        break;
    }
  };

  return (
    <div className="ly_main">
      <div className={"ly_main_inner " + isUnable()}>
        {selectRenderItem(props.current)}
      </div>
    </div>
  );
};

export default Main;
