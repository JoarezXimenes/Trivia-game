import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AiFillHome } from 'react-icons/ai';
import '../assets/RankingPage.css';

class RankingPage extends Component {
  goHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  renderRanking = () => {
    const getArray = JSON.parse(localStorage.getItem('ranking'));
    const rankedArray = getArray.sort((a, b) => b.score - a.score);
    return rankedArray.map((player, position) => (
      <tr key={ position }>
        <td>{ position + 1 }</td>
        <td>
          <img src={ player.picture } alt={ player.name } />
        </td>
        <td data-testid={ `player-name-${position}` }>{ player.name }</td>
        <td data-testid={ `player-score-${position}` }>{ player.score }</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="container-ranking-page">
        <h1 data-testid="ranking-title">Ranking</h1>
        <table className="table-container">
          <thead>
            <tr>
              <th>Position</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            { this.renderRanking() }
          </tbody>
        </table>
        <button
          className="button-home"
          onClick={ this.goHome }
          type="button"
          data-testid="btn-go-home"
        >
          <AiFillHome />
        </button>
      </div>
    );
  }
}

RankingPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RankingPage;
