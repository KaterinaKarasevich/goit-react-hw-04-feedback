import PropTypes from 'prop-types'
import { ButtonList, Button } from "./FeedbackOptions.styled"
export const FeedbackOptions = ({ getGoodFeedback, getBadFeedback, getNeutralFeedback }) => {
    return (
        <ButtonList>
            <Button onClick={getGoodFeedback}>Good</Button>  
            <Button onClick={getBadFeedback}>Bad</Button> 
            <Button onClick={getNeutralFeedback}>Neutral</Button> 
        </ButtonList>
    )
}

FeedbackOptions.propTypes = {
    getGoodFeedback: PropTypes.func.isRequired,
    getBadFeedback: PropTypes.func.isRequired,
    getNeutralFeedback: PropTypes.func.isRequired,
}

