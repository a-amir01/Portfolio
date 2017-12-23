/**
 * Created by amirassad on 12/22/17.
 */

import React from 'react';

import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaEnvelope from 'react-icons/lib/fa/envelope';

export default function Footer() {
    return (
        <div className="section" id="footer">
            <div className="container">

                <div className="row">

                    <div className="col-sm-6">

                        <p className="social">
                            <a href="https://www.linkedin.com/in/amir-assad-28a602b0" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare/></a>
                            <a href="https://github.com/a-amir01" className="github" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
                            <a href="mailto:amirassad01@gmail.com" className="email"><FaEnvelope/></a>
                            <a href="tel:(805)630-9086" className="phone"><FaPhoneSquare/></a>
                        </p>
                    </div>

                    <div className="col-sm-6">
                        <p>&copy; 2017 Amir Assad. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )

}