/**
 * Created by amirassad on 12/16/17.
 */

import React from 'react';
import { Col, } from 'react-bootstrap';
import _ from "lodash";

import Detail from '../detail/Detail';
import './portfolioGenerator.css';

class PortfolioGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,
            modalName: null
        };

        this.generateExperiences = this.generateExperiences.bind(this);
        this.handleCloseCB = this.handleCloseCB.bind(this);
    }

    // componentDidMount(){
    //     alert("componentDidMount");
    // }
    //
    // componentWillMount() {
    //     alert("componentWillMount");
    // }
    // componentWillUnmount(){
    //     alert("componentWillUnmount");
    // }
    // componentDidUpdate(){
    //     alert("componentDidUpdate()");
    // }
    //
    // componentWillUpdate() {
    //     alert("componentWillUpdate()");
    //
    // }

    handleClick({ modalName, logo, gallery, Tag, getBody }){
        // alert(this.state.showDetail);
        // alert("in detail");alert("modalName");alert(modalName);alert("logo");alert(logo);alert("gallery");alert(gallery);alert("galleryType");alert(galleryType);alert("data");alert(data);
        this.setState({
            showDetail: true,
            modalName: modalName,
            logo: logo,
            gallery: gallery,
            Tag: Tag,
            getBody: getBody

        });
    }

    handleCloseCB(){
        // alert("handle Close");
        this.setState({ showDetail: false, modalName: null });
    }

    generateExperiences(modalInfo){
        const { showDetail, modalName, gallery, Tag, getBody } = this.state;
        return _.map(modalInfo, (fieldConfig, field) =>
            (
                <Col xs={12} sm={8} md={6} key={ field }>

                    <img src={ fieldConfig.logo } style={{ margin: "auto", marginBottom: "100px", display: "block", cursor: "pointer" }}
                         width={400} height={250} onClick={ (e) => this.handleClick(fieldConfig) } alt=""/>
                    {
                        showDetail === true && modalName === fieldConfig.modalName
                            ? <Detail
                                modalName={ modalName }
                                gallery={ gallery }
                                Tag={ Tag }
                                getBodyCB={ getBody }
                                handleCloseCB={  this.handleCloseCB }/>
                            : null
                    }
                </Col>
            )
        );
    }

    render() {
        const { modalInfo } = this.props;
        return (
            <div>
                { this.generateExperiences(modalInfo) }
            </div>
        )
    }
}

export default PortfolioGenerator;
