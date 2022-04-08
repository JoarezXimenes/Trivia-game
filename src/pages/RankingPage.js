import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AiFillHome } from 'react-icons/ai';

class RankingPage extends Component {
  goHome = () => {
    const { history } = this.props;
    history.push('/');
  }

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

RankingPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RankingPage;
