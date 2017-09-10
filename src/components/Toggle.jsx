import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
    render() {
        const { options, selectedAnswer, toggleAnswer } = this.props;
        const fraction = 100 / options.length;
        const width = fraction + '%';

        const left = (selectedAnswer / options.length) * 100 + '%';
        const right = (100 - ((selectedAnswer + 1) / options.length * 100)) + '%';

        const optionStyle = { width };
        const highlightStyle = { left, right };

        return (
            <div className="Toggle">
                <div className="Toggle__highlight"
                    style={highlightStyle}
                    onClick={() => toggleAnswer()}
                />
                {options.map((opt, i) => {
                    const active = selectedAnswer === i;

                    return (<button
                        style={optionStyle}
                        onClick={toggleAnswer}
                        key={opt}
                        className={`Toggle__option ${active ? 'Toggle__option--selected' : ''}`}
                    >
                        {opt}
                    </button>)
                })}
            </div>
        );
    }
}

export default Toggle;
