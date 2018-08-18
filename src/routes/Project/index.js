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

                document.title = "Constance Oulès - " + project.title;

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
                <Photo
                    url={this.showcaseImage}
                />
                <div className="infos">
                    <h3>{this.project.title}</h3>
                    <p>{this.project.subtitle}</p>
                </div>
                <p>{this.project.description[getLanguage()]}</p>
                {this.getPhotos()}
            </div>
        )
    }
}

export default Project;