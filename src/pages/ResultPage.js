import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FeedbackMessage from '../components/FeedbackMessage';
import ScoreMessage from '../components/ScoreMessage';

class ResultPage extends Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <>
        <Header />
        <main>
          <FeedbackMessage assertions={ assertions } />
          <ScoreMessage score={ score } assertions={ assertions } />

          <button type="button">VER RANKING</button>
          <button type="button">JOGAR NOVAMENTE</button>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.scote,
});

ResultPage.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ResultPage);
