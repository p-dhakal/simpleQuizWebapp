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
                    <h3><span className="badge badge-primary">Question {1}</span></h3>
                    <h3>{questions[0]}</h3>
                    <br />
                    <div className="row">
                        <div className="col badge badge-info p-3 m-2">Jakarta</div>
                        <div className="col badge badge-info p-3 m-2">Kuala Lumpur</div>
                        <div className="w-100"></div>
                        <div className="col badge badge-info p-3 m-2">Kathmandu</div>
                        <div className="col badge badge-info p-3 m-2">Ulan Bator</div>
                    </div>
                    <br />
                    <button className="btn btn-secondary" onClick={this.onclick.bind(this, 'add')}>Next question</button>
                </div>

            );
        }
        for (var i = 1; i < 6; i++) {
            if (this.state.q === i) {
                return (
                    <div>
                        <h3><span className="badge badge-primary">Question {i + 1}</span></h3>
                        <h3>{questions[i]}</h3>
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