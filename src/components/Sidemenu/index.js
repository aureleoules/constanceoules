import React from 'preact';

import Logo from 'assets/icons/logo.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import PinterestIcon from 'assets/icons/pinterest.svg';
import HamburgerIcon from 'assets/icons/hamburger.svg';
import MobileLogo from 'assets/icons/logo_mobile.svg';
import ClickOutside from 'react-click-outside';

import { Link } from 'preact-router/match';

import './styles.scss';
import LanguageSelector from '../LanguageSelector';

import {getLanguage, setLanguage} from 'utils';

class Sidemenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        document.body.onclick = this.onClickAway;
    }
    
    onClickAway = e => {
        if(e.target.id !== "hamburger" && this.state.open) {
            this.toggle();
        }
    }

    toggle = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <ClickOutside onClickOutside={this.onClickAway}>
                <div className="sidemenu">
                    {this.props.isMobile && (
                        <div className="mobile-logo-container">
                            <Link onClick={() => this.setState({open: false})} href="/">
                                <img src={MobileLogo} alt="mobile"/>
                            </Link>
                            <LanguageSelector onSelect={lang => setLanguage(lang)} active={getLanguage()}/>
                        </div>
                    )}
                    {this.props.isMobile && <a href="#menu">
                            <img id="hamburger" onClick={this.toggle} src={HamburgerIcon} alt="hamburger" className="hamburger"/>
                        </a>
                    }
                    {this.props.isMobile && (
                        <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/constanceoules/">
                            <img src={InstagramIcon} alt="instagram" className="mobile-instagram"/>
                        </a>
                    )}
                    <div className={["container", this.state.open ? "open" : ""].join(" ")}>
                        {!this.props.isMobile && <Link href="/">
                            <img src={Logo} className="logo" alt="logo"/>
                        </Link>}
                        <ul>
                            {this.props.routes.map((route, i) => (
                                <li>
                                    <a className={this.props.route === route.href ? "active" :""} href={route.href}>{route.title}</a>
                                </li>
                            ))}
                            
                        </ul>
                        {!this.props.isMobile && <div className="socials">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/constanceoules/">
                                <img src={InstagramIcon} alt="instagram"/>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.pinterest.fr/cooless/">
                                <img src={PinterestIcon} alt="pinterest"/>
                            </a>
                        </div>}
                        {!this.props.isMobile && 
                            <LanguageSelector onSelect={lang => setLanguage(lang)} active={getLanguage()}/>
                        }
                    </div>
                </div>
            </ClickOutside>
        )
    }
}

export default Sidemenu;