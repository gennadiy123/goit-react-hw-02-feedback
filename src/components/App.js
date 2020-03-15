import React, { Component } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackButton from "./feedbackButton/FeedbackButton";
import Section from "./section/Section";
import Notification from "./notification/Notification";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPercentages = () => {
    return Math.round((this.state.good / this.getTotal()) * 100);
  };

  onHandleClick = e => {
    const name = e.target.name;
    this.setState({
      [name]: this.state[name] + 1
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackButton onHandleClick={this.onHandleClick} />
        </Section>
        {this.getTotal() === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            title="Statistics"
            {...this.state}
            total={this.getTotal()}
            percentages={this.getPercentages()}
          />
        )}
      </>
    );
  }
}

export default App;
