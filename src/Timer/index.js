import React from "react";
import "./index.css";

const Timer = ({ duration }) => {
  const [timer, setTimer] = React.useState(duration / 1000);
  React.useEffect(() => {
    // for (let time = duration / 1000; time <= 0; time--) {
    //   setTimeout(() => {
    //     setTimer(time);
    //   }, (time - (time - 1)) * 1000);
    // }
  }, [duration]);
  return (
    <div className="timer">
      <p className="timer-font">{timer}</p>
    </div>
  );
};

export default Timer;
