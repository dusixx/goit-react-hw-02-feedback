import Task from '../Task/Task';
import { Container } from './App.styled';
import FeedbackWidget from 'components/FeedbackWidget';
import GlobalStyles from 'styles';

export const App = () => (
  <Container>
    <GlobalStyles />
    <Task title="01 - Feedback widget">
      <FeedbackWidget title="Please leave feedback" />
    </Task>
  </Container>
);
