import { h } from "preact";
import { useState } from "preact/hooks";
import Konashi from "@ux-xu/konashi-web-bluetooth";
import ModeToggleBtn from "./ModeToggleBtn";
import ValueToggleBtn from "./ValueToggleBtn";
import PullupToggleBtn from "./PullupToggleBtn";

const PioPin = (props: { pinNumber: number; inputValue: number }) => {
  const [mode, setMode] = useState(Konashi.INPUT);
  const [value, setValue] = useState(Konashi.LOW);
  const [pullup, setPullup] = useState(Konashi.NO_PULLS);

  return (
    <div className="bl_pioPin">
      <div className="bl_pioPin_id">{props.pinNumber}</div>
      <div className="bl_pioPin_ioToggle">
        <ModeToggleBtn pid={props.pinNumber} mode={mode} setMode={setMode} />
      </div>
      <div className="bl_pioPin_value">
        <ValueToggleBtn
          pid={props.pinNumber}
          mode={mode}
          value={value}
          setValue={setValue}
          inputValue={props.inputValue}
        />
      </div>
      <div className="bl_pioPin_pullup">
        <PullupToggleBtn
          pid={props.pinNumber}
          pullup={pullup}
          setPullup={setPullup}
        />
      </div>
    </div>
  );
};

export default PioPin;
