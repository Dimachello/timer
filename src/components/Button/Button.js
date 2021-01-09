import React from "react";

const MyButton = ({ actionId, text, action, limitation }) => {
  let Button = null;

  switch (actionId) {
    case 1: //onClick
      Button = (
        <button className="btn" onClick={() => action()}>
          {text}
        </button>
      );
      break;
    case 2: //onDoubleClick
      Button = (
        <button
          className="btn"
          onDoubleClick={() => action()}
          disabled={limitation}
        >
          {text}
        </button>
      );
      break;
    default:
      return Button;
  }

  return Button;
};

export default MyButton;
