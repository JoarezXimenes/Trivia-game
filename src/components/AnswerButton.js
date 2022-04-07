import React from 'react';
import PropTypes from 'prop-types';

class AnswerButton extends React.Component {
  render() {
    const { answer, index, dataTestId, verifyAnswer } = this.props;
    return (
      <button
        id={ index }
        className="answer-button"
        type="button"
        name="answer"
        data-testid={ dataTestId }
        onClick={ verifyAnswer }
      >
        { answer }
      </button>
    );
  }
}

AnswerButton.propTypes = {
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  dataTestId: PropTypes.string.isRequired,
  verifyAnswer: PropTypes.func.isRequired,
};

export default AnswerButton;
