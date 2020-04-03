import { h } from "preact";
import { useState } from "preact/hooks";
import AnalogReadBtn from "./AnalogReadBtn";

const AioPin = (props: { pinNumber: number }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="bl_aioPin">
      <div className="bl_aioPin_id">{props.pinNumber}</div>
      <div className="bl_aioPin_input">
        <AnalogReadBtn
          aid={props.pinNumber}
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="bl_aioPin_value">{value}</div>
    </div>
  );
};

export default AioPin;
