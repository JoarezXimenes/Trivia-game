export default booleanQuestions = {
  category: 'General Knowledge',
  correct_answer: 'True',
  difficulty: 'easy',
  incorrect_answers: ['False'],
  question: 'You can legally drink alcohol while driving in Mississippi.',
  type: 'boolean',
};

// CHECAR TIPO - IF QUESTION.TYPE === 'BOOLEAN'
// CRIAR UM ARRAY "RESPOSTAS" COM correct_answer + incorrect_answers
// DAR UM SHUFFLE NO RESPOSTAS PARA EMBARALHAR
// COMPARAR O VALOR DO TARGET À QUESTION.CORRECT_ANSWER
// IF TRUE ===  PONTO ELSE SEM PONTO
