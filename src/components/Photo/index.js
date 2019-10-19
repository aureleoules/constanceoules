import React from 'preact';

import './styles.scss';

import {lowQuality, highQuality} from 'utils';

class Photo extends React.Component {
    onPhotoClick = e => {
        if(this.props.zoom && e.target.id !== "picture") {
            this.props.removeZoom();
            this.setState({
                opacity: 0
            })
        } else {
            
            
            this.props.onClick();
            
            const check = () => {
                setTimeout(() => {
                    if(!this.pictureRef) return check();
                    if(!this.pictureRef.naturalWidth || !this.pictureRef.naturalHeight) return check();
                    const width = 0.80 * (800 * (this.pictureRef.naturalWidth / this.pictureRef.naturalHeight));
                    this.setState({
                        currentHeight: window.innerWidth >= 900 ? 85 : null, 
                        currentWidth: window.innerWidth >= 900 ? width : null,
                        maxWidth: "unset",
                        opacity: 1
                    })
                }, 10);
            }
            
            check();


        }
    }

    constructor(props) {
        super(props);
        this.state ={
            width: 0,
            height: 0,
            maxWidth: "30"
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
                <div className="img-container" style={this.props.zoom ? `display: ${this.state.display}; width: ${this.state.currentWidth}px!important; height: ${this.state.currentHeight}vh!important; max-width: unset;`: ""}>
                    {this.props.zoom && this.state.opacity && <a className="cross">
                        <img style="opacity: 1;" alt="cross" src={require("../../assets/icons/cross" + (this.props.isMobile ? "_mobile" : "") + ".svg")}/>
                    </a>}
                    {this.props.zoom && <img
                        ref={pic => this.pictureRef = pic}
                        style={`max-width: unset!important; opacity: ${this.state.opacity};`}
                        id="picturezoomed" 
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