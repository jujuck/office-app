import React, { Component } from 'react';
import ProjectItem from './projectItem';

class Projects extends Component {
    deleteProject(id) {
        this.props.onDelete(id)
    }
    
    render() {
        let projectItems;
        if(this.props.projects) {
            projectItems = this.props.projects.map(project => {
                //console.log(project);
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
                );
            });
        }
        
        return (
          <ul className="Projects">
            <h3>Vos tâches en cours</h3>
            {projectItems}
          </ul>
    );
  }
}



export default Projects;
