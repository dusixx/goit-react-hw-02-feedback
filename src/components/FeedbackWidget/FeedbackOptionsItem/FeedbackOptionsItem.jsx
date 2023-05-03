import PropTypes from 'prop-types';
import { Option, Label, OptionButton } from './FeedbackOptionsItem.styled';
import myTheme from 'styles/theme';

export default function FeedbackOptionsItem({
  onClick,
  type,
  value = 0,
  iconSize = 40,
}) {
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
  value: PropTypes.number,
  iconSize: PropTypes.number,
  onClick: PropTypes.func,
};
