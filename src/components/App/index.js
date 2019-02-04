import React from 'preact';

import Sidemenu from '../Sidemenu';

import Home from 'routes/Home';
import Projects from 'routes/Projects';
import Project from 'routes/Project';
import About from 'routes/About';
import Press from 'routes/Press';
import Contact from 'routes/Contact';

import Magazine from 'routes/Magazine';

import { Router } from 'preact-router';

import strings from 'strings';
import { getLanguage } from '../../utils';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileView: window.innerWidth <= 900,
            url: "/"
        }
    }

    componentDidMount() {
        window.onresize = () => {
            this.setState({mobileView: window.innerWidth <= 900})
        }
        window.addEventListener("language", () => {
            this.forceUpdate();
        });

        console.info("Code available on GitHub", "https://github.com/aureleoules/constanceoules");
        console.info("Website Designer", "https://aurele.oules.com")

        if(process.env.NODE_ENV !== "development") {
            window.console.log = () => {};
        }
    }

    onRouteChange = ({url}) => {
        window.scrollTo(0, 0)
        this.setState({url});
    }

    render() {

        const routes = [
            {
                title: strings[getLanguage()].SIDEMENU_PROJECTS,
                href: "/projects"
            },
            {
                title: strings[getLanguage()].SIDEMENU_ABOUT,
                href: "/about"
            },
            {
                title: strings[getLanguage()].SIDEMENU_PRESS,
                href: "/press"
            },
            {
                title: strings[getLanguage()].SIDEMENU_CONTACT,
                href: "/contact"
            }
        ];


        return (
            <div class="align-center">
                <Sidemenu route={this.state.url} isMobile={this.state.mobileView} routes={routes}/>
                <div className="app">
                    <Router onChange={this.onRouteChange}>
                        <Home path="/"/>
                        <Projects path="/projects"/>
                        <Project isMobile={this.state.mobileView} path="/project/:title"/>
                        <Press isMobile={this.state.mobileView} path="/press"/>
                        <Magazine path="/press/:title"/>
                        <About path="/about"/>
                        <Contact path="/contact"/>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;