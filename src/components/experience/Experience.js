/**
 * Created by amirassad on 12/16/17.
 */

import React from 'react';
import { Row } from 'react-bootstrap';

import PortfolioGenerator from '../generator/PortfolioGenerator';
import Tutoring from './experiences/Tutoring';

const BASE_DIR  = "files/experience/";

function getModalInfo(){
    return {
        ServiceNow: {
            modalName: "ServiceNow -- Software Engineering Intern",
            id: "snow",
            logo: BASE_DIR + 'servicenowlogo.png',
            gallery: [BASE_DIR + 'Presentation.png'],
        },
        Tutoring: {
            modalName: "CSE tutor",
            id: "tutor",
            logo: BASE_DIR + 'tutoring.png',
            getBody: () => <Tutoring/>
        }
    }

}

export default function Experience () {
    return (
        <div>
            <div className="header">
                <h2 className="title">EXPERIENCE</h2>
            </div>
            <Row>
                <div>
                    <PortfolioGenerator modalInfo={ getModalInfo() }/>
                </div>
            </Row>
        </div>

    );
}
