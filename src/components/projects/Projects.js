/**
 * Created by amirassad on 12/16/17.
 */

import React from 'react';
import { Row } from 'react-bootstrap';

import PortfolioGenerator from '../generator/PortfolioGenerator';
import Autograder from './Autograder';
import Sportify from './Sportify';
import ArtCollection from './ArtCollection';

const AUTO_BASE_DIR = "files/autograder/";
const SPORTIFY_BASE_DIR = "files/sportify/";
const ART_BASE_DIR = "files/artCollection/";


function getModalInfo() {
    return {
        Autograder: {
            modalName: "Autograder",
            id: "auto",
            logo: AUTO_BASE_DIR + "autograder.png",
            gallery: [AUTO_BASE_DIR + 'LabCheckoff.png', AUTO_BASE_DIR + 'TutorQueueStats1.png',
                AUTO_BASE_DIR + 'TutorQueueStats2.png', AUTO_BASE_DIR + 'WelcomePage.png',
                AUTO_BASE_DIR + 'TutorQueue.png'],
            getBody: () => <Autograder/>
        },
        Sportify: {
            modalName: "Sportify",
            id: "sport",
            logo: SPORTIFY_BASE_DIR + "sportify.png",
            gallery: [SPORTIFY_BASE_DIR + "activityList.jpg", SPORTIFY_BASE_DIR + "createActivity.jpg",
                SPORTIFY_BASE_DIR + "login.jpg", SPORTIFY_BASE_DIR + "signup.jpg"],
            getBody: () => <Sportify/>
        },
        ArtCollection: {
            modalName: "Art Collection",
            id: "ArtCollection",
            logo: ART_BASE_DIR + "artcollectionlogo.jpg",
            getBody: () => <ArtCollection/>
        }
    };
}


export default function Projects () {
    return (
        <div>
            <div className="header">
                <h2 className="title">Projects</h2>
            </div>
            <Row>
                <div>
                    <PortfolioGenerator modalInfo={ getModalInfo() }/>
                </div>
            </Row>
        </div>

    );
}
