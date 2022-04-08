import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updateScore } from '../actions/index';
import '../assets/GamePage.css';
import AnswerButton from '../components/AnswerButton';
import Header from '../components/Header';
import { fetchApi } from '../services/fecthApi';

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
      difficulty: '',
      timer: 30,
      showButton: false,
    };
  }

  async componentDidMount() {
    const { token } = this.props;
    const numberOfQuestions = 5;
    const objectTrivia = await fetchApi(numberOfQuestions, token);
    const arrayTrivia = objectTrivia.results;
    this.setState({
      arrayTrivia,
    });
    this.updateState();
  }

  updateState = () => {
    const { arrayTrivia, questionIndex } = this.state;
    const currentQuestion = arrayTrivia[questionIndex];
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      question,
      category,
      difficulty,
    } = currentQuestion;
    const optionsArray = [...incorrectAnswers, correctAnswer];
    const MAGIC = 0.5;
    const options = optionsArray.sort(() => Math.random() - MAGIC);
    this.setState({
      options,
      correctAnswer,
      question,
      category,
      difficulty,
    }, this.countdown);
  };

  updateScore = () => {
    const { score, sendScore } = this.props;
    const { difficulty, timer } = this.state;

    const easy = 1;
    const medium = 2;
    const hard = 3;
    const minScore = 10;
    if (difficulty === 'hard') {
      const newScore = score + (minScore + (timer * hard));
      sendScore(newScore);
    } else if (difficulty === 'medium') {
      const newScore = score + (minScore + (timer * medium));
      sendScore(newScore);
    } else if (difficulty === 'easy') {
      const newScore = score + (minScore + (timer * easy));
      sendScore(newScore);
    }
  }

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
    const { correctAnswer } = this.state;
    const { innerHTML } = target;
    if (innerHTML === correctAnswer) {
      this.updateScore();
    }
    this.setState({ showButton: true });
    this.revealAnswer();
    clearInterval(this.constSetInterval);
  };
  // Com a ajudado do Sugamo, usando o this para para o setInterval ser algo visto por todo o componente.
  // https://stackoverflow.com/questions/47254124/clear-interval-in-react-class

  countdown = () => {
    const MAGIC_TIME = 1000;
    this.constSetInterval = setInterval(this.decrementTimer, MAGIC_TIME);
  }

  nextQuestion = () => {
    const { questionNumber, questionIndex } = this.state;
    const { history } = this.props;
    const CINCO = 5;
    if (questionNumber === CINCO) {
      history.push('/result-page');
    }
    this.setState({
      questionIndex: questionIndex + 1,
      questionNumber: questionNumber + 1,
      showButton: false,
      timer: 30,
    }, () => {
      this.updateState();
      this.hideAnswer();
    });
  }

  decrementTimer = () => {
    const { timer } = this.state;
    if (timer > 0) {
      this.setState({
        timer: timer - 1,
      });
    } else {
      this.setState({
        timer: 0,
      }, () => {
        this.revealAnswer();
        clearInterval(this.constSetInterval);
        this.setState({ showButton: true });
      });
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
      showButton,
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
            {
              showButton && (
                <button
                  type="button"
                  onClick={ this.nextQuestion }
                  data-testid="btn-next"
                >
                  Next
                </button>
              )
            }
          </aside>
        </main>
      </>
    );
  }
}

GamePage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  token: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  sendScore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  sendScore: (score) => dispatch(updateScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
