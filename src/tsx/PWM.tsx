import { h } from "preact";
import PwmPin from "./PwmPin";
import Konashi from "@ux-xu/konashi-web-bluetooth";

const PWM = () => {
  return (
    <div className="bl_pwm">
      <div className="bl_pwmPinList">
        <div className="bl_pwmPin">
          <div className="bl_pwmPin_id">PIN</div>
          <div className="bl_pwmPin_toggle">Mode</div>
          <div className="bl_pwmPin_value"></div>
        </div>
        <PwmPin pin={Konashi.PIO0} />
        <PwmPin pin={Konashi.PIO1} />
        <PwmPin pin={Konashi.PIO2} />
        <PwmPin pin={Konashi.PIO3} />
        <PwmPin pin={Konashi.PIO4} />
        <PwmPin pin={Konashi.PIO5} />
        <PwmPin pin={Konashi.PIO6} />
      </div>
      <div className="bl_pwmDescription">
        <p>
          LED: 0 - 100 (<span>Duty/Period[%]</span>)
        </p>
        <p>
          custom: 50 - 2^32 (<span>Duty, Period[μsec]</span>)
        </p>
      </div>
    </div>
  );
};

export default PWM;
