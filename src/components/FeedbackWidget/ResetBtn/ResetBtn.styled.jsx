import styled from 'styled-components';

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
  transition: color ease 250ms, transform ease 250ms;

  &:hover,
  &:focus-visible {
    color: gray;
    transform: scale(1.1);
  }
`;
