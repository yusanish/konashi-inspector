import { h } from "preact";
import { useState } from "preact/hooks";
import Konashi from "@ux-xu/konashi-web-bluetooth";
import ModeToggleBtn from "./ModeToggleBtn";
import ValueToggleBtn from "./ValueToggleBtn";

const PioPin = (props: { pinNumber: number }) => {
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
        <ValueToggleBtn pid={props.pinNumber} mode={mode} value={value} setValue={setValue} />
      </div>
      <div className="bl_pioPin_pullup">
        {/* {pullup} */}
        {/* props: pullup, setPullup */}
      </div>
    </div>
  );
};

export default PioPin;
