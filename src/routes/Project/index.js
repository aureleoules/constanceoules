import React from 'preact';

class Project extends React.Component {

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default Project;