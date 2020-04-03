import { h } from "preact";
import { useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";

const AnalogReadBtn = (props: {
  aid: number;
  value: number;
  setValue: (arg0: number) => void;
}) => {
  const { konashi } = useContext(KonashiContext);

  const handleClick = async () => {
    if (konashi !== null) {
      const value = await konashi.analogRead(props.aid);
      props.setValue(value);
    } else {
      props.setValue(-1);
    }
  };

  return (
    <button className="bl_analogReadBtn" onClick={handleClick}>
      <div className="bl_analogReadBtn_inner">
        <div className="el_button">Read</div>
      </div>
    </button>
  );
};

export default AnalogReadBtn;
