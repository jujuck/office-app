import React, { Component } from 'react';
import uudi from 'uuid';
import Projects from './Component/projects';
import AddProjects from './Component/addProjects';


const uuidv4 = require('uuid/v4');

class ToDoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : []

        }
    }
    
    getProjects() {
         this.setState({ projects: [
            {
                id: uuidv4(),
                title : 'Super U',
                category: 'Alimentation'
            },
            {
                id: uuidv4(),
                title : 'Vitre',
                category: 'Maison'
            },
            {
                id: uuidv4(),
                title : 'Web => react',
                category: 'Travail'
            }
        ]});
    }
    
    componentWillMount() {
        this.getProjects();
    }
    
    
    handleAddProject(project) {
       let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});
    }
    
    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projetcs : projects})
    }
    
    render() {
        return (
        <div className="bloc todolist">
            <div className="content">
                <AddProjects addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
            </div>
        </div>
        );
    }
}

export default ToDoListApp;
