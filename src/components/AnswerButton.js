import React from 'react';

class AnswerButton extends React.Component {
  render() {
    return (
      <label htmlFor="1">
        Resposta
        <input id="1" type="checkbox" />
      </label>
    );
  }
}

export default AnswerButton;
