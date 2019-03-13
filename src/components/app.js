import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Quiz} from '../components/quiz'
export class App extends React.Component {
    state = {
        screen : 0
    }
    
    
    renderScreen(){
        if(this.state.screen === 0){
            return(
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <h1>Simple Quiz</h1>
                    <div>
                        <button onClick={() => this.setState({screen:1})}>Click here to start</button>
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
                <div className="border m-2" style={{height: '100vh' }} >
                    {this.renderScreen()}
                </div>
            </div>
        );
    }
}