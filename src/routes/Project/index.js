import React from 'preact';

import projects from 'projects.json';

import Photo from 'components/Photo';
import { getLanguage } from 'utils';

import './styles.scss';


class Project extends React.Component {

    constructor(props) {
        super(props);
        this.project = {};
        this.state = {
            zoom: null
        }
    }

    componentWillMount() {
        projects.forEach(project => {
            if(project.title === this.props.title) {
                this.project = project;

                document.title = "Constance Oulès - " + project.title;

                this.showcaseImage = require('../../assets/photos/' + project.title + '/' + project.showcase);
                this.hdShowcaseImage = require('../../assets/photos/HD/' + project.title + '/' + project.showcase);
            }
        });
    }

    getPhotos = () => {
        return this.project.pictures.map((name, i) => {
            const picture = require('../../assets/photos/' + this.project.title + '/' + name)
            return <Photo 
                id={i} 
                zoom={this.state.zoom === i}
                zoomable
                onClick={() => this.setState({zoom: i})} 
                src={this.state.zoom === i ? require('assets/photos/HD/' + this.project.title + '/' + name) : picture}
                isMobile={this.props.isMobile}
                removeZoom={e => this.setState({zoom: null})}
            />
        });
    }

    render() {
        return (
            <div className="project">
                <Photo
                    src={this.state.zoom === "showcase" ? this.hdShowcaseImage : this.showcaseImage}
                    isMobile={this.props.isMobile}
                    removeZoom={e => this.setState({zoom: null})}
                    onClick={() => this.setState({zoom: "showcase"})} 
                    zoom={this.state.zoom === "showcase"}
                    zoomable
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