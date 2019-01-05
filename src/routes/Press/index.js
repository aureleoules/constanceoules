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
            work: []
        }
    }

    componentDidMount() {
        document.title = "Constance Oulès - " + strings[getLanguage()].SIDEMENU_PRESS;
        client.get('/work').then(response => {
            console.log(response.data);
            const work = response.data.payload || [];
            this.setState({work});;
        });
    }

    getMagazines = () => {
        return this.state.work.map((magazine, i) => {
            return (
                <Link className="project-link" key={i} href={"/press/" + magazine.title}>
                    <Photo 
                        fade
                        title={magazine.title} 
                        subtitle={magazine.subtitle} 
                        src={magazine.preview_image}
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