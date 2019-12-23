import React from 'preact';

import Photo from 'components/Photo';
import { getLanguage } from 'utils';

import './styles.scss';

import client from 'services/client';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.magazine = {};
        this.state = {
            zoom: null,
            photos: [],
            title: "",
            description_en: "",
            description_fr: "",
            subtitle: "",
            preview_image: ""
        }
    }

    getId(url) {
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        }
        return "";
    }

    componentWillMount() {

        client.get('/work/title/' + this.props.title).then(response => {
            const work = response.data.payload;
            this.setState({...work});
            document.title = "Constance Oulès - " + work.title;
        }).catch(err => {
            if(err) throw err;
        })
    }

    getPhotos = () => {
        return this.state.photos.map((photo, i) => {
            if (this.state.preview_image_id !== photo.id) {
                if(photo.format === "youtube") {
                    return <iframe 
                        width="800" 
                        height="480" 
                        src={"https://www.youtube.com/embed/" + this.getId(photo.url)}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                }
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