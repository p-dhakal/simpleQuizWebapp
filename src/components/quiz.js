import React from 'react';

let questions = [
    "What is the capital of Nepal?", 
    "Who was the first prime minister of Nepal?",
    "How many of the world's tallest mountains are situated in Nepal?"
]
export class Quiz extends React.Component {
    state = {
        question : 0
    }
    renderQuestion() {
        if(this.state.question === 0){
            return (questions[0])
        }
        if(this.state.question === 1){
            return(questions[1])
        }
        if(this.state.question === 2){
            return(questions[2])
        }

    }
    render() {
        return (
            <div>
                {this.renderQuestion()}
                <div>
                    <button onClick ={() => this.setState({question: 1})}>Next question</button>
                </div>
            </div>
        )
    }
}