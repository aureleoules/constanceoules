import React from 'preact';

import './styles.scss';
import projects from './projects.json';

import Photo from 'components/Photo';


class Projects extends React.Component {

    getProjects = () => {
        return projects.map((project, i) => (
            <Photo title={project.title} url={project.url}/>
        ))
    }

    render() {
        return (
            <div className="projects">
                {this.getProjects()}
            </div>
        )
    }
}

export default Projects;