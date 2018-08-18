import React from 'preact';

import Sidemenu from '../Sidemenu';

import Home from 'routes/Home';
import Projects from 'routes/Projects';
import Project from 'routes/Project';
import About from 'routes/About';
import Contact from 'routes/Contact';

import { Router } from 'preact-router';

import strings from 'strings';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileView: window.innerWidth <= 600
        }
    }

    componentDidMount() {
        window.onresize = () => {
            this.setState({mobileView: window.innerWidth <= 600})
        }
    }

    render() {

        const routes = [
            {
                title: strings.SIDEMENU_PROJECTS,
                href: "/projects"
            },
            {
                title: strings.SIDEMENU_ABOUT,
                href: "/about"
            },
            {
                title: strings.SIDEMENU_CONTACT,
                href: "/contact"
            }
        ];

        return (
            <div>
                <Sidemenu isMobile={this.state.mobileView} routes={routes}/>
                <div className="app">
                    <Router onChange={() => window.scrollTo(0, 0)}>
                        <Home path="/"/>
                        <Projects path="/projects"/>
                        <Project path="/project/:title"/>
                        <About path="/about"/>
                        <Contact path="/contact"/>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;