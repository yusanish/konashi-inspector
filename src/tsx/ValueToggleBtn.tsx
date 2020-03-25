import { h } from "preact";
import { useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";
import Konashi from "@ux-xu/konashi-web-bluetooth";

const ValueToggleBtn = (props: {
  pid: number;
  mode: number;
  value: number;
  setValue: (arg0: number) => void;
  inputValue: number;
}) => {
  const { konashi } = useContext(KonashiContext);

  const setClass = () => {
    let classText = "";
    if (props.mode === Konashi.INPUT) {
      classText += " input";
    } else {
      classText += " output";
    }

    if (props.value === Konashi.LOW) {
      classText += " low";
    } else {
      classText += " high";
    }

    return classText;
  };

  const displayValue = () => {
    if (props.mode === Konashi.OUTPUT) {
      return props.value === Konashi.LOW ? "LOW" : "HIGH";
    } else {
      // INPUT
      const input = (props.inputValue >> props.pid) & 0x01;
      props.setValue(input);
      return input === Konashi.LOW ? "LOW" : "HIGH";
    }
  };

  const handleClick = async () => {
    if (props.mode === Konashi.OUTPUT) {
      props.setValue(props.value !== Konashi.LOW ? Konashi.LOW : Konashi.HIGH);

      const value = props.value !== Konashi.LOW ? Konashi.LOW : Konashi.HIGH;
      await konashi?.digitalWrite(props.pid, value);
    }
  };

  return (
    <button className={"bl_valueToggleBtn " + setClass()} onClick={handleClick}>
      <div className="bl_valueToggleBtn_inner">
        <div className={"el_valueDisplay " + setClass()}>{displayValue()}</div>
      </div>
    </button>
  );
};

export default ValueToggleBtn;
