import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ScoreMessage extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <p>
          Você acertou
          <span data-testid="feedback-total-question">
            &nbsp;
            { assertions }
          </span>
          { assertions !== 1
            ? ' questões'
            : ' questão' }
        </p>
        <p>
          Um total de
          &nbsp;
          <span data-testid="feedback-total-score">
            { score }
          </span>
          &nbsp;
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
