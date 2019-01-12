import React from 'preact';

import './styles.scss';

import {lowQuality, highQuality} from 'utils';

class Photo extends React.Component {
    onPhotoClick = e => {
        if(this.props.zoom && e.target.id !== "picture") {
            this.props.removeZoom();
        } else {
            this.props.onClick();
        }
    }

    render() {
        return (
            <div 
                onClick={this.props.zoomable ? this.onPhotoClick : null}
                id="photo"
                className={
                [
                    "photo", 
                    this.props.always ? "always":"", 
                    this.props.fade ? "fade":"",
                    this.props.zoom ? "zoom": ""
                ].join(" ")}>
                <div className="img-container">
                    {this.props.zoom && <a className="cross">
                        <img alt="cross" src={require("../../assets/icons/cross" + (this.props.isMobile ? "_mobile" : "") + ".svg")}/>
                    </a>}
                    {this.props.zoom && <img 
                        id="picture" 
                        alt={this.props.title || this.props.alt} 
                        src={highQuality(this.props.src)}/>}
                    {!this.props.zoom && <img 
                        id="picture" 
                        alt={this.props.title || this.props.alt} 
                        src={lowQuality(this.props.src)}/>}
                </div>
                <div className="infos">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtitle}</p>
                </div>
            </div>
        )
    }
}

export default Photo;