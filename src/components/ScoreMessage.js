import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../assets/ScoreMessage.css';

class ScoreMessage extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <p className="questions-feedback">
          Você acertou
          <span className="feedback-total-question" data-testid="feedback-total-question">
            &nbsp;
            { assertions }
          </span>
          { assertions !== 1
            ? ' questões'
            : ' questão' }
        </p>
        <p className="score-feedback">
          e fez total de
          <span className="feedback-total-score" data-testid="feedback-total-score">
            &nbsp;
            { score }
            &nbsp;
          </span>
          pontos
        </p>
      </>
    );
  }
}

ScoreMessage.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default ScoreMessage;
