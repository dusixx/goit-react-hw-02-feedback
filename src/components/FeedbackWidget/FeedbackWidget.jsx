import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptionsItem from './FeedbackOptionsItem';

import {
  Container,
  Reset,
  Title,
  OptionsList,
  Label,
} from './FeedbackWidget.styled';

const PositiveStats = ({ value }) =>
  value ? (
    <Label>
      Positive feedback:&nbsp;<b>{value}%</b>
    </Label>
  ) : (
    <Label>There is no feedback</Label>
  );

//
// FeedbackWidget
//

export class FeedbackWidget extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  defaultState = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  state = { ...this.defaultState };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((sum, v) => sum + v, 0);

  countPositiveFeedback = () => {
    const res = (this.state.good / this.countTotalFeedback()) * 100;
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
      props,
      state,
      handleFeedbackLeave,
      countPositiveFeedback,
      handleFormReset,
    } = this;

    return (
      <Container>
        <Reset onClick={handleFormReset} title="reset" />
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
