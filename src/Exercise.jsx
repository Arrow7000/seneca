import React, { Component } from 'react';
import Toggle from './Toggle';

import './Exercise.css';

class Exercise extends Component {
    constructor(props) {
        super();
        const { questions } = props;

        const initialised = questions.map(q => 0);
        this.state = { selected: initialised };
    }

    toggleAnswer(questionIndex) {
        const { selected } = this.state;

        const newSelected = selected.slice();
        const value = newSelected[questionIndex];
        const newValue = value === 0 ? 1 : 0;
        newSelected[questionIndex] = newValue;

        this.setState({ selected: newSelected });
    }

    render() {
        const { questions } = this.props;
        const { selected } = this.state;

        const allCorrect = !selected
            .map((selectedAnswer, i) => {
                return selectedAnswer === questions[i].correct;
            })
            .some(answer => !answer);

        const correctText = 'The answer is correct!';
        const wrongText = 'The answer is incorrect.';

        return (
            <div className={`Exercise ${allCorrect ? 'Exercise--correct' : ''}`}>
                {questions.map((question, i) => {
                    return (<Toggle
                        key={i}
                        options={question.options}
                        selectedAnswer={selected[i]}
                        toggleAnswer={() => this.toggleAnswer(i)}
                    />);
                })}
                <p className="Exercise__verdict">{allCorrect ? correctText : wrongText}</p>
            </div>
        );
    }
}

export default Exercise;
