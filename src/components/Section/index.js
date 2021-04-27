import React from 'react';
import styles from './styles.module.scss';

const FeedbackOptions = props => {
  return (
    <div className={styles.section}>
      <h2>Please leave feedback</h2>
      {props.children[0]}
      <h2>Statistics</h2>
      {props.children[1]}
    </div>
  );
};

export default FeedbackOptions;
