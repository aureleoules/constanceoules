import React from 'preact';

import './styles.scss';

class LanguageSelector extends React.Component {
    render() {
        return (
            <div className="language-selector">
                <a onClick={() => this.props.onSelect("fr")} className={this.props.active === "fr" ? "active" :""}>fr</a>
                <span>|</span>
                <a onClick={() => this.props.onSelect("en")} className={this.props.active === "en" ? "active" :""}>en</a>
            </div>
        )
    }
}

export default LanguageSelector;