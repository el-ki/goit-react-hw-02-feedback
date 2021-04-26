import React from 'react';
import styles from './styles.module.scss';
console.log(styles);
// class FeedbackOptions extends React.Component {
//   //   state = {
//   //     good: 0,
//   //     neutral: 0,
//   //     bad: 0,
//   //   };

//   handleGoodBtn = event => {
//     const target = event.target;
//     console.log(target);
//   };

//   handleNeuturalBtn = () => {
//     console.log(this.state.good);
//   };

//   handleBadBtn = () => {
//     console.log('bad');
//   };

//   render() {
//     return (
//       <div className={styles.wrapper}>
//         <button className={styles.btn} onClick={this.handleGoodBtn}>
//           Good
//         </button>
//         <button className={styles.btn} onClick={this.handleNeuturalBtn}>
//           Neutural
//         </button>
//         <button className={styles.btn} onClick={this.handleBadBtn}>
//           Bad
//         </button>
//       </div>
//     );
//   }
// }

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
