import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from '../components/Statistics';
import Section from './Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeedback = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  countTotalFeedback = e => {
    const total = Object.values(this.state).reduce((a, b) => a + b, 0);
    return total;
  };

  positivePercentageFeedbacks = () => {
    const percentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return percentage;
  };

  render() {
    const array = ['good', 'neutral', 'bad'];
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.state.good === 0 ? 0 : this.positivePercentageFeedbacks();
    const title = '☕️ Cafe Expresso ☕️';

    return (
      <Section title={title}>
        <FeedbackOptions
          options={array}
          onLeaveFeedback={this.counterFeedback}
        />
        {totalFeedbacks > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedbacks}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message=" 🤷‍♂️ There is no feedback 🤷‍♂️" />
        )}
      </Section>
    );
  }
}

export default App;
