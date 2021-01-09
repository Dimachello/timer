import React, { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";

const MyButton = ({ actionId, text, action, limitation }) => {
  let Button = null;
  const btnRef = useRef(null);
  let actionName = null;

  switch (actionId) {
    case 1:
      actionName = "click";
      break;
    case 2:
      actionName = "dblclick";
      break;
    default:
      actionName = "click";
  }

  Button = (
    <button
      type="button"
      ref={btnRef}
      className="btn"
      disabled={limitation ? limitation : false}
    >
      {text}
    </button>
  );

  useEffect(() => {
    const clickable = fromEvent(btnRef.current, actionName).subscribe(() =>
      action()
    );
    return () => clickable.unsubscribe();
  }, [actionName, action]);

  return Button;
};

export default MyButton;
