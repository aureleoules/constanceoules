import React from 'preact';

import './styles.scss';

import strings from 'strings';

import Photo from 'components/Photo';
import { getLanguage } from '../../utils';

import client from 'services/client';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image_url: "",
            content_en: "",
            content_fr: ""
        }
    }

    componentDidMount() {
        document.title = "Constance Oulès - " + strings[getLanguage()].SIDEMENU_ABOUT;
        client.get('/content/about').then(response => {
            const content = response.data.payload;
            this.setState({...content});
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="about">
                <Photo src={this.state.image_url} alt="about"/>
                {this.state["content_" + getLanguage()].split('\n').map((block, i) => {
                    return (
                        <p key={i}>{block}</p>
                    )
                })
                }
            </div>
        )
    }
}

export default About;