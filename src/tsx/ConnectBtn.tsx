import { h } from "preact";
import { useState, useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";
import Konashi from "@ux-xu/konashi-web-bluetooth";

const ConnectBtn = () => {
  const [message, setMessage]: [string, Function] = useState("connect");
  const [classExtra, setClassExtra]: [string, Function] = useState("");
  const {konashi, setKonashi} = useContext(KonashiContext);

  const handleConnection = async (e: Event) => {
    e.preventDefault();

    if (konashi === null) {
      setKonashi(await Konashi.find(true, Konashi.defaultFilter));
    } else {
      konashi.disconnect();
      setKonashi(null);
    }

    setMessage(konashi !== null ? "connect" : "connected");
    setClassExtra(konashi !== null ? "" : "isConnected");
  };

  return (
    <button
      className={"el_connectBtn" + " " + classExtra}
      onClick={handleConnection}
    >
      {message}
    </button>
  );
};

export default ConnectBtn;
