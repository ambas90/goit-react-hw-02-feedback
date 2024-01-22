import React, { Component } from 'react';
import Statistics from './Statistics';

export default class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

  handleGood = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={PositiveFeedbackPercentage}
        />
        .
      </>
    );
  }
}
