import React from 'react';

// Functional Component
const DisplayWindow = (props) => (<input type='text' value={props.expression} disabled='true'/>);

class Button extends React.Component {
  constructor() {
    super();
    
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.props.onKeyPressed(this.props.text);
  }
  
  render() {
    return <button onClick={this.onClick}>{this.props.text}</button>;
  }
}

class AppCalculator extends React.Component {
    constructor () {
    super();

    this.state = {
      expression: ''
    }

    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
    this.onDeletePressed = this.onDeletePressed.bind(this);
    }

    onKeyPressed(text) {
        this.setState((prev) => ({expression: prev.expression + text}));
    }

    onEvaluatePressed() {
        const result = eval(this.state.expression);
        this.setState({expression: result.toString()});
    }

    onDeletePressed() {
        this.setState((prev) => ({
        expression: ''
        }));
    }

    render() {
        return (
        <div className="bloc calculatrice">
            <div class="content">
                <h3>Votre calculatrice de bureau</h3>
                <table className="machine">
                    <tr><td colSpan="4"><DisplayWindow className="resultat" expression={this.state.expression}/></td></tr>
                    <tr>
                        <td><Button className="btn" text="9" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="8" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="7" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="-" onKeyPressed={this.onKeyPressed}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btn" text="6" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="5" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="4" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="*" onKeyPressed={this.onKeyPressed}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btn" text="3" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="2" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="0" onKeyPressed={this.onKeyPressed}/></td>
                        <td><Button className="btn" text="/" onKeyPressed={this.onKeyPressed}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btn" text="0" onKeyPressed={this.onKeyPressed}/></td>
                        <td colSpan="2"><button onClick={this.onEvaluatePressed}>=</button></td>
                        <td><Button className="btn" text="C" onKeyPressed={this.onDeletePressed}/></td>
                    </tr>
                </table>
            </div>
        </div>
        )
    }
}

export default AppCalculator;

