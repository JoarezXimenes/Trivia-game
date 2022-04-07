import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { fetchApi } from '../services/fecthApi';
import AnswerButton from '../components/AnswerButton';
import Header from '../components/Header';

import '../assets/GamePage.css';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayTrivia: [],
      questionNumber: 1,
      questionIndex: 0,
      options: [],
      correctAnswer: '',
      question: '',
      category: '',
      // difficulty: '',
      timer: 30,
    };
  }

  async componentDidMount() {
    const { token } = this.props;
    // const { questionIndex } = this.state;
    const numberOfQuestions = 5;
    const objectTrivia = await fetchApi(numberOfQuestions, token);
    const arrayTrivia = objectTrivia.results;
    this.setState({
      arrayTrivia,
    });
    this.updateState();
    this.countdown();
  }

  updateState = () => {
    const { arrayTrivia, questionIndex } = this.state;
    const currentQuestion = arrayTrivia[questionIndex];
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      question,
      category,
      // difficulty,
    } = currentQuestion;
    const optionsArray = [...incorrectAnswers, correctAnswer];
    const MAGIC = 0.5;
    const options = optionsArray.sort(() => Math.random() - MAGIC);
    this.setState({
      options,
      correctAnswer,
      question,
      category,
      // difficulty,
    });
  };

  revealAnswer = () => {
    const { correctAnswer } = this.state;
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button) => {
      button.disabled = true;
      if (button.innerHTML === correctAnswer) {
        button.classList.add('correct');
      } else {
        button.classList.add('wrong');
      }
    });
  }

  hideAnswer = () => {
    const { correctAnswer } = this.state;
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button) => {
      button.disabled = false;
      if (button.innerHTML === correctAnswer) {
        button.classList.remove('correct');
      } else {
        button.classList.remove('wrong');
      }
    });
  }

  verifyAnswer = ({ target }) => {
    // const { correctAnswer } = this.state;
    const { innerHTML } = target;
    console.log(innerHTML);
    this.revealAnswer();
  };

  countdown = () => {
    const MAGIC_TIME = 1000;
    setInterval(this.decrementTimer, MAGIC_TIME);
  }

  decrementTimer = () => {
    const { timer } = this.state;
    console.log(timer);
    if (timer > 0) {
      this.setState({
        timer: timer - 1,
      });
    } else {
      this.setState({
        timer: 0,
      }, this.revealAnswer);
    }
  }

  render() {
    const {
      options,
      correctAnswer,
      question,
      category,
      questionNumber,
      timer,
    } = this.state;
    return (
      <>
        <Header />
        <main>
          <article className="question-section">
            <div className="question-card">
              <p data-testid="question-category">
                { category }
              </p>
              <p data-testid="question-text">
                {questionNumber}
                { question }
              </p>
            </div>
            <span className="time-left">
              Tempo restante:
              { timer }
            </span>
          </article>
          <aside className="answer-section">
            <div className="answers-card" data-testid="answer-options">
              {
                options.map((option, index) => {
                  if (option === correctAnswer) {
                    return (<AnswerButton
                      key={ index }
                      index={ index }
                      answer={ option }
                      verifyAnswer={ this.verifyAnswer }
                      dataTestId="correct-answer"
                    />);
                  }
                  return (<AnswerButton
                    key={ index }
                    verifyAnswer={ this.verifyAnswer }
                    index={ index }
                    answer={ option }
                    dataTestId="wrong-answer"
                  />);
                })
              }
            </div>
            <button
              type="button"
              onClick={ this.hideAnswer }
            >
              Próxima
            </button>
          </aside>
        </main>
      </>
    );
  }
}

GamePage.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(GamePage);
