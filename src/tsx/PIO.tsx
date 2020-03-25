import { h } from "preact";
import { useState } from "preact/hooks";
import PioPin from "./PioPin";
import StartInputNotifyBtn from "./StartInputNotifyBtn";

const PIO = () => {
  const [inputValue, setInputValue] = useState<number>(0x00);

  return (
    <div className="bl_pio">
      <div className="bl_PioPinList">
        <div className="bl_pioPin">
          <div className="bl_pioPin_id">PIN</div>
          <div className="bl_pioPin_ioToggle">I / O</div>
          <div className="bl_pioPin_value">Value</div>
          <div className="bl_pioPin_pullup"></div>
        </div>
        <PioPin pinNumber={0} inputValue={inputValue}/>
        <PioPin pinNumber={1} inputValue={inputValue}/>
        <PioPin pinNumber={2} inputValue={inputValue}/>
        <PioPin pinNumber={3} inputValue={inputValue}/>
        <PioPin pinNumber={4} inputValue={inputValue}/>
        <PioPin pinNumber={5} inputValue={inputValue}/>
        <PioPin pinNumber={6} inputValue={inputValue}/>
      </div>

      <StartInputNotifyBtn setInputValue={setInputValue} />
    </div>
  );
};

export default PIO;
