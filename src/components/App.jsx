// import { Component } from 'react';
import { useState } from 'react';
import {Statistics} from './Statistics/Statistics';
import Section from './Section/Section';
import {FeedbackOptions} from './Feedback/Feedback'

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };


  // const onButtonClick = feedback => {
  //   this.setState(prevState => {
  //     return {[feedback]: prevState[feedback]+1};
  //   });
  // };
  const onButtonClick = feedback => {
    switch (feedback) {
      case "good":
        setGood(prevState => prevState + 1)
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1)
        break;
      case "bad":
        setBad(prevState => prevState + 1)
        break;
      default:
        return;
   }
 }



  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (good / countTotalFeedback()) * 100
    )}%`;
  };

 return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onButtonClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </>
    );
}