import  { useState} from "react";

import Statistics from 'components/Statistics/Statistics'
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions'
import SectionTitle from 'components/Section/Section'
import Notification from 'components/Notification/Notification'

const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const feedbackCounter = (e) => {
        const { name } = e.target
        switch (name) {
            case 'good':
                setGood( good + 1 )
            break;
            case 'neutral':
                setNeutral( neutral + 1 )
            break;
            case 'bad':
                setBad( bad + 1 )
                break;
            default:
                break
        }
    }

    const countTotalFeedback = () => {
        const total = good + neutral + bad
        return total
    }
    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / (countTotalFeedback())) * 100)
    }

        return (
            <>
                <SectionTitle title="Please leave feedback">
                    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={feedbackCounter}/>
                </SectionTitle>
                

                {(countTotalFeedback()) > 0 ? (
                    <SectionTitle title="Statistics">
                        <Statistics  good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                    </SectionTitle>) :
                    (<Notification message="There is no feedback"/>)}
            </>
        )
    
}

export default Feedback