import React from 'react';
import styles from './styles.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.wrapper}>
      <button name={options[0]} className={styles.btn} onClick={onLeaveFeedback}>
        Good
      </button>
      <button name={options[1]} className={styles.btn} onClick={onLeaveFeedback}>
        Neutural
      </button>
      <button name={options[2]} className={styles.btn} onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
