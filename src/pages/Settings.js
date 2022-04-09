import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiTrophy } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import '../assets/Settings.css';

class Settings extends React.Component {
  render() {
    return (
      <section className="container-settings">
        <div className="link-settings">
          <Link to="/ranking">
            <GiTrophy
              className="ranking-button"
              data-testid="btn-ranking"
            />
          </Link>
          <Link to="/">
            <AiFillHome
              className="home-button"
              data-testid="btn-home"
            />
          </Link>
        </div>
        <h1 data-testid="settings-title">Configurações</h1>
        <h3>Categoria</h3>
        <select>
          <option>Teste</option>
          <option>Teste2</option>
        </select>
        <h3>Dificuldade</h3>
        <select>
          <option>Teste</option>
        </select>
        <h3>Tipo</h3>
        <select>
          <option>Teste</option>
        </select>
      </section>
    );
  }
}

export default Settings;
