import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AiFillHome } from 'react-icons/ai';

class RankingPage extends Component {
  goHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  // renderRanking = () = {}

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Title</h1>
        <button
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

/*
  FAZER UMA TABLE RENDERIZANDO O ARRAY RANKING DO LOCALSTORAGE - PEGANDO O SCORE DE CADA OBJETO E COLOCANDO EM ORDEM ALFABÉTICA

  const rankingArray = localStorage.getItem('ranking');

 <table>
  <thead>
    <tr>
      <th>Image</th>
      <th>Nome</th>
      <th>Pontuação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**pic**</td>
      <td>Maria Anders</td>
      <td>1000</td>
    </tr>
  </tbody>
</table>
*/

RankingPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RankingPage;
