// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Collapse,
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap';

//Import components
import PageBreadcrumb from '../../components/Shared/PageBreadcrumb';
import SectionTitle from '../../components/Shared/SectionTitle';
import TeamBox from '../../components/Shared/TeamBox';

// import images
// TODO: CHANGE IMAGES
import about from '../../assets/images/about.jpg';

// Modal Video
// import ModalVideo from "react-modal-video";
// import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import Cta from '../Event/Cta';

class PageAboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: 'Stock Pitch', link: '/index' },
        { id: 2, name: 'About' },
      ],
      isOpen: false,
      collapse1: true,
      col1: true,
      col2: false,
      col3: false,
      col4: false,
    };
    // this.openModal = this.openModal.bind(this);
    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col4 = this.t_col4.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col4: false,
      col1: false,
      col3: false,
    });
  }
  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col1: false,
      col2: false,
      col4: false,
    });
  }
  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col1: false,
      col2: false,
      col3: false,
    });
  }

  componentDidMount() {
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb title="About Us" pathItems={this.state.pathItems} />
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

        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="position-relative">
                  <img
                    src={about}
                    className="rounded img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>
              </Col>

              <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title ms-lg-4">
                  <h4 className="title mb-4">Texas Stock Pitch</h4>
                  <p className="text-muted">
                    Texas Stock Pitch Competition, TSP, is the largest stock
                    pitch competition in the southern United States. It allows
                    undergraduate students from across the nation to demonstrate
                    their proficiency in investment research, valuation, and
                    presentation to a panel of industry professionals from
                    investment banks, private equity firms, hedge funds, and
                    more. In addition, TSP provides competitors a chance to earn
                    up to ten thousand dollars in prize money.
                  </p>
                  {/* <Link to="#" className="btn btn-primary mt-3">Buy Now <i className="uil uil-angle-right-b"></i></Link> */}
                </div>
              </Col>
            </Row>
          </Container>

          {/* criteria */}
          <Container className="mt-100 mt-60">
            <SectionTitle
              title="Pitch Criteria"
              desc="Keep these guidelines in mind when choosing a security."
            />
            <Row className="align-items-center mx-5 px-5">
              <div className="faq-content me-lg-5">
                <div className="accordion" id="accordionExample">
                  <Card className="border-0 rounded mb-2">
                    <Link
                      to="#"
                      onClick={this.t_col1}
                      className={
                        this.state.col1
                          ? 'faq position-relative text-primary'
                          : 'faq position-relative text-dark'
                      }
                    >
                      <CardHeader
                        className="border-0 bg-light p-3 pe-5"
                        id="headingOne"
                      >
                        <h6 className="title mb-0">
                          {' '}
                          Security Limitations
                          <i
                            className={
                              this.state.col1
                                ? 'mdi mdi-chevron-up float-end'
                                : 'mdi mdi-chevron-down float-end'
                            }
                          ></i>
                        </h6>
                      </CardHeader>
                    </Link>
                    <Collapse isOpen={this.state.col1}>
                      <CardBody>
                        <p className="text-muted mb-0 faq-ans">
                          <ul className="">
                            <li>
                              The security must be a listed on{' '}
                              <span className="text-primary">
                                <b>NYSE, NYSE AMEX, or NASDAQ</b>
                              </span>
                              .
                            </li>
                            <li>
                              Share Price must be greater than{' '}
                              <span className="text-primary">
                                <b>$2.00</b>
                              </span>{' '}
                              .
                            </li>
                            <li>
                              Market cap must be greater than{' '}
                              <span className="text-primary">
                                <b>$500M</b>
                              </span>
                              .
                            </li>
                            <li>
                              3-month average daily trading volume must be
                              greater than{' '}
                              <span className="text-primary">
                                <b>100,000 shares</b>
                              </span>{' '}
                              .
                            </li>
                            <li>
                              Must be a{' '}
                              <span className="text-primary">
                                <b>common or preferred equity</b>
                              </span>
                              {''}
                              .<br />
                              ETFs, ETNs, closed-end funds, derivatives, debt
                              instruments, and cryptocurrency are not allowed.
                            </li>
                            <li>
                              Pair trades are acceptable as long as each
                              individual security meets the{' '}
                              <span className="text-primary">
                                <b>above requirements</b>
                              </span>{' '}
                              .
                            </li>
                            <li>
                            Teams must produce an original work and may not use any pitch that has been used in any additional academic or private setting.
                            </li>
                          </ul>
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>

                  <Card className="border-0 rounded mb-2">
                    <Link
                      to="#"
                      onClick={this.t_col2}
                      className={
                        this.state.col2
                          ? 'faq position-relative text-primary'
                          : 'faq position-relative text-dark'
                      }
                    >
                      <CardHeader
                        className="border-0 bg-light p-3 pe-5"
                        id="headingTwo"
                      >
                        <h6 className="title mb-0">
                          {' '}
                          Team Specifications
                          <i
                            className={
                              this.state.col2
                                ? 'mdi mdi-chevron-up float-end'
                                : 'mdi mdi-chevron-down float-end'
                            }
                          ></i>
                        </h6>
                      </CardHeader>
                    </Link>
                    <Collapse isOpen={this.state.col2}>
                      <CardBody>
                        <p className="text-muted mb-0 faq-ans">
                          <ul className="">
                            <li>
                              At least{' '}
                              <span className="text-primary">
                                <b>half</b>
                              </span>{' '}
                              of the team must be comprised of{' '}
                              <span className="text-primary">
                                <b>underclassmen (freshmen/sophomores)</b>
                              </span>{' '}
                              when pitching.
                            </li>
                            <li>
                              All teams must have{' '}
                              <span className="text-primary">
                                <b>2-4 students</b>
                              </span>{' '}
                              from the{' '}
                              <span className="text-primary">
                                <b>same university</b>
                              </span>{' '}
                              .
                            </li>
                          </ul>
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>

                  <Card className="border-0 rounded mb-2">
                    <Link
                      to="#"
                      onClick={this.t_col3}
                      className={
                        this.state.col3
                          ? 'faq position-relative text-primary'
                          : 'faq position-relative text-dark'
                      }
                    >
                      <CardHeader
                        className="border-0 bg-light p-3 pe-5"
                        id="headingTwo"
                      >
                        <h6 className="title mb-0">
                          {' '}
                          Using Subjective Arguments
                          <i
                            className={
                              this.state.col3
                                ? 'mdi mdi-chevron-up float-end'
                                : 'mdi mdi-chevron-down float-end'
                            }
                          ></i>
                        </h6>
                      </CardHeader>
                    </Link>
                    <Collapse isOpen={this.state.col3}>
                      <CardBody>
                        <p className="text-muted mb-0 faq-ans">
                          <ul className="">
                            <li>
                              Avoid relying on{' '}
                              <span className="text-primary">
                                <b>emotional appeals</b>
                              </span>{' '}
                              when pitching.
                            </li>
                            <li>
                              Motivation or personal attatchment to a subject
                              matter is fine, but focus on{' '}
                              <span className="text-primary">
                                <b>analytical and concrete</b>
                              </span>{' '}
                              points.
                            </li>
                          </ul>
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>

                  <Card className="border-0 rounded mb-2">
                    <Link
                      to="#"
                      onClick={this.t_col4}
                      className={
                        this.state.col4
                          ? 'faq position-relative text-primary'
                          : 'faq position-relative text-dark'
                      }
                    >
                      <CardHeader
                        className="border-0 bg-light p-3 pe-5"
                        id="headingfive"
                      >
                        <h6 className="title mb-0">
                          {' '}
                          Technical Specifications
                          <i
                            className={
                              this.state.col4
                                ? 'mdi mdi-chevron-up float-end'
                                : 'mdi mdi-chevron-down float-end'
                            }
                          ></i>
                        </h6>
                      </CardHeader>
                    </Link>
                    <Collapse isOpen={this.state.col4}>
                      <CardBody>
                        <p className="text-muted mb-0 faq-ans">
                          <ul className="">
                            <li>
                              Final presentations should be in{' '}
                              <span className="text-primary">
                                <b>Standard (4:3) PPT and PDF Format</b>
                              </span>{' '}
                              only.{' '}
                            </li>
                            <li>
                              Resumes must be in{' '}
                              <span className="text-primary">
                                <b>One-Page, PDF Format</b>
                              </span>{' '}
                              only.
                            </li>
                            <li>
                              The One-Pager must be in{' '}
                              <span className="text-primary">
                                <b>PDF Format</b>
                              </span>{' '}
                              only.
                            </li>
                            <li>
                                Teams will have 12 minutes to present with 7 minutes of Q&A in the preliminary rounds and 10 minutes of Q&A in the finals.
                            </li>
                          </ul>
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/*Optional Pitch Thesis Criteria*/}
        <section>
          <Container>
            <SectionTitle
              title="Required Pitch Thesis Submission"
              desc="Keep these guidelines in mind when deciding to submit your individual pitch thesis"
            />
            <Row className="align-items-center mx-5 px-5">
              <div className="faq-content me-lg-5">
                <div className="accordion" id="accordionExample">
                  <Card className="border-0 rounded mb-2">
                    <Link
                      to="#"
                      onClick={this.t_col1}
                      className={
                        this.state.col1
                          ? 'faq position-relative text-primary'
                          : 'faq position-relative text-dark'
                      }
                    >
                      <CardHeader
                        className="border-0 bg-light p-3 pe-5"
                        id="headingOne"
                      >
                        <h6 className="title mb-0">
                          {' '}
                          Instructions
                          <i
                            className={
                              this.state.col1
                                ? 'mdi mdi-chevron-up float-end'
                                : 'mdi mdi-chevron-down float-end'
                            }
                          ></i>
                        </h6>
                      </CardHeader>
                    </Link>
                    <Collapse isOpen={this.state.col1}>
                      <CardBody>
                        <p className="text-muted mb-0 faq-ans">
                          Due to limited capacity, all interested teams are required to submit a one-page overview
                          of an investment thesis. *Note: the thesis may change between your one-pager
                          submission and competition day, but the security should remain the same. Submissions will
                          be reviewed on a rolling basis, after which teams will be notified whether they have been
                          chosen to compete. Feel free to begin working on the one-page submission in advance of
                          the January 2nd application date. This thesis submission would be open on a rolling basis
                          until applications close on {' '} 
                          <span className="text-primary">
                            <b>Sunday, February 8th at 11:59 PM CST</b>
                          </span>{' '}
                          in{' '}
                          <span className="text-primary">
                            <b>PDF</b>
                          </span>{' '}
                          format to{' '}
                          <span className="text-primary">
                            <b>president@usiteam.org</b>
                          </span>
                          {' '}via the form linked above.
                        </p>
                        <br></br>
                        <p className="text-muted mb-0 faq-ans">
                          This is a great way for top investment firms and money
                          managers to see your work on an individualized basis,
                          in addition to your resume. As many firms use Texas
                          Stock Pitch to identify promising intern candidates,
                          <span className="text-primary">
                            {' '}
                            <b>
                              it will provide our sponsors with another
                              dimension with which to evaluate students
                            </b>
                          </span>
                          .
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
{/*
                  <Card className="border-0 rounded mb-2">
                    <Link
                      to="#"
                      onClick={this.t_col2}
                      className={
                        this.state.col2
                          ? 'faq position-relative text-primary'
                          : 'faq position-relative text-dark'
                      }
                    >
                      <CardHeader
                        className="border-0 bg-light p-3 pe-5"
                        id="headingTwo"
                      >
                        <h6 className="title mb-0">
                          {' '}
                          Pitch Thesis Specifications
                          <i
                            className={
                              this.state.col2
                                ? 'mdi mdi-chevron-up float-end'
                                : 'mdi mdi-chevron-down float-end'
                            }
                          ></i>
                        </h6>
                      </CardHeader>
                    </Link>
                    <Collapse isOpen={this.state.col2}>
                      <CardBody>
                        <p className="text-muted mb-0 faq-ans">
                          Please adhere to the following guidelines when
                          creating your submission:
                          <ul className="">
                            <li>
                              Include your{' '}
                              <span className="text-primary">
                                <b>name</b>
                              </span>
                              ,{' '}
                              <span className="text-primary">
                                <b>year</b>
                              </span>
                              ,{' '}
                              <span className="text-primary">
                                <b>contact information</b>
                              </span>
                              , and{' '}
                              <span className="text-primary">
                                <b>school affiliation</b>
                              </span>
                            </li>
                            <li>
                              Submissions must be{' '}
                              <span className="text-primary">
                                <b>no longer</b>
                              </span>{' '}
                              than a page
                            </li>
                            <li>
                              All other formatting is up to the competitor's
                              discretion
                            </li>
                          </ul>
                          Content-wise, submissions should be similar to TSP
                          executive summaries. However, the asset you pitch does
                          not need to adhere to any of the TSP rules -- in other
                          words, feel free to let your imagination run wild and
                          share any interesting thesis idea that you have
                          conviction in.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card> */}
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <br></br>
        <section className="section bg-light">
          {/* <Container>
              Render Section Title
              <SectionTitle
                title="Winning Charities"
                desc="Use these charities as references, but do not pitch them."
              />

              <Row>
                teambox
                <TeamBox candidates={this.state.winners} isTransparent={false} />
              </Row>
            </Container> */}

          {/* TODO: CHANGE CTA TO NICE BANNER */}
          {/* Cta */}
          {/* <Cta /> */}

          {/* <Container>
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title">
                  <h4 className="title mb-4">
                    Send a ripple through the world.
                  </h4>
                  <p className="text-muted para-desc mx-auto">
                    Pitch a <span className="text-primary fw-bold">Stock.</span>{' '}
                    Make an{' '}
                    <span className="text-primary fw-bold">Impression.</span>{' '}
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/external-apply-form"
                      target="_blank"
                      className="btn btn-lg btn-primary mt-2 me-2"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container> */}
        </section>
      </React.Fragment>
    );
  }
}
export default PageAboutUs;
