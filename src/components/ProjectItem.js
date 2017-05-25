import React, { Component } from 'react';
import projectsData from '../data/data.json';
import projectImg from '../assets/images/project-01.jpg';

function pad(n) {
    return ("0" + n).slice(-2);
}


class ProjectItem extends Component {
  render() {
      var id = this.props.id;
      var imgStyle = {
          backgroundImage: 'url(' + projectImg + ')'
      };

      var project;
      if ((projectsData[id].category).indexOf(this.props.category) > -1) {
          project =
              <div className={("project-item project-".concat(pad(id+1)))}>
                  <div className="project-data-container">
                      <h3 className="project-data title">{projectsData[id].title}, {projectsData[id].date}</h3>
                      <h3 className="project-data creator">{projectsData[id].creator}</h3>
                  </div>
                  <div className="project-image" style={imgStyle}/>
              </div>
      } else {
          project = null;
      }

      return project;
  }
}

export default ProjectItem;
