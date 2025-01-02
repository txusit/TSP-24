// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import about from '../../assets/images/event/about.jpg';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section border-top">
          <Container>
            <Card className="rounded shadow border-0 bg-light overflow-hidden">
              <Row className="g-0 align-items-center">
                <Col lg="6">
                  <img src={about} className="rounded img-fluid" alt="" />
                </Col>

                <Col lg="6">
                  <CardBody className="section-title p-md-5">
                    <h4 className="title mb-4">Overview</h4>
                    <p className="text-muted para-desc mb-0">
                      Texas Stock Pitch Competition, TSP, is the largest stock
                      pitch competition in the southern United States. It allows
                      undergraduate students from across the nation to
                      demonstrate their proficiency in investment research,
                      valuation, and presentation to a panel of industry
                      professionals from investment banks, private equity firms,
                      hedge funds, and more. In addition, TSP provides
                      competitors a chance to earn up to ten thousand dollars in
                      prize money.
                    </p>
                    <div className="mt-4 pt-2">
                      <Link
                        to="/page-about"
                        className="btn btn-outline-primary"
                      >
                        Read More <i className="mdi mdi-chevron-right"></i>
                      </Link>
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
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
      </React.Fragment>
    );
  }
}

export default About;
