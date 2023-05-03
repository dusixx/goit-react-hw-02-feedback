import { Component } from 'react';
import PropTypes from 'prop-types';
import ResetBtn from './ResetBtn';
import FeedbackOptions from './FeedbackOptions';
import { Container, Title, Label } from './FeedbackWidget.styled';

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

  countPositives = () => {
    const res = (this.state.good / this.totalFeedback) * 100;
    return isNaN(res) ? null : res.toFixed(0);
  };

  handleFeedbackLeave = e => {
    const { type } = e.currentTarget.dataset;
    this.setState(curState => ({ [type]: curState[type] + 1 }));
  };

  handleFormReset = () => {
    this.setState({ ...this.defaultState });
  };

  render() {
    const {
      props: { title },
      state,
      handleFeedbackLeave,
      countPositives,
      handleFormReset,
    } = this;

    return (
      <Container>
        <ResetBtn size={18} onClick={handleFormReset} />
        <Title>{title}</Title>
        <FeedbackOptions values={{ ...state }} onClick={handleFeedbackLeave} />
        <PositivesResult value={countPositives()} />
      </Container>
    );
  }
}

function PositivesResult({ value }) {
  return value ? (
    <Label>
      Positive feedback:&nbsp;<b>{value}%</b>
    </Label>
  ) : (
    <Label>There is no feedback</Label>
  );
}
