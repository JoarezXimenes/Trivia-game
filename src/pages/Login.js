import React from 'react';
// import fetchApi from '../services/fecthApi';
import '../assets/Login.css';

const imgs = ['https://www.aeof.pt/wp-content/uploads/2014/05/qqsm.gif'];

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      validButton: true,
    };
  }

  validateBtn = () => {
    const { name, email } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(email);
    console.log(validEmail);
    const validName = name.length >= 1;
    if (validEmail && validName) {
      console.log('habilitado');
      this.setState({ validButton: false });
    } else {
      console.log('desabilitado');
      this.setState({ validButton: true });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateBtn);
  }

  render() {
    // const FIVE = 5;
    // fetchApi(FIVE).then((show) => console.log(show));
    const { email, name, validButton } = this.state;
    return (
      <section className="login-section">
        <img src={ imgs[0] } alt="Logo Trivia" />
        <input
          data-testid="input-player-name"
          type="text"
          name="name"
          value={ name }
          placeholder="Insira seu nome"
          onChange={ this.handleChange }
        />
        <input
          data-testid="input-gravatar-email"
          name="email"
          type="email"
          value={ email }
          placeholder="Insira seu email"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="btn-play"
          disabled={ validButton }
        >
          Play
        </button>
      </section>
    );
  }
}

export default Login;
