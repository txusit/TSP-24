import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
// import { mdiArrowRightBoldBoxOutline } from '@mdi/js';

// import { Parallax } from 'react-parallax';

//CountDown
import Countdown from 'react-countdown-now';

import bgImage from '../../assets/images/event/bannerTry2.png';

// Random component
const Completionist = () => <span></span>; //replace with countdown complete message

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <React.Fragment>
        <div className="count-down">
          <span className="count-number">{days}</span>
          <span className="count-head position-relative d-block">Days</span>
        </div>
        <div className="count-down">
          <span className="count-number">{hours}</span>
          <span className="count-head position-relative d-block">Hours</span>
        </div>{' '}
        <div className="count-down">
          <span className="count-number">{minutes}</span>
          <span className="count-head position-relative d-block">Minutes</span>
        </div>{' '}
        <div className="count-down">
          <span className="count-number">{seconds}</span>
          <span className="count-head position-relative d-block">Seconds</span>
        </div>
      </React.Fragment>
    );
  }
};

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 w-100 d-table"
          style={{ background: `url(${bgImage}) center center` }}
        >
          <div
            className="bg-overlay bg-black bg-gradient"
            style={{ opacity: '0.50' }}
          ></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" className="text-center">
                <div className="title-heading">
                  {/* <h4 className="text-success mb-3">11th October, 2020</h4> */}
                  <h1 className="display-4 title-dark text-white fw-bold mb-3">
                    2024 Texas Charity Pitch
                  </h1>
                  <h4 className="para-desc title-dark mx-auto text-light">
                    Building the Foundation for the Future
                  </h4>
                  <br></br>
                  <Row>
                    <Col md="12" className="text-center">
                      <div id="eventdown">
                        <Countdown
                          date={
                            Date.now() +
                            Math.abs(new Date('2024/11/09 08:00') - Date.now())
                          }
                          renderer={renderer}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/*<div className="mt-4 pt-2">
                    <Link to="/external-apply-form" target="_blank" className="btn btn-primary mt-2 me-2">
                      Apply to Pitch
                    </Link>
                        </div>*/}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <div className="text-center bg-white p-4">
              <h5 className="text-dark mb-0">Competition Day : November 9th, 2024</h5>
            </div>
          </div>
        </div>
        {/* </Parallax> */}
      </React.Fragment>
    );
  }
}

export default Section;