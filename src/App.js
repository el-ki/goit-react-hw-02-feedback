import React from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  // static defaultProps = {
  //   good: 0,
  //   neutural: 0,
  //   bad: 0,
  // };

  // static propTypes = {};

  state = {
    good: 0,
    neutural: 0,
    bad: 0,
  };

  handleGoodBtn = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeuturalBtn = () => {
    this.setState(prevState => ({
      neutural: prevState.neutural + 1,
    }));
  };

  handleBadBtn = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <Section title="">
          <FeedbackOptions
            onGoodBtn={this.handleGoodBtn}
            onNeuturalBtn={this.handleNeuturalBtn}
            onBadBtn={this.handleBadBtn}
            onLeaveFeedback={23}
          ></FeedbackOptions>
          <Statistics
            good={this.state.good}
            neutural={this.state.neutural}
            bad={this.state.bad}
            total={5}
            positivePercentage={1}
          />
        </Section>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Section title="">
//         <FeedbackOptions options={23} onLeaveFeedback={23}></FeedbackOptions>
//         <Statistics
//           good={1}
//           neutural={2}
//           bad={3}
//           total={5}
//           positivePercentage={1}
//         />
//       </Section>
//     </div>
//   );
// }

export default App;
