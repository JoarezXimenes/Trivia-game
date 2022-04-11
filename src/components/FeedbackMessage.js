import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../assets/FeedbackMessage.css';

class FeedbackMessage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }

  verifyAssertions = () => {
    const { assertions } = this.props;
    const minAsserts = 3;
    if (assertions < minAsserts) {
      return 'Could be better...';
    }
    return 'Well Done!';
  };

  render() {
    return (
      <h3 className="feedback-text" data-testid="feedback-text">
        { this.verifyAssertions() }
      </h3>
    );
  }
}

FeedbackMessage.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default FeedbackMessage;
