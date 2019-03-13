import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Quiz} from '../components/quiz'
export class App extends React.Component {
    state = {
        screen : 0
    }
    setState(){
        this.state.screen = 1;
    }
    renderScreen(){
        if(this.state.screen === 0){
            return(
                <div>
                    <h1>Simple Quiz</h1>
                    <div>
                        <button onClick = {this.setState()}>Click here to start</button>
                    </div>
                </div>
            );
        }
        return(
            <div>
                <Quiz />
            </div>
        )
    }
    render() {
        return (
            <div className="container">
                <div className="border m-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    {this.renderScreen()}
                </div>
            </div>
        );
    }
}