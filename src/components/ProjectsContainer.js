import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

function getCategory(urlParam) {
    var category;
    switch (urlParam) {
        case "sharing_knowledge":
            category = "knowledge";
            break;
        case "social_technology":
            category = "technology";
            break;
        case "diy":
            category = "diy";
            break;
        case "storytelling":
            category = "storytelling";
            break;
        default :
            category = "all";
    }
    return category;
}

class ProjectsContainer extends Component {
  render() {
      var projectItems = [];
      var project;

      var urlParam = this.props.match.params[Object.keys(this.props.match.params)[0]] || "";
      var urlCategory = urlParam.split("/")[0];
      for(var i = 0; i < 8; i++){
          project = <ProjectItem id={i} key={i} category={getCategory(urlCategory)}/>;
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
