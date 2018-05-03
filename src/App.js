import React from 'react';
import AppWeather from './weather-app/AppWeather';
import ToDoListApp from './todolist/ToDoListApp';
import AppCalculator from './calculatrice/AppCalculator';

const VIA = {
    ToDoList: '#/to-do-list',
    Meteo : '#/meteo',
    Calculatrice: '#/calculatrice'
};

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentVia : VIA.ToDoList,
            onglets : [
                {
                    id: 'App1',
                    name: "ToDoList",
                    tag: <ToDoListApp />
                },
                {
                    id: 'App2',
                    name: "Meteo",
                    tag: <AppWeather />
                },
                {
                    id: 'App3',
                    name: "Calculatrice",
                    tag: <AppCalculator />
                }
            ]
        };
    }
    
    componentDidMount() {
        window.location.hash = VIA.ToDoList
        window.onhashchange = (e) => this.setState({ currentVia: window.location.hash})
    }
    
    renderVia() {
         switch(this.state.currentVia) {
            case VIA.ToDoList : return <ToDoListApp />;
            case VIA.Calculatrice : return <AppCalculator />;
            case VIA.Meteo : return <AppWeather />;
            default: return <NotFound />
        }
    }
    
    
    render() {
        return (
            <section>
                <div className="container">
                    <div className="col-2 btn"><a href={VIA.ToDoList}>To Do List</a></div>
                    <div className="col-2 btn"><a href={VIA.Meteo}>Weather</a></div>
                    <div className="col-2 btn"><a href={VIA.Calculatrice}>Calculatrice</a></div>
                </div>
                {this.renderVia()}
            </section>
        );
    }
}

const NotFound = () => <h1>Page Not Found !!!</h1>

export default App;