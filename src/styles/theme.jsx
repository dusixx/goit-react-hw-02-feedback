import styled from '@emotion/styled';

import {
  BsFillEmojiAngryFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';

const myTheme = {
  colors: {
    feedback: {
      bad: '#ff884f',
      neutral: '#3699ff',
      good: '#83b30e',
    },
  },

  icons: {
    feedback: {
      bad: styled(BsFillEmojiAngryFill)`
        color: ${({ color, theme }) => color || theme.colors.feedback.bad};
      `,
      neutral: styled(BsFillEmojiNeutralFill)`
        color: ${({ color, theme }) => color || theme.colors.feedback.neutral};
      `,
      good: styled(BsFillEmojiSmileFill)`
        color: ${({ color, theme }) => color || theme.colors.feedback.good};
      `,
    },
  },
};

export default myTheme;
