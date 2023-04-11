import React, { Component } from "react";

import { Container} from "./App.styled";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification";


export class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };

  countTotalFeedback() {
 
    const { good, bad, neutral } = this.state;
    const totalFeedback = good + bad + neutral
    return totalFeedback

  }
  
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback()
    const positiveFeedback = (good * 100) / totalFeedback
    return Math.round(positiveFeedback)
  }

  getGoodFeedback = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 }
    });
  };
  getNeutralFeedback = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 }
    });
  };

   getBadFeedback = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 }
    });
  };

  render() {
   
      return (
        
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              getGoodFeedback={this.getGoodFeedback}
              getBadFeedback={this.getBadFeedback}
              getNeutralFeedback={this.getNeutralFeedback}
             />
          </Section>

          {this.countTotalFeedback() === 0
            ? (<Notification message ="There is no feedback"/>)
            : (<Section title="Statistics">
              <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
              </Section>
            )}
        </Container>
      );
    }
  }

