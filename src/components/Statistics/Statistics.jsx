import PropTypes from 'prop-types'
import { StatisticsList, StatisticsItem } from "./Statistics.styled"

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
    return (
          <StatisticsList>   
              <StatisticsItem>Good: {good}</StatisticsItem>
              <StatisticsItem>Neutral: {neutral}</StatisticsItem>
              <StatisticsItem>Bad: {bad}</StatisticsItem>
              <StatisticsItem>Total: {total}</StatisticsItem>
              <StatisticsItem>Positive feedback: {positivePercentage}%</StatisticsItem>
          </StatisticsList>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total:PropTypes.number,
    positivePercentage:PropTypes.number,
}
