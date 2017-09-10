import React, { Component } from 'react';
import Toggle from './Toggle';

import './Exercise.css';

class Exercise extends Component {
    constructor(props) {
        super();
        const { questions } = props;

        const initialised = questions.map(q => 0);
        this.state = { selected: initialised };

        this.updateAnswer = this.updateAnswer.bind(this);
    }

    updateAnswer(questionIndex, value) {
        const { selected } = this.state;

        const newSelected = selected.slice();
        newSelected[questionIndex] = value;

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
                        updateAnswer={answerIndex => this.updateAnswer(i, answerIndex)}
                    />);
                })}
                <p className="Exercise__verdict">{allCorrect ? correctText : wrongText}</p>
            </div>
        );
    }
}

export default Exercise;
