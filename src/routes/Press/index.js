import React from 'preact';

import './styles.scss';
import magazines from 'press.json';

import { Link } from 'preact-router/match';

import Photo from 'components/Photo';

import strings from 'strings';
import { getLanguage } from '../../utils';

class Projects extends React.Component {

    componentDidMount() {
        document.title = "Constance Oulès - " + strings[getLanguage()].SIDEMENU_PRESS;
    }

    getMagazines = () => {
        return magazines.map((magazine, i) => {
            const image = require('../../assets/photos/Press/' + magazine.title + ".jpg");
            return (
                <Link className="project-link" key={i} href={"/press/" + magazine.title}>
                    <Photo 
                        fade
                        title={magazine.title} 
                        subtitle={magazine.subtitle} 
                        src={image}
                    />
                </Link>
            )
        });
    }

    render() {
        return (
            <div className="magazines">
                {this.getMagazines()}
            </div>
        )
    }
}

export default Projects;