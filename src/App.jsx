import React, { Component } from 'react';
import Exercise from './Exercise';

const questions = [
  { options: ['Hot', 'Cold'], correct: 0 },
  { options: ['Option 1', 'Option 2'], correct: 1 },
  { options: ['Active', 'Not active'], correct: 0 },
];

const style = {
  padding: '200px'
};

class App extends Component {
  render() {
    return (
      <div style={style}>
        <Exercise questions={questions} />
      </div>
    );
  }
}

export default App;
