/**
 * Created by amirassad on 12/22/17.
 */

import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaFilm from 'react-icons/lib/fa/film';

export default function Sporfity() {
    return (
        <div>
            <div style={{ color: "#1E90FF" }}>
                <h3>Sportify (Android Application) – Connecting People who play the same sports</h3>
                <h4>March 2016 - June 2016</h4>
            </div>
            <ul style= {{ listStyleType: "disc" }}>
                <li>
                    Recognized twice for the most contributing team member by teammates
                </li>
                <li>
                    Used Waterfall & Agile model for designing the applications functionality
                </li>
                <li>
                    Developed the base code, filtering, and home page which contained a list of all events
                </li>
                <li>
                    Tools used: <b>Java, Firebase, Android Studio</b>
                </li>
            </ul>

            <p className="buttons" id="bodyButton">
                <a style={{ marginRight: "2px"}} className="btn btn-primary" href="https://www.youtube.com/watch?v=Beh8I48XOAM" target="_blank" rel="noopener noreferrer"><FaFilm/> Watch Demo</a>
                <a className="btn btn-primary" href="https://github.com/a-amir01/Sportify" target="_blank" rel="noopener noreferrer"><FaGithub/> Visit Source Code</a>
            </p>
        </div>
    )
}
