import React, { useState } from "react";

import { Container} from "./App.styled";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification";


export const App = () => {
  const  [good, setGood ] = useState(0)
  const  [neutral, setNeutral]  = useState(0)
  const [bad, setBad]  = useState(0)

 const countTotalFeedback = () => {
    const totalFeedback = good + bad + neutral
    return totalFeedback
  }
  
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback()
    const positiveFeedback = (good * 100) / totalFeedback
    return Math.round(positiveFeedback)
  }

 
  const getGoodFeedback = () => {
     setGood((prev) => prev + 1);
  };
  
  const getNeutralFeedback = () => {
    setNeutral((prev) => prev + 1);
  };
  
  const getBadFeedback = () => {
    setBad((prev) => prev + 1);
  };


  return (
        
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              getGoodFeedback={getGoodFeedback}
              getBadFeedback={getBadFeedback}
              getNeutralFeedback={getNeutralFeedback}
             />
          </Section>

          {countTotalFeedback() === 0
            ? (<Notification message ="There is no feedback"/>)
            : (<Section title="Statistics">
              <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
              </Section>
            )}
        </Container>
      );
    
  }


  // export class App extends Component {
  // state = {
  //   good: 3,
  //   neutral: 2,
  //   bad: 2,
  // };

  // countTotalFeedback() {
 
  //   const { good, bad, neutral } = this.state;
  //   const totalFeedback = good + bad + neutral
  //   return totalFeedback

  // }
  
  // countPositiveFeedbackPercentage() {
  //   const { good } = this.state;
  //   const totalFeedback = this.countTotalFeedback()
  //   const positiveFeedback = (good * 100) / totalFeedback
  //   return Math.round(positiveFeedback)
  // }

  // getGoodFeedback = () => {
  //   this.setState((prevState) => {
  //     return { good: prevState.good + 1 }
  //   });
  // };
  // getNeutralFeedback = () => {
  //   this.setState((prevState) => {
  //     return { neutral: prevState.neutral + 1 }
  //   });
  // };

  //  getBadFeedback = () => {
  //   this.setState((prevState) => {
  //     return { bad: prevState.bad + 1 }
  //   });
  // };

  // render() {
   
  //     return (
        
  //       <Container>
  //         <Section title="Please leave feedback">
  //           <FeedbackOptions
  //             getGoodFeedback={this.getGoodFeedback}
  //             getBadFeedback={this.getBadFeedback}
  //             getNeutralFeedback={this.getNeutralFeedback}
  //            />
  //         </Section>

  //         {this.countTotalFeedback() === 0
  //           ? (<Notification message ="There is no feedback"/>)
  //           : (<Section title="Statistics">
  //             <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
  //             </Section>
  //           )}
  //       </Container>
  //     );
  //   }
  // }

   // const feedBackButton = (evt) => {
  //   const { name } = evt.target
  //   switch (name) {
  //     case "good":
  //       setGood(good + 1);
  //       break;
  //     case "bad":
  //       setBad(bad + 1);
  //       break;
  //     case "neutral":
  //       setNeutral(neutral + 1)
  //       break;
  //     default:
  //       break;
  //   }   
  // };
