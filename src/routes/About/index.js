import React from 'preact';

import './styles.scss';

import AboutPhoto from 'assets/photos/about.jpg';

import strings from 'strings';

import Photo from 'components/Photo';
import { getLanguage } from '../../utils';

class About extends React.Component {

    componentDidMount() {
        document.title = "Constance Oulès - " + strings[getLanguage()].SIDEMENU_ABOUT;
    }

    render() {
        return (
            <div className="about">
                <Photo src={AboutPhoto} alt="about"/>
                <p>{strings[getLanguage()].ABOUT_DESCRIPTION}</p>
            </div>
        )
    }
}

export default About;