/**
 * Created by amirassad on 12/16/17.
 */
import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';

import MyResume from "../../files/Amir.pdf";
import "./resume.css"

// import { Document, Page } from 'react-pdf';

class Resume extends React.Component {
    render() {
        return (

        <div style={{ width: '100px', height: '800px' }}>
            <ResponsiveEmbed a16by9>
                <embed type="application/pdf" src={ MyResume } />
            </ResponsiveEmbed>
        </div>

            // <div className="embed-container">
            //     <iframe src={ MyResume } frameborder="0"></iframe>
            // </div>

            // <div>
            //     <h1>Resume</h1>
            //     <object className="resume" data={ MyResume } type="application/pdf"> </object>
            //
            // </div>
        );
    }
}

export default Resume;