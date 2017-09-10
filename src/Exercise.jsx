import React, { Component } from 'react';
import Toggle from './Toggle';
import { interpolateHslLong } from 'd3-interpolate';

import './Exercise.css';

// All below colours taken from Zeplin mocks
const topWrongColor = 'rgba(250, 145, 97, 0.7)';
const bottomWrongColor = 'rgba(247, 59, 28, 0.69)';
const topCorrectColor = '#47e4c1';
const bottomCorrectColor = '#07cddd';

const interpolatorTop = interpolateHslLong(topWrongColor, topCorrectColor);
const interpolatorBottom = interpolateHslLong(bottomWrongColor, bottomCorrectColor);

function getColour(params) {

}

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

        const wrongAnswers = selected
            .map((selectedAnswer, i) => {
                return selectedAnswer === questions[i].correct;
            })
            .filter(answer => !answer)
            .length;

        const allCorrect = wrongAnswers < 1;

        const wrongProportion = wrongAnswers / selected.length;

        const topColor = interpolatorTop(1 - wrongProportion);
        const bottomColor = interpolatorBottom(1 - wrongProportion);

        const correctText = 'The answer is correct!';
        const wrongText = 'The answer is incorrect.';

        const style = {
            backgroundImage: `linear-gradient(to bottom, ${topColor}, ${bottomColor})`
        }

        return (
            <div
                style={style}
                className={`Exercise ${allCorrect ? 'Exercise--correct' : ''}`}>
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
