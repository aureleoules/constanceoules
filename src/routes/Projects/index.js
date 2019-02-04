import React from 'preact';

import './styles.scss';

import { Link } from 'preact-router/match';

import Photo from 'components/Photo';

import strings from 'strings';
import { getLanguage } from '../../utils';

import client from 'services/client';

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        document.title = "Constance Oulès - " + strings[getLanguage()].SIDEMENU_PROJECTS;
        client.get('/galleries').then(response => {
            const projects = response.data.payload || [];
            this.setState({projects});
        }).catch(err => {
            if(err) throw err;
        });
    }

    getProjects = () => {
        return this.state.projects.map((project, i) => {
            return (
                <Link className="project-link" key={i} href={"/project/" + project.title}>
                    <Photo 
                        fade
                        title={project.title} 
                        subtitle={project.subtitle} 
                        src={project.preview_image}
                    />
                </Link>
            )
        });
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