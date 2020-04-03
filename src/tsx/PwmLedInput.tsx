import { h, JSX } from "preact";
import { useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";

const PwmLedInput = (props: {
  pin: number;
  value: number;
  setValue: (arg0: number) => void;
  min: number;
  max: number;
}) => {
  const { konashi } = useContext(KonashiContext);

  const changeSlider = async ({
    currentTarget
  }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const value: number = parseInt(currentTarget.value);
    props.setValue(value);
    await konashi?.pwmWrite(props.pin, value);
  };

  const changeText = async ({
    currentTarget
  }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const value: number = parseInt(currentTarget.value);
    props.setValue(value > 100 ? 100 : value < 0 ? 0 : value);
    await konashi?.pwmWrite(props.pin, value);
  };

  return (
    <div className="bl_pwmPin_value">
      <div className="bl_inputLED">
        <div className="bl_inputLED_slider">
          <input
            className="el_sliderInput"
            type="range"
            name={"pin" + props.pin + "-ledslider"}
            value={props.value}
            onInput={changeSlider}
            step="5"
            min={props.min}
            max={props.max}
          />
        </div>
        <div className="bl_inputLED_text">
          <input
            className="el_textInput"
            type="number"
            name={"pin" + props.pin + "-ledtext"}
            value={props.value}
            onChange={changeText}
            min={props.min}
            max={props.max}
          />
        </div>
      </div>
    </div>
  );
};

export default PwmLedInput;
