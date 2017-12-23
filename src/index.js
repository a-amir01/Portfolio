import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Footer from './components/Footer';

import { Nav, NavItem, Navbar } from 'react-bootstrap';
import Resume from "./files/Amir.pdf";
import './index.css';

import { HashRouter, Route, BrowserRouter } from 'react-router-dom';

const navbar = (
    <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Amir Assad</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey="3" href={ Resume } target="_blank" className="external" rel="noopener noreferrer">Resume</NavItem>
        </Nav>
        {/*<Navbar.Collapse>*/}
            {/*<Nav pullRight>*/}
                {/*<NavItem eventKey="1" href="/experience/#">Experience</NavItem>*/}
                {/*<NavItem eventKey="2" href="/projects/#">Projects</NavItem>*/}
                {/*<NavItem eventKey="3" href={ Resume } target="_blank" className="external" rel="noopener noreferrer">Resume</NavItem>*/}
            {/*</Nav>*/}
        {/*</Navbar.Collapse>*/}
    </Navbar>
);

const routes = (
    <HashRouter>
        <div>
            <div style={{ marginBottom: "3cm" }}>
                { navbar }
            </div>
            <Route path="/experience" component = { Experience }/>
            <Route path="/projects" component= { Projects }/>
            <Route exact path="/" component ={ Home }/>
            <div>
                <Footer/>
            </div>
        </div>
    </HashRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

