import React from 'preact';

import './styles.scss';

class Photo extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="photo">
                <img alt={this.props.title} src={this.props.url}/>
                <div className="infos">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtitle}</p>
                </div>
            </div>
        )
    }
}

export default Photo;