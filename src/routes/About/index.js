import React from 'preact';

import './styles.scss';

import AboutPhoto from 'assets/photos/about.jpg';

import strings from 'strings';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <img src={AboutPhoto} alt="about"/>
                <p>{strings.ABOUT_DESCRIPTION}</p>
            </div>
        )
    }
}

export default About;