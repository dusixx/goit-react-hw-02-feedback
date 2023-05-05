import styled from '@emotion/styled';

const DEF_SIZE = 20;

// лучше наследовать(?) styled.button(ButtonBase)`...`
export const Button = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ size = DEF_SIZE }) => size}px;
  height: ${({ size = DEF_SIZE }) => size}px;

  color: #9c9c9c;
  transition: ${({ theme }) => theme.transition('color', 'transform')};

  &:hover,
  &:focus-visible {
    color: gray;
    transform: scale(1.1);
  }
`;
