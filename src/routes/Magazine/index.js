import React from 'preact';

import magazines from 'press.json';

import Photo from 'components/Photo';
import { getLanguage } from 'utils';

import './styles.scss';


class Project extends React.Component {

    constructor(props) {
        super(props);
        this.magazine = {};
        this.state = {
            zoom: null
        }
    }

    componentWillMount() {
        magazines.forEach(magazine => {
            if (magazine.title === this.props.title) {
                this.magazine = magazine;

                document.title = "Constance Oulès - " + magazine.title;

                this.showcaseImage = require('../../assets/photos/Press/' + magazine.title + '.jpg');
                this.page = require('../../assets/photos/Press/' + magazine.title + "_PAGE.jpg");
            }
        });
    }

    render() {
        return (
            <div className="project">
                <Photo
                    src={this.showcaseImage}
                    isMobile={this.props.isMobile}
                />
                <div className="infos">
                    <h3>{this.magazine.title}</h3>
                    <p>{this.magazine.subtitle}</p>
                </div>
                <p>{this.magazine.description[getLanguage()]}</p>

                <Photo
                    src={this.page}
                    isMobile={this.props.isMobile}
                />
            </div>
        )
    }
}

export default Project;