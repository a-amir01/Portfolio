/**
 * Created by amirassad on 12/22/17.
 */

import React from 'react';
import FaGlobe from 'react-icons/lib/fa/globe'

export default function Autograder() {
    return (
        <div>
            <div style={{ color: "#1E90FF" }}>
                <h3>Autograder, UCSD — Full Stack Web Developer</h3>
                <h4>January 2016 – September 2017</h4>
            </div>
            <ul style= {{ listStyleType: "disc" }}>
                <li>
                    Tasked with managing autograder.ucsd.edu, a website used by 2000+ UCSD CS students to facilitate student-tutor queues and online management of homework grading
                </li>
                <li>
                    Integrated <a href="https://theory.stanford.edu/~aiken/moss/" target="_blank" rel="noopener noreferrer">Moss</a> (Measure of software similarity) into Autograder, designed a user-friendly  interface replacing old Bash scripts and reduced the time to get the Moss results by more than 50%
                </li>
                <li>
                    Implemented Email notification functionality for students working on projects
                </li>
                <li>
                    Implemented Displaying student & tutor reviews on personal accounts
                </li>
                <li>
                    Tools used: <b>Java, JavaScript, Play Framework, Intellij IDEA</b>
                </li>

            </ul>

            <p className="buttons" id="bodyButton">
                <a className="btn btn-primary" href="https://autograder.ucsd.edu/help" target="_blank" rel="noopener noreferrer"><FaGlobe/> Visit Autograder</a>
            </p>
        </div>
    )
}
