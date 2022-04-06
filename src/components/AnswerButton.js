import React from 'react';
import PropTypes from 'prop-types';

class AnswerButton extends React.Component {
  render() {
    const { answer, index, dataTestId } = this.props;
    return (
      <button id={ index } type="button" name="answer" data-testid={ dataTestId }>
        { answer }
      </button>
    );
  }
}

AnswerButton.propTypes = {
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default AnswerButton;
