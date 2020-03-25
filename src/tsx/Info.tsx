import { h } from "preact";
import { useContext, useState } from "preact/hooks";
import KonashiContext from "./KonashiContext";

const Info = () => {
  const { konashi } = useContext(KonashiContext);

  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("disconnected");
  const [rssi, setRssi] = useState<number>(0);
  const [battery, setBattery] = useState<number>(0);

  if (konashi !== null) {
    setName(konashi.deviceName);
    setStatus(konashi.isConnected ? "connected" : "disconnected");
  }
  else {
    setName("");
    setStatus("disconnected");
    setRssi(0);
    setBattery(0);
  }

  return (
    <div className="bl_info">
      <ul className="bl_infoList">
        <li className="bl_infoItem">
          <div className="bl_infoItem_label">Name</div>
          <div className="bl_infoItem_data">{name}</div>
        </li>
        <li className="bl_infoItem">
          <div className="bl_infoItem_label">Status</div>
          <div className="bl_infoItem_data">{status}</div>
        </li>
        <li className="bl_infoItem">
          <div className="bl_infoItem_label">RSSI</div>
          <div className="bl_infoItem_data">{rssi} db</div>
        </li>
        <li className="bl_infoItem">
          <div className="bl_infoItem_label">Battery</div>
          <div className="bl_infoItem_data">{battery} %</div>
        </li>
      </ul>
    </div>
  );
};

export default Info;
