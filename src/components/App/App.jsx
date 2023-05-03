import Task from '../Task/Task';
import { Container } from './App.styled';
import FeedbackWidget from 'components/FeedbackWidget';

export const App = () => (
  <Container>
    <Task title="01 - Feedback widget">
      <FeedbackWidget title="Please leave feedback" />
    </Task>
  </Container>
);
