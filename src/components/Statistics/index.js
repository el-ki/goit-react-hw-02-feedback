import React from 'react';

const Statistics = ({ good, neutural, bad, total, positivePercentage }) => {
  return (
    <div className="stats">
      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutural: {neutural}</p>
          <p>Bad: {bad}</p>
          <p> Total: {total}</p>
          <p> Positive feedback: {positivePercentage}%</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
    //   <div className="stats">
    //   <p>Good: {good}</p>
    //   <p>Neutural: {neutural}</p>
    //   <p>Bad: {bad}</p>
    //   {total > 0 && <p> Total: {total}</p>}
    //   {total > 0 && <p> Total: {positivePercentage}%</p>}
    // </div>
  );
};

export default Statistics;
