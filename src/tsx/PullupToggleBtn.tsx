import { h } from "preact";
import { useContext } from "preact/hooks";
import KonashiContext from "./KonashiContext";
import Konashi from "@ux-xu/konashi-web-bluetooth";

const PullupToggleBtn = (props: {
  pid: number;
  pullup: number;
  setPullup: (arg0: number) => void;
}) => {
  const { konashi } = useContext(KonashiContext);

  const displayIcon = (p: number) => {
    return p === Konashi.PULLUP ? "far fa-check-square" : "far fa-square";
  };

  const handleClick = async () => {
    props.setPullup(
      props.pullup !== Konashi.PULLUP ? Konashi.PULLUP : Konashi.NO_PULLS
    );

    const p =
      props.pullup !== Konashi.PULLUP ? Konashi.PULLUP : Konashi.NO_PULLS;
    await konashi?.pinPullUp(props.pid, p);
  };

  return (
    <button className="bl_PullupToggleBtn" onClick={handleClick}>
      <div className="bl_PullupToggleBtn_inner">
        <div className="el_pullupIcon">
          <p>Pull UP</p>
          <i className={"fa-2x " + displayIcon(props.pullup)}></i>
        </div>
      </div>
    </button>
  );
};

export default PullupToggleBtn;
