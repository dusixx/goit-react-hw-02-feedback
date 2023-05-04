import PropTypes from 'prop-types';
import myTheme from 'styles/theme';

import {
  OptionsList,
  Option,
  Label,
  OptionButton,
} from './FeedbackOptions.styled';

//
// FeedbackOptions
//

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
  onClick: PropTypes.func,
  iconSize: PropTypes.number,

  values: PropTypes.exact({
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
  }),
};

//
// FeedbackOptionsItem
//

function FeedbackOptionsItem({ onClick, type, value = 0, iconSize = 40 }) {
  const Icon = myTheme.icons.feedback[type];

  return (
    <Option>
      <OptionButton onClick={e => onClick(e, type)} title={type}>
        <Icon size={iconSize} />
      </OptionButton>
      <Label>{value}</Label>
    </Option>
  );
}

FeedbackOptionsItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default FeedbackOptions;
