import React from "react";

const Statistics = ({ good, neutural, bad }) => {
  return (
    <div className="stats">
      <p>Good: {good}</p>
      <p>Neutural: {neutural}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default Statistics;
