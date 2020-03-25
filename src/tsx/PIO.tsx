import { h } from "preact";
import PioPin from "./PioPin";
import { useState } from "preact/hooks";
// import StartNotifyBtn from "./StartNotifyBtn";

const PIO = () => {
  const [inputValue, setInputValue] = useState(0x00);

  const updateNotifyInput = () => {};

  return (
    <div className="bl_pio">
      <div className="bl_PioPinList">
        <div className="bl_pioPin">
          <div className="bl_pioPin_id">PIN</div>
          <div className="bl_pioPin_ioToggle">I / O</div>
          <div className="bl_pioPin_value">Value</div>
          <div className="bl_pioPin_pullup"></div>
        </div>
        <PioPin pinNumber={0} />
        <PioPin pinNumber={1} />
        <PioPin pinNumber={2} />
        <PioPin pinNumber={3} />
        <PioPin pinNumber={4} />
        <PioPin pinNumber={5} />
        <PioPin pinNumber={6} />
      </div>
    </div>
  );
};

export default PIO;
