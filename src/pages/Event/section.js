import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import { Parallax } from "react-parallax";

//CountDown
import Countdown from 'react-countdown-now';

import bgImage from '../../assets/images/event/bannerTry2.png';

// Random component
const Completionist = () => <span>You are good to go!</span>;

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
          className="bg-half-260 d-table w-100"
          style={{
            background: `url(${bgImage}) center center`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className="bg-overlay bg-black bg-gradient"
            style={{ opacity: '0.55' }}
          ></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" className="text-center">
                <div className="title-heading">
                  <h1 className="display-4 title-dark text-white fw-bold mb-3">
                    Texas Stock Pitch
                  </h1>
                  <p className="para-desc title-dark mx-auto text-light">
                    10:30 am CST
                    <br />
                    February 21st, 2026
                  </p>

                  <Row>
                    <Col md="12" className="text-center">
                      <div id="eventdown">
                        <Countdown
                          date={
                            Date.now() +
                            Math.abs(new Date('2026/02/21 10:30') - Date.now())
                          }
                          renderer={renderer}
                        />
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4 pt-2">
                    <Link
                      to={{
                        pathname: '/external-apply-form',
                      }}
                      target="_blank"
                      className="btn btn-success mt-2 me-2"
                    >
                       Apply Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <div className="text-center bg-white p-4">
              <h5 className="text-dark mb-0">
                Competition Date : Feburary 19th, 2023
              </h5>
            </div>
          </div>
        </div> */}
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        {/* </Parallax> */}
      </React.Fragment>
    );
  }
}

export default Section;
