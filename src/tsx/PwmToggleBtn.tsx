import { h } from "preact";
import { useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";
import Konashi from "@ux-xu/konashi-web-bluetooth";

const PioToggleBtn = (props: {
  pin: number;
  mode: number;
  setMode: (arg0: number) => void;
}) => {
  const { konashi } = useContext(KonashiContext);

  const setClass = (mode: number) => {
    switch (mode) {
      case Konashi.PWM_DISABLE:
        return "disable";
      case Konashi.PWM_ENABLE_LED_MODE:
        return "led";
      case Konashi.PWM_ENABLE:
        return "custom";
      default:
        return "disable";
    }
  };

  const displayText = (mode: number) => {
    switch (mode) {
      case Konashi.PWM_DISABLE:
        return "disable";
      case Konashi.PWM_ENABLE_LED_MODE:
        return "LED";
      case Konashi.PWM_ENABLE:
        return "custom";
      default:
        return "disable";
    }
  };

  const handleClick = async () => {
    let nextMode = Konashi.PWM_DISABLE;

    switch (props.mode) {
      case Konashi.PWM_DISABLE:
        nextMode = Konashi.PWM_ENABLE_LED_MODE;
        break;
      case Konashi.PWM_ENABLE_LED_MODE:
        nextMode = Konashi.PWM_ENABLE;
        break;
      case Konashi.PWM_ENABLE:
        nextMode = Konashi.PWM_DISABLE;
        break;
      default:
        nextMode = Konashi.PWM_DISABLE;
        break;
    }
    
    await konashi?.pwmMode(props.pin, nextMode);
    props.setMode(nextMode);
  };

  return (
    <button className="bl_pwmToggleBtn" onClick={handleClick}>
      <div className="bl_pwmToggleBtn_inner">
        <div className={"el_button " + setClass(props.mode)}>
          {displayText(props.mode)}
        </div>
      </div>
    </button>
  );
};

export default PioToggleBtn;
