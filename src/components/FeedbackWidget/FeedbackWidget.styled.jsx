import styled from '@emotion/styled';

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  padding: 20px;

  color: gray;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shaddow.box};
  border-radius: 7px;
`;

export const Title = styled.h2`
  padding-top: 2px;
  margin-bottom: 25px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.black};
`;

export const Notification = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: auto;
  width: 100%;
  height: 35px;

  border-radius: 5px;
  background-color: ${({ color }) => color};
`;
