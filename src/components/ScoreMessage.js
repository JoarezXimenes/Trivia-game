import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScoreMessage extends Component {
  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <p>
          Você acertou
          <span data-testid="feedback-total-question">
            { assertions }
          </span>
          { assertions > 1
            ? 'questões'
            : 'questão' }
        </p>
        <p>
          Um total de
          <span data-testid="feedback-total-score">
            { score }
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
