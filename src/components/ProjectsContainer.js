import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class ProjectsContainer extends Component {
  render() {
      var projectItems = [];
      var project;
      for(var i = 0; i < 8; i++){
          project = <ProjectItem id={i} key={i} category={this.props.categoryView}/>;
          if (project) { // project will be created based on category
              projectItems.push(project);
          }
      }

      return (
        <div className="projects-container">
            {projectItems}
        </div>
    );
  }
}

export default ProjectsContainer;
