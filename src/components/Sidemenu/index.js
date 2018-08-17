import React from 'preact';

import Logo from 'assets/icons/logo.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import PinterestIcon from 'assets/icons/pinterest.svg';

import { Link } from 'preact-router/match';

import './styles.scss';

class Sidemenu extends React.Component {
    render() {
        return (
            <div className="sidemenu">
                <div className="container">
                    <Link href="/">
                        <img src={Logo} className="logo" alt="logo"/>
                    </Link>
                    <ul>
                        {this.props.routes.map((route, i) => (
                            <li>
                                <a href={route.href}>{route.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="socials">
                        <a href="">
                            <img src={InstagramIcon} alt="instagram"/>
                        </a>
                        <a href="">
                            <img src={PinterestIcon} alt="pinterest"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidemenu;