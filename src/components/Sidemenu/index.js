import React from 'preact';

import Logo from 'assets/icons/logo.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import PinterestIcon from 'assets/icons/pinterest.svg';
import HamburgerIcon from 'assets/icons/hamburger.svg';

import { Link } from 'preact-router/match';

import './styles.scss';

class Sidemenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        document.body.onclick = e => {
            if(e.target.id !== "hamburger") {
                this.toggle();
            }
        }
    }

    toggle = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div className="sidemenu">
                {this.props.isMobile && <img id="hamburger" onClick={this.toggle} src={HamburgerIcon} alt="hamburger" className="hamburger"/>}
                {this.props.isMobile && <img src={InstagramIcon} alt="instagram" className="mobile-instagram"/>}
                <div className={["container", this.state.open ? "open" : ""].join(" ")}>
                    {!this.props.isMobile && <Link href="/">
                        <img src={Logo} className="logo" alt="logo"/>
                    </Link>}
                    <ul>
                        {this.props.routes.map((route, i) => (
                            <li>
                                <a href={route.href}>{route.title}</a>
                            </li>
                        ))}
                    </ul>
                    {!this.props.isMobile && <div className="socials">
                        <a target="_blank" href="https://www.instagram.com/constanceoules/">
                            <img src={InstagramIcon} alt="instagram"/>
                        </a>
                        <a target="_blank" href="https://www.pinterest.fr/cooless/">
                            <img src={PinterestIcon} alt="pinterest"/>
                        </a>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Sidemenu;