import { FeedbackWidget } from 'components/FeedbackWidget/FeedbackWidget';
import React from 'react';

// components
import Task from '../Task/Task';
import { Container } from './App.styled';

export const App = () => (
  <Container>
    <Task title="01 - Feedback widget">
      <FeedbackWidget title="Please leave feedback" />
    </Task>
  </Container>
);
