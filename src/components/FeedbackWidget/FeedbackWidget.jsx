import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Title, OptionsList, Label } from './FeedbackWidget.styled';
import { FeedbackOptionsItem } from './FeedbackOptionItem/FeedbackOptionsItem';

const PositiveStats = ({ value }) =>
  value ? (
    <Label>
      Positive feedback:&nbsp;<b>{value}%</b>
    </Label>
  ) : (
    <Label>There is no feedback</Label>
  );

export class FeedbackWidget extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  handleFeedbackLeave = e => {
    const { type } = e.currentTarget.dataset;
    this.setState(curState => ({ [type]: curState[type] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((sum, v) => sum + v, 0);

  countPositiveFeedback = () => {
    const res = (this.state.good / this.countTotalFeedback()) * 100;
    return isNaN(res) ? null : res.toFixed(0);
  };

  render() {
    const { props, state, handleFeedbackLeave, countPositiveFeedback } = this;

    return (
      <Container>
        <Title>{props.title}</Title>
        <OptionsList>
          {Object.keys(state).map(type => (
            <FeedbackOptionsItem
              key={type}
              type={type}
              value={state[type]}
              onClick={handleFeedbackLeave}
            />
          ))}
        </OptionsList>
        <PositiveStats value={countPositiveFeedback()} />
      </Container>
    );
  }
}
