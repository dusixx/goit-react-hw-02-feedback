import styled from '@emotion/styled';

const DEF_SIZE = 20;

export const Button = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ size = DEF_SIZE }) => size}px;
  height: ${({ size = DEF_SIZE }) => size}px;

  color: #9c9c9c;
  transition: ${({ theme }) => theme.transition('color', 'transfrom')};

  &:hover,
  &:focus-visible {
    color: gray;
    transform: scale(1.1);
  }
`;
