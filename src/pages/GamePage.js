import React from 'react';
import Header from '../components/Header';
import AnswerButton from '../components/AnswerButton';

class GamePage extends React.Component {
  render() {
    // const { gravatarEmail } = this.props;
    return (
      <>
        <Header />
        <main>
          <article className="question-section">
            <div className="question-card">
              <h3>Pergunta</h3>
              <p>Como fazer para saber a resposta certa?</p>
            </div>
            <span className="time-left">Tempo restante: 20 segundos</span>
          </article>
          <aside className="answer-section">
            <div className="answers-card">
              <AnswerButton />
              <AnswerButton />
              <AnswerButton />
            </div>
            <button type="button">
              Próxima
            </button>
          </aside>
        </main>
      </>
    );
  }
}

export default GamePage;
