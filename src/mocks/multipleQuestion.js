export default multipleQuestion = {
  category: 'Entertainment: Japanese Anime & Manga',
  correct_answer: 'Hayao Miyazaki',
  difficulty: 'medium',
  incorrect_answers: ['Isao Takahata', 'Mamoru Hosoda', 'Hidetaka Miyazaki'],
  question: 'Who wrote and directed the animated movie &quot;Spirited Away&quot; (2001)?',
  type: 'multiple',
};

// CHECAR TIPO - IF QUESTION.TYPE === 'MULTIPLE'
// CRIAR UM ARRAY "RESPOSTAS" COM correct_answer + incorrect_answers
// DAR UM SHUFFLE NO RESPOSTAS PARA EMBARALHAR
// COMPARAR O VALOR DO TARGET À QUESTION.CORRECT_ANSWER
// IF TRUE ===  PONTO ELSE SEM PONTO
