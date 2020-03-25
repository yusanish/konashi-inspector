import { h } from "preact";
import { useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";
import Konashi from "@ux-xu/konashi-web-bluetooth";

const ModeToggleBtn = (props: {
  pid: number;
  mode: number;
  setMode: (arg0: number) => void;
}) => {
  const { konashi } = useContext(KonashiContext);

  const setClass = (mode: number) => {
    return mode === Konashi.INPUT ? "input" : "output";
  };

  const displayText = (mode: number) => {
    return mode === Konashi.INPUT ? "I" : "O";
  };

  const handleClick = async () => {
    props.setMode(
      props.mode !== Konashi.INPUT ? Konashi.INPUT : Konashi.OUTPUT
    );
    
    const mode = props.mode !== Konashi.INPUT ? Konashi.INPUT : Konashi.OUTPUT
    await konashi?.pinMode(props.pid, mode);
  };

  return (
    <button className="bl_ModeToggleBtn" onClick={handleClick}>
      <div className="bl_ModeToggleBtn_inner">
        <div className={"el_ModeBox " + setClass(props.mode)}>
          {displayText(props.mode)}
        </div>
      </div>
    </button>
  );
};

export default ModeToggleBtn;
