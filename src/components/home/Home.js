import React from 'react';

import "./Home.css";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";

//https://a-amir01.github.io/Portfolio/
class Home extends React.Component {
    render() {
        return (
            <div>
                <Experience/>
                <Projects/>
            </div>


        )
    }
}

export default Home;