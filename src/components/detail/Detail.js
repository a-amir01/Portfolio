/**
 * Created by amirassad on 12/21/17.
 */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import ExperienceCarousel from '../carousel/Carousel';

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            mounted: false
        };

        this.close = this.close.bind(this);
    }

    close(handleCloseCB) {
        // alert("close");
        this.setState({ showModal: false }, () => { handleCloseCB() });
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


    render() {
        const { modalName, gallery, Tag, getBodyCB, handleCloseCB } = this.props;
        // alert(data);
        // alert("in detail");alert("modalName");alert(modalName);alert("logo");alert(logo);alert("gallery");alert(gallery);alert("galleryType");alert(galleryType);alert("data");alert(data);

        return (
            <div>
                <Modal bsSize="large"  aria-labelledby="contained-modal-title-lg" show={ this.state.showModal } onHide={ (e) => this.close(handleCloseCB) }>
                    <Modal.Header  closeButton>
                        <Modal.Title>{ modalName }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <ExperienceCarousel gallery={ gallery } Tag={ Tag }/>
                            {/*<div dangerouslySetInnerHTML={{ __html: data }} />*/}
                            { getBodyCB ? getBodyCB() : null }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={ (e) => this.close(handleCloseCB) }>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>


        );
    }
}



export default Detail;