import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../assets/Header.css';

class Header extends React.Component {
  render() {
    const { emailHash, name, score } = this.props;
    return (
      <header>
        <h1>Quem quer ser um milionário?</h1>
        <div className="right-header">
          <img
            src={ `https://www.gravatar.com/avatar/${emailHash}` }
            alt="Imagem do Usuário"
            data-testid="header-profile-picture"
          />
          <p data-testid="header-player-name">{ name }</p>
          <p data-testid="header-score">{ score }</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatarImg: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
  emailHash: state.player.emailHash,
});

Header.propTypes = {
  emailHash: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
