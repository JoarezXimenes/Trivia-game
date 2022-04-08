import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackMessage from '../components/FeedbackMessage';
import Header from '../components/Header';
import ScoreMessage from '../components/ScoreMessage';
import { resetScore } from '../actions/index';

class ResultPage extends Component {
  componentDidMount = () => {
    this.saveScoreAndReset();
  }

  restartGame = () => {
    const { resetPoints } = this.props;
    resetPoints();
    const { history } = this.props;
    history.push('/');
  }

  viewRanking = () => {
    const { resetPoints } = this.props;
    resetPoints();
    const { history } = this.props;
    history.push('/ranking');
  }

  saveScoreAndReset = () => {
    const { name, score, emailHash } = this.props;
    const playerObj = [{
      name,
      score,
      picture: `https://www.gravatar.com/avatar/${emailHash}`,
    }];
    const stringPlayerObj = JSON.stringify(playerObj);

    if (!localStorage.ranking) {
      localStorage.setItem('ranking', [stringPlayerObj]);
    } else if (localStorage.ranking) {
      const ranking = JSON.parse(localStorage.getItem('ranking'));
      const newRankingArray = [...ranking, playerObj[0]];
      localStorage.setItem('ranking', JSON.stringify(newRankingArray));
    }
  }

  render() {
    const { assertions, score } = this.props;
    return (
      <>
        <Header />
        <main>
          <FeedbackMessage assertions={ assertions } />
          <ScoreMessage score={ score } assertions={ assertions } />

          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ this.viewRanking }
          >
            VER RANKING
          </button>

          <button
            onClick={ this.restartGame }
            type="button"
            data-testid="btn-play-again"
          >
            Play Again
          </button>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  name: state.player.name,
  score: state.player.score,
  emailHash: state.player.emailHash,
});

const mapDispatchToProps = (dispatch) => ({
  resetPoints: () => dispatch((resetScore())),
});

ResultPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  emailHash: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  resetPoints: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
