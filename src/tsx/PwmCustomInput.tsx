import { h, JSX } from "preact";
import { useContext, useState } from "preact/hooks";
import KonashiContext from "./KonashiContext";

const PwmCustomInput = (props: {
  pin: number;
}) => {
  const { konashi } = useContext(KonashiContext);
  const [ duty, setDuty ] = useState(50);
  const [ period, setPeriod ] = useState(50);

  const changeDuty = async ({
    currentTarget
  }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const rawValue: number = parseInt(currentTarget.value);
    const value = rawValue < 50 ? 50 : rawValue > 4294967295 ? 4294967295 : rawValue;
    setDuty(value)
    await konashi?.pwmDuty(props.pin, value);
  };

  const changePeriod = async ({
    currentTarget
  }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const rawValue: number = parseInt(currentTarget.value);
    const value = rawValue < 50 ? 50 : rawValue > 4294967295 ? 4294967295 : rawValue;
    setPeriod(value)
    await konashi?.pwmPeriod(props.pin, value);
  };

  return (
    <div className="bl_pwmPin_value">
      <div className="bl_inputCustom">
        <div className="bl_inputCustom_duty">
          <div className="bl_inputCustom_label">Duty: </div>
          <input
            className="el_textInput"
            type="number"
            name={"pin" + props.pin + "-text"}
            value={duty}
            onChange={changeDuty}
          />
        </div>
        <div className="bl_inputCustom_period">
          <div className="bl_inputCustom_label">Period: </div>
          <input
            className="el_textInput"
            type="number"
            name={"pin" + props.pin + "-text"}
            value={period}
            onChange={changePeriod}
          />
        </div>
      </div>
    </div>
  );
};

export default PwmCustomInput;
