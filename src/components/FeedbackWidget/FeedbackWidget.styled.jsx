import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 170px;
  padding: 20px;

  color: gray;
  background-color: white;
  box-shadow: var(--box-shaddow);
  border-radius: 7px;
`;

export const Title = styled.h2`
  padding-top: 2px;
  margin-bottom: 25px;
  font-size: 20px;
  color: var(--color-black);
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: auto;
  width: 100%;
  height: 20%;

  border-radius: 5px;
  background-color: #e0f4ff;
`;
