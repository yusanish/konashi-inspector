import { h } from "preact";
import AioPin from "./AioPin";
import Konashi from "@ux-xu/konashi-web-bluetooth";


const AIO = () => {
  return (
    <div className="bl_aio">
      <div className="bl_aioPinList">
        <div className="bl_aioPin">
          <div className="bl_aioPin_id">PIN</div>
          <div className="bl_aioPin_input">Input</div>
          <div className="bl_aioPin_value">Value [mV]</div>
        </div>
        <AioPin pinNumber={Konashi.AIO0} />
        <AioPin pinNumber={Konashi.AIO1} />
        <AioPin pinNumber={Konashi.AIO2} />
      </div>
      <p>Analog value: 0 - 1300 mV</p>
    </div>
  );
};

export default AIO;
