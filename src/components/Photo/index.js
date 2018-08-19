import React from 'preact';

import './styles.scss';

class Photo extends React.Component {
    render() {
        return (
            <div 
                onClick={this.props.onClick} 
                className={
                [
                    "photo", 
                    this.props.always ? "always":"", 
                    this.props.fade ? "fade":""
                ].join(" ")}>
                <img alt={this.props.title || this.props.alt} src={this.props.src}/>
                <div className="infos">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtitle}</p>
                </div>
            </div>
        )
    }
}

export default Photo;