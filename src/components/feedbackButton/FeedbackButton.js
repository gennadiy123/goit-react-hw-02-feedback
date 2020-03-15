import React from "react";

const FeedbackButton = ({ onHandleClick }) => {
  return (
    <>
      <button onClick={onHandleClick} type="button" name="good">
        Good
      </button>
      <button onClick={onHandleClick} type="button" name="neutral">
        Neutral
      </button>

      <button onClick={onHandleClick} type="button" name="bad">
        Bad
      </button>
    </>
  );
};

export default FeedbackButton;
