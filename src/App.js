import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

class App extends Component {
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

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutural + this.state.bad;
    return total;
  };

  positivePercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutural, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.positivePercentage();

    return (
      <div className="App">
        <Section title="">
          <FeedbackOptions
            onGoodBtn={this.handleGoodBtn}
            onNeuturalBtn={this.handleNeuturalBtn}
            onBadBtn={this.handleBadBtn}
          ></FeedbackOptions>
          <Statistics
            good={good}
            neutural={neutural}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
