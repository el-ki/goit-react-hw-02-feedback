import React from 'react';
import styles from './styles.module.scss';

const FeedbackOptions = ({ onGoodBtn, onNeuturalBtn, onBadBtn }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={onGoodBtn}>
        Good
      </button>
      <button className={styles.btn} onClick={onNeuturalBtn}>
        Neutural
      </button>
      <button className={styles.btn} onClick={onBadBtn}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
