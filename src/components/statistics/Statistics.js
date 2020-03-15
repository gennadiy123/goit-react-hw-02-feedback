import React from "react";

const Statistics = ({ good, neutral, bad, total, percentages }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive feedback: <span>{percentages}%</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;
