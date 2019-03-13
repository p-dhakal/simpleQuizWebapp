import React from 'react';
import {Scoreboard} from '../components/scoreboard';

let questions = [
    ["What is the capital of Nepal?", "Jakarta", "Kuala Lumpur", "Kathmandu", "Ulan Bator"],
    ["Who was the first prime minister of Nepal?", "Bhakti Thapa", "Jung Bahadur Rana", "Bishweswor Prasad Koirala", "Bhimsen Thapa"],
    ["How many of the world's tallest mountains are situated in Nepal?", "3", "6", "8", "9"],
    ["Who was the first Nepalese person to climb Mt. Everest?", "Tenzing Norgay Sherpa", "Ani Choing Dolma", "Ramkrishna Dhakal", "Pemba Sherpa"],
    ["What is the national flower of Nepal?", "Lotus", "Rhododendron", "Amaryllis", "Begonia"],
    ["What is the second largest religion in Nepal?", "Islam", "Hinduism", "Christianity", "Buddhism"]
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
                    <h3>{questions[0][0]}</h3>
                    <br />
                    <div className="row">
                        <div className="col badge badge-info p-3 m-2">{questions[0][1]}</div>
                        <div className="col badge badge-info p-3 m-2">{questions[0][2]}</div>
                        <div className="w-100"></div>
                        <div className="col badge badge-info p-3 m-2">{questions[0][3]}</div>
                        <div className="col badge badge-info p-3 m-2">{questions[0][4]}</div>
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
                        <h3>{questions[i][0]}</h3>
                        <br />
                        <div className="row">
                            <div className="col badge badge-info p-3 m-2">{questions[i][1]}</div>
                            <div className="col badge badge-info p-3 m-2">{questions[i][2]}</div>
                            <div className="w-100"></div>
                            <div className="col badge badge-info p-3 m-2">{questions[i][3]}</div>
                            <div className="col badge badge-info p-3 m-2">{questions[i][4]}</div>
                        </div>
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
                <Scoreboard />
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