import styled from 'styled-components';

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const OptionButton = styled.button`
  display: block;
  padding: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: filter ease-out 250ms;

  &:hover,
  &:focus-visible {
    filter: brightness(1.1);
  }
`;

export const Label = styled.span`
  font-size: 13px;
`;
