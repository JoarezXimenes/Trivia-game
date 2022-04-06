import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AnswerButton from '../components/AnswerButton';
import Header from '../components/Header';
import { fetchApi } from '../services/fecthApi';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayTrivia: {},
      questionNumber: 1,
      questionIndex: 0,
      options: [],
      correctAnswer: '',
      question: '',
      category: '',
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
    console.log(arrayTrivia);
    this.updateState();
    // const {
    //   correct_answer: correctAnswer, incorrect_answers: incorrectAnswers,
    // } = responseTriviaApi[questionIndex];
    // const options = [correctAnswer, ...incorrectAnswers];
  }

  //  function shuffleArray(inputArray){
  // inputArray.sort(()=> Math.random() - 0.5);
  // }

  updateState = () => {
    const { arrayTrivia, questionIndex } = this.state;
    const currentQuestion = arrayTrivia[questionIndex];
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      question,
      category,
    } = currentQuestion;
    const optionsArray = [...incorrectAnswers, correctAnswer];
    console.log(optionsArray);
    const MAGIC = 0.5;
    const options = optionsArray.sort(() => Math.random() - MAGIC);
    console.log(options);
    this.setState({
      options,
      correctAnswer,
      question,
      category,
    });
  };

  render() {
    const { options, correctAnswer, question, category, questionNumber } = this.state;
    console.log(correctAnswer);
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
            <span className="time-left">Tempo restante: 20 segundos</span>
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
                      dataTestId="correct-answer"
                    />);
                  }
                  return (<AnswerButton
                    key={ index }
                    index={ index }
                    answer={ option }
                    dataTestId="wrong-answer"
                  />);
                })
              }
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

GamePage.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(GamePage);
