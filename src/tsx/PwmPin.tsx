import { h } from "preact";
import { useState } from "preact/hooks";
import Konashi from "@ux-xu/konashi-web-bluetooth";
import PwmToggleBtn from "./PwmToggleBtn";
import PwmLedInput from "./PwmLedInput";
import PwmCustomInput from "./PwmCustomInput";

const PwmPin = (props: { pin: number }) => {
  const [mode, setMode] = useState(Konashi.PWM_DISABLE);
  const [percent, setPercent] = useState(0);

  const getValueSet = (m: number) => {
    if (m === Konashi.PWM_DISABLE) {
      return (
        <div className="bl_pwmPin_value">
          <p></p>
        </div>
      );
    }

    if (m === Konashi.PWM_ENABLE_LED_MODE) {
      return (
        <PwmLedInput
          pin={props.pin}
          value={percent}
          setValue={setPercent}
          min={0}
          max={100}
        />
      );
    }

    if (m === Konashi.PWM_ENABLE) {
      return <PwmCustomInput pin={props.pin} />;
    }
  };

  return (
    <div className="bl_pwmPin">
      <div className="bl_pwmPin_id">{props.pin}</div>
      <div className="bl_pwmPin_toggle">
        <PwmToggleBtn pin={props.pin} mode={mode} setMode={setMode} />
      </div>
      {getValueSet(mode)}
    </div>
  );
};

export default PwmPin;
