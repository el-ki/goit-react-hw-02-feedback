import React from 'react';
import styles from './styles.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.wrapper}>
    {options.map(item => (
      <button name={item} className={styles.btn} onClick={onLeaveFeedback}>
        {item}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
