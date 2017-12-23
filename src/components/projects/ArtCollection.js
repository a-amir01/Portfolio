/**
 * Created by amirassad on 12/22/17.
 */

import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';

export default function ArtCollection() {
    return (

        <div>
            <div style={{ color: "#1E90FF" }}>
                <h3>Art Collection (Web Application) – An Artists Personal Web Sit</h3>
                <h4>May 2016 – PRESENT</h4>
            </div>
            <ul style= {{ listStyleType: "disc" }}>
                <li>
                    Designed and Implemented the REST API
                    <ul>
                        <li>
                            Added CRUD operations for the paintings to display
                        </li>
                    </ul>
                </li>
                <li>
                    Designed the form to submit paintings to display with drag and drop functionality
                </li>
                <li>
                    Tools used: <b>npm, node.js, Express, React, Redux, Mongodb, Intellij IDEA</b>
                </li>
            </ul>

            <p className="buttons" id="bodyButton">
                <a className="btn btn-primary" href="https://github.com/a-amir01/art-collections" target="_blank" rel="noopener noreferrer"><FaGithub/> Visit Source Code</a>
            </p>
        </div>

    )
}