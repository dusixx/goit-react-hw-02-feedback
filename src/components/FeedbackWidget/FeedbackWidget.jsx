import { Component } from 'react';
import PropTypes from 'prop-types';
import RefreshButton from '../RefreshButton';
import FeedbackOptions from './FeedbackOptions';
import { Container, Title, Notification } from './FeedbackWidget.styled';

const MSG_NO_FEEDBACK = 'There is no feedback';

//
// FeedbackWidget
//

export default class FeedbackWidget extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  defaultState = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  state = { ...this.defaultState };

  get totalFeedback() {
    return Object.values(this.state).reduce((sum, v) => sum + v, 0);
  }

  getStats = () => {
    const total = this.totalFeedback;
    const positive = ((this.state.good / total) * 100).toFixed(0);
    return { total, positive };
  };

  handleFeedbackLeave = (_, type) => {
    this.setState(curState => ({ [type]: curState[type] + 1 }));
  };

  handleFormReset = () => {
    this.setState({ ...this.defaultState });
  };

  render() {
    const { handleFeedbackLeave, getStats, handleFormReset } = this;

    return (
      <Section title={this.props.title}>
        <RefreshButton size={18} onClick={handleFormReset} />
        <FeedbackOptions
          values={{ ...this.state }}
          onLeaveFeedback={handleFeedbackLeave}
        />
        <Stats {...getStats()} />
      </Section>
    );
  }
}

function Section({ title, children }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

function Stats({ total, positive }) {
  return total ? (
    <Notification color="#e0f4ff">
      <span>
        Total:&nbsp;<b>{total}</b>
      </span>
      <span>
        Positive:&nbsp;<b>{positive}%</b>
      </span>
    </Notification>
  ) : (
    <Notification color="#ffe6d9">{MSG_NO_FEEDBACK}</Notification>
  );
}
