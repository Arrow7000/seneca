import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
    render() {
        const { options, selectedAnswer, toggleAnswer } = this.props;
        const len = options.length;
        const fraction = 100 / len;
        const width = fraction + '%';
        const optionStyle = { width };
        const highlightStyle = {
            left: (selectedAnswer / options.length) * 100 + '%',
            right: (100 - ((selectedAnswer + 1) / options.length * 100)) + '%'
        };

        return (
            <div className="Toggle">
                <div className="Toggle__highlight"
                    style={highlightStyle}
                    onClick={() => toggleAnswer()}
                />
                {options.map(opt => {
                    return (<button
                        style={optionStyle}
                        onClick={toggleAnswer}
                        key={opt}
                        className="Toggle__option"
                    >
                        {opt}
                    </button>)
                })}
            </div>
        );
    }
}

export default Toggle;
