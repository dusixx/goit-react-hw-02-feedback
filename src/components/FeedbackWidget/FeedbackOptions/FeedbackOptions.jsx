import PropTypes from 'prop-types';
import FeedbackOptionsItem from '../FeedbackOptionsItem';
import { OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ values, onClick, iconSize }) => (
  <OptionsList>
    {Object.keys(values).map(type => (
      <FeedbackOptionsItem
        key={type}
        type={type}
        iconSize={iconSize}
        value={values[type]}
        onClick={onClick}
      />
    ))}
  </OptionsList>
);

FeedbackOptions.propTypes = {
  handleFeedbackLeave: PropTypes.func,
  values: PropTypes.exact({
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
  }),
};

export default FeedbackOptions;
