import React from 'preact';

import projects from 'projects.json';

import Photo from 'components/Photo';
import { getLanguage } from 'utils';

import './styles.scss';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.project = {};
    }

    componentWillMount() {
        projects.forEach(project => {
            if(project.title === this.props.title) {
                this.project = project;

                this.showcaseImage = require('../../assets/photos/' + project.title + '/' + project.showcase);
            }
        });
    }

    getPhotos = () => {
        return this.project.pictures.map(name => {
            const picture = require('../../assets/photos/' + this.project.title + '/' + name)
            return <Photo url={picture}/>
        });
    }

    render() {
        return (
            <div className="project">
                <h1>{this.project.title}</h1>
                <Photo url={this.showcaseImage}/>
                <p>{this.project.description[getLanguage()]}</p>
                {this.getPhotos()}
            </div>
        )
    }
}

export default Project;