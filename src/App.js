import React from 'react';
import AppWeather from './weather-app/AppWeather';
import ToDoListApp from './todolist/ToDoListApp';
import AppCalculator from './calculatrice/AppCalculator';
import AppBook from './books/appBook';

const VIA = {
    ToDoList: '#/to-do-list',
    Meteo : '#/meteo',
    Calculatrice: '#/calculatrice',
    Book: '#/livres'
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
                },
                {
                    id: 'App4',
                    name: "Books",
                    tag: <AppBook />
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
            case VIA.Book : return <AppBook />;
            default: return <NotFound />
        }
    }
    
    
    render() {
        return (
            <section>
                <div className="container">
                    <div className="col-2 btn"><a href={VIA.ToDoList}>To Do List</a></div>
                    <div className="col-2 btn"><a href={VIA.Meteo}>Météo</a></div>
                    <div className="col-2 btn"><a href={VIA.Calculatrice}>Calculatrice</a></div>
                    <div className="col-2 btn"><a href={VIA.Book}>Livres</a></div>
                </div>
                {this.renderVia()}
            </section>
        );
    }
}

const NotFound = () => <h1>Page Not Found !!!</h1>

export default App;