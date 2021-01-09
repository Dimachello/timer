import React, { useState, useEffect } from "react";
import "./timer.css";
import MyButton from "../Button/Button";
import formater from "../../utils/formater";

const Timer = () => {
  const [start, setStart] = useState(false);
  const [limitation, setLimitation] = useState(false);
  const [time, setTime] = useState([0, 0, 0]); //HH:MM:SS

  const toggleTimerStartHandler = () => {
    if (start) {
      setStart(() => false);
      setTime(() => [0, 0, 0]);
    } else {
      setStart(() => true);
    }
  };

  const toggleTimerPauseHandler = () => {
    setLimitation(() => true);
    setStart(() => false);
    setTimeout(() => {
      setLimitation(() => false);
    }, 300);
  };

  const resetTimerHandler = () => {
    setTime(() => [0, 0, 0]);
    if (!start) {
      setStart(() => true);
    }
  };

  useEffect(() => {
    if (start) {
      if (time[2] === 5)
        setTime((prevState) => {
          const tempCopy = [...prevState];
          return [tempCopy[0], tempCopy[1] + 1, 0];
        }); //SS

      if (time[1] === 5)
        setTime((prevState) => {
          const tempCopy = [...prevState];
          return [tempCopy[0] + 1, 0, tempCopy[2]];
        }); //MM

      if (time[0] === 5) {
        //HH
        setTime(() => [0, 0, 0]);
        setStart(() => !start);
        return;
      }

      const timer = setInterval(() => {
        setTime([time[0], time[1], time[2] + 1]);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [start, time]);

  return (
    <div className="TimerContainer">
      <div className="TimeValuesContainer">
        <div>{formater(time[0])}</div>
        <div>{formater(time[1])}</div>
        <div>{formater(time[2])}</div>
      </div>
      <div className="TimerControlsContainer">
        <MyButton
          actionId={1}
          text={"Start/Stop"}
          action={toggleTimerStartHandler}
        />
        <MyButton
          actionId={2}
          text={"Wait"}
          action={toggleTimerPauseHandler}
          limitation={limitation}
        />
        <MyButton actionId={1} text={"Reset"} action={resetTimerHandler} />
      </div>
    </div>
  );
};

export default Timer;
