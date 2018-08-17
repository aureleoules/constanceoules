import React from 'preact';

import Sidemenu from '../Sidemenu';

import Home from '../../routes/Home';
import Projects from '../../routes/Projects';
import About from '../../routes/About';
import Contact from '../../routes/Contact';

import { Router } from 'preact-router';

class App extends React.Component {
    render() {

        const routes = [
            {
                title: "Projects",
                href: "/projects"
            },
            {
                title: "About",
                href: "/about"
            },
            {
                title: "Contact",
                href: "/contact"
            }
        ];

        return (
            <div>
                <Sidemenu routes={routes}/>
                <div className="app">
                    <Router>
                        <Home path="/"/>
                        <Projects path="/projects"/>
                        <About path="/about"/>
                        <Contact path="/contact"/>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;