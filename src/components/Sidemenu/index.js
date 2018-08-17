import React from 'preact';
import Logo from '../Logo';

import './styles.scss';

class Sidemenu extends React.Component {
    render() {
        return (
            <div className="sidemenu">
                <div className="container">
                    <div className="logo">LOGO</div>
                    <ul>
                        {this.props.routes.map((route, i) => (
                            <li>
                                <a href={route.href}>{route.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="socials">
                        <span>instagram</span>
                        <span>pinterest</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidemenu;