import React from 'preact';

import './styles.scss';

class Photo extends React.Component {
    render() {
        return (
            <div className="photo">
                <img alt={this.props.title} src={this.props.url}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Photo;