import styled from '@emotion/styled';

import {
  BsFillEmojiAngryFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';

const myTheme = {
  color: {
    black: 'rgb(41, 41, 41)',
    feedback: {
      bad: '#ff884f',
      neutral: '#3699ff',
      good: '#83b30e',
    },
  },

  transition(...props) {
    return props.map(prop => `${prop} ease 250ms`).join(',');
  },

  shaddow: {
    box: '0 2px 5px 2px lightgray, 0 10px 10px -5px lightgray',
  },

  icons: {
    feedback: {
      bad: styled(BsFillEmojiAngryFill)`
        color: ${({ color, theme }) => color || theme.color.feedback.bad};
      `,
      neutral: styled(BsFillEmojiNeutralFill)`
        color: ${({ color, theme }) => color || theme.color.feedback.neutral};
      `,
      good: styled(BsFillEmojiSmileFill)`
        color: ${({ color, theme }) => color || theme.color.feedback.good};
      `,
    },
  },
};

export default myTheme;
