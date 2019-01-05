import React from 'preact';

import Photo from 'components/Photo';
import { getLanguage } from 'utils';

import './styles.scss';

import client from 'services/client';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.project = {};
        this.state = {
            zoom: null,
            photos: [],
            title: "",
            subtitle: "",
            description_en: "",
            description_fr: ""
        }
    }

    componentWillMount() {
        // document.title = "Constance Oulès - " + project.title;
        client.get('/galleries/title/' + this.props.title).then(response => {
            const gallery = response.data.payload;
            this.setState({...gallery});
        }).catch(err => {
            if(err) throw err;
        });
    }

    getPhotos = () => {
        return this.state.photos.map((photo, i) => {
            if (this.state.preview_image_id !== photo.id) {
                return <Photo 
                    id={i} 
                    zoom={this.state.zoom === i}
                    zoomable
                    onClick={() => this.setState({zoom: i})} 
                    src={photo.url}
                    isMobile={this.props.isMobile}
                    removeZoom={e => this.setState({zoom: null})}
                />
            }
            return null;
        });
    }

    render() {
        return (
            <div className="project">
                <Photo
                    src={this.state.preview_image}
                    isMobile={this.props.isMobile}
                    removeZoom={e => this.setState({zoom: null})}
                    onClick={() => this.setState({zoom: "showcase"})} 
                    zoom={this.state.zoom === "showcase"}
                    zoomable
                />
                <div className="infos">
                    <h3>{this.state.title}</h3>
                    <p>{this.state.subtitle}</p>
                </div>
                <p>{this.state["description_" + getLanguage()]}</p>
                {this.getPhotos()}
            </div>
        )
    }
}

export default Project;