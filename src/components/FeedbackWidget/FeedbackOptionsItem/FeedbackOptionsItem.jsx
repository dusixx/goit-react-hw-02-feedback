import PropTypes from 'prop-types';

import {
  BsFillEmojiAngryFill as IconBad,
  BsFillEmojiNeutralFill as IconNeutral,
  BsFillEmojiSmileFill as IconGood,
} from 'react-icons/bs';

import { Option, Label, OptionButton } from './FeedbackOptionsItem.styled';

const data = {
  bad: { color: '#ff884f', Icon: IconBad },
  neutral: { color: '#3699ff', Icon: IconNeutral },
  good: { color: '#83b30e', Icon: IconGood },
};

export default function FeedbackOptionsItem({
  onClick,
  type,
  value = 0,
  iconSize = 40,
}) {
  const { Icon, color } = data[type];

  return (
    <Option>
      <OptionButton onClick={onClick} title={type} data-type={type}>
        <Icon size={iconSize} color={color} />
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
