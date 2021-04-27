import React from 'react';
import PropTypes from 'prop-types';

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
  );
};

Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutural: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
