import React from 'react';

let questions = [
    "What is the capital of Nepal?",
    "Who was the first prime minister of Nepal?",
    "How many of the world's tallest mountains are situated in Nepal?",
    "Who was the first Nepalese person to climb Mt. Everest?",
    "What is the national flower of Nepal?",
    "What is the second largest religion in Nepal?"
]

let correctAnswers = [
    "Kathmandu",
    "Bhimsen Thapa",
    "8",
    "Tenzing Norgay Sherpa",
    "Rhododendron",
    "Buddhism"
]

export class Quiz extends React.Component {
    state = {
        q: 0
    }

    onclick(type) {
        this.setState(prevState => {
            return { q: type == 'add' ? prevState.q + 1 : prevState.q - 1 }
        });
    }
    renderQuestion() {
        if (this.state.q === 0) {
            return (
                <div>
                    <h1>Question {1}</h1>
                    {questions[0]}
                    <br />
                    <button className="btn btn-secondary" onClick={this.onclick.bind(this, 'add')}>Next question</button>
                </div>

            );
        }
        for (var i = 1; i < 6; i++) {
            if (this.state.q === i) {
                return (
                    <div>
                        <h1>Question {i + 1}</h1>
                        {questions[i]}
                        <br />
                        <div className="btn-group" >
                            <button className="btn btn-secondary" onClick={this.onclick.bind(this, 'add')}>Next question</button>
                            <button className="btn btn-secondary" onClick={this.onclick.bind(this, 'sub')}>Previous question</button>
                        </div>

                    </div>

                );
            }
        }
        return (
            <div>
                Score
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderQuestion()}
            </div>
        );
    }
}