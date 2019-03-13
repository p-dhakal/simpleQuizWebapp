import React from 'react';

export class Scoreboard extends React.Component {
    state = {
        buttonClass: "btn btn-info"
    }
    changeButtonColor(){
        this.setState({buttonClass: "btn btn-warning"})
    }
    render(){
        return(
            <div>
                <button className={this.state.buttonClass} onClick={() => this.changeButtonColor()}>Score</button>
            </div>
        );
    }
}