import React, { Component } from 'react';
import uuid from 'uuid';

const uuidv4 = require('uuid/v4');

class AddProjects extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    static defaultProps = {
        categories: ['Maison', 'Alimentation', 'Bricolage', 'Voiture', 'Loisir', 'travail', 'Autres']
    }

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Title is required')
        } else {
            this.setState({newProject:{
                id: uuidv4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function() {
                this.props.addProject(this.state.newProject)
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        
        return (
          <div>
            <h3>Votre To Do List</h3>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Tâche</label><br />
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Categorie</label><br />
                    <select ref="category">
                        {categoryOptions}
                    </select>
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
          </div>
    );
  }
}



export default AddProjects;
