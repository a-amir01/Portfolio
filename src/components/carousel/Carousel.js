/**
 * Created by amirassad on 12/21/17.
 */

import React from 'react';
import { Carousel } from 'react-bootstrap';

import './carousel.css';

class ExperienceCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            direction: null
        }
    }

    componentDidMount(){
        this.setState({ mounted: true });
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    carousel() {
        const { gallery } = this.props;

        const carouselItems = gallery ? gallery.map(pic => {
            return (

                <Carousel.Item key={ pic }>
                    <div className="zoom">
                        <img className="img-responsive" style={{ display: "block", margin: "0 auto"}}
                             ref='zoom' width="auto" height="auto" alt="900x500" src={ pic } />
                    </div>
                </Carousel.Item>
            );
        })
        : null;

        return gallery ?
                    <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={ this.handleSelect.bind(this) }>
                        { carouselItems }
                    </Carousel>
                : null
    }

    render() {
        return (
            <div>
                {
                    this.state.mounted === true ? this.carousel() : null
                }
            </div>
        );
    }
}

export default ExperienceCarousel;