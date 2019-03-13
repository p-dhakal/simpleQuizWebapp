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
        q: 0,
        optionOneSelected: false,
        optionTwoSelected: false,
        optionThreeSelected: false,
        optionFourSelected: false
    }
    optionOneClicked(){
        this.setState({optionOneSelected: !this.state.optionOneSelected})
        this.setState({optionThreeSelected: false})
        this.setState({optionFourSelected: false})
        this.setState({optionTwoSelected: false})
    }
    optionTwoClicked(){
        this.setState({optionTwoSelected: !this.state.optionTwoSelected})
        this.setState({optionThreeSelected: false})
        this.setState({optionFourSelected: false})
        this.setState({optionOneSelected: false})
    }
    optionThreeClicked(){
        this.setState({optionThreeSelected: !this.state.optionThreeSelected})
        this.setState({optionOneSelected: false})
        this.setState({optionFourSelected: false})
        this.setState({optionTwoSelected: false})
    }
    optionFourClicked(){
        this.setState({optionFourSelected: !this.state.optionFourSelected})
        this.setState({optionThreeSelected: false})
        this.setState({optionOneSelected: false})
        this.setState({optionTwoSelected: false})
    }
    nextPrevButtonClicked(type) {
        this.setState({optionThreeSelected: false})
        this.setState({optionFourSelected: false})
        this.setState({optionTwoSelected: false})
        this.setState({optionOneSelected: false})
        this.setState(prevState => {
            return { q: type == 'add' ? prevState.q + 1 : prevState.q - 1 }
        });
    }
    renderQuestion() {
        let optionOneClass = this.state.optionOneSelected ? "col btn btn-warning p-3 m-2" : "col btn btn-info p-3 m-2";
        let optionTwoClass = this.state.optionTwoSelected ? "col btn btn-warning p-3 m-2" : "col btn btn-info p-3 m-2";
        let optionThreeClass = this.state.optionThreeSelected ? "col btn btn-warning p-3 m-2" : "col btn btn-info p-3 m-2";
        let optionFourClass = this.state.optionFourSelected ? "col btn btn-warning p-3 m-2" : "col btn btn-info p-3 m-2";
        if (this.state.q === 0) {
            return (
                <div>
                    <h3><span className="badge badge-primary">Question {1}</span></h3>
                    <h3>{questions[0][0]}</h3>
                    <br />
                    <div className="row">
                        <button className={optionOneClass} onClick={() => this.optionOneClicked()}>{questions[0][1]}</button>
                        <button className={optionTwoClass} onClick={() => this.optionTwoClicked()}>{questions[0][2]}</button>
                        <div className="w-100"></div>
                        <button className={optionThreeClass} onClick={() => this.optionThreeClicked()}>{questions[0][3]}</button>
                        <button className={optionFourClass} onClick={() => this.optionFourClicked()}>{questions[0][4]}</button>
                    </div>
                    <br />
                    <button className="btn btn-secondary" onClick={this.nextPrevButtonClicked.bind(this, 'add')}>Next question</button>
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
                            <button className={optionOneClass} onClick={() => this.optionOneClicked()}>{questions[i][1]}</button>
                            <button className={optionTwoClass} onClick={() => this.optionTwoClicked()}>{questions[i][2]}</button>
                            <div className="w-100"></div>
                            <button className={optionThreeClass} onClick={() => this.optionThreeClicked()}>{questions[i][3]}</button>
                            <button className={optionFourClass} onClick={() => this.optionFourClicked()}>{questions[i][4]}</button>
                        </div>
                        <br />
                        <div className="btn-group" >
                            <button className="btn btn-secondary" onClick={this.nextPrevButtonClicked.bind(this, 'add')}>Next question</button>
                            <button className="btn btn-secondary" onClick={this.nextPrevButtonClicked.bind(this, 'sub')}>Previous question</button>
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