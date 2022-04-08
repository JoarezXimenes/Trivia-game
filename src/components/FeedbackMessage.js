import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackMessage extends Component {
  render() {
    const { assertions } = this.props;
    return (
      <h2 data-testid="feedback-text">{assertions}</h2>
    );
  }
}

FeedbackMessage.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default FeedbackMessage;
