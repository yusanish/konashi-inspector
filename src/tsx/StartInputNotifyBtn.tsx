import { h } from "preact";
import { useState, useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";

const StartInputNotifyBtn = (props: {
  setInputValue: (arg0: number) => void;
}) => {
  const displayText = {
    willStart: "Start Input Notification",
    willStop: "Stop Input Notification"
  };

  const { konashi } = useContext(KonashiContext);
  const [isStarting, setStarting] = useState(false);
  const [text, setText] = useState<string>(displayText.willStart);

  const setClass = () => {
    if (isStarting) {
      return "stop";
    }
    return "start";
  };

  const updateInputValue = (receivedValue: number) => {
    props.setInputValue(receivedValue);
  };

  const handleClick = async () => {
    if (!isStarting) {
      setStarting(true);
      setText(displayText.willStop);
      await konashi?.startDigitalInputNotification(updateInputValue);
    } else {
      setStarting(false);
      setText(displayText.willStart);
      await konashi?.stopDigitalInputNotification();
    }
  };

  return (
    <div className="el_startInputNotifyBtn_wrapper">
      <button
        className={"el_startInputNotifyBtn" + " " + setClass()}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default StartInputNotifyBtn;
