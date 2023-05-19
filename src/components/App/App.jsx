import { Container } from './App.styled';
import FeedbackWidget from 'components/FeedbackWidget';
import React from 'react';

export const App = () => (
  <Container>
    <FeedbackWidget title="Please leave feedback" />
  </Container>
);
