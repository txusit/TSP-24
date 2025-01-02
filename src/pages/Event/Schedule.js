// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap';
import classnames from 'classnames';

//Import Components
import SectionTitle from '../../components/Shared/SectionTitle';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registration: [
        {
          id: 1,
          title: 'Registration Opens',
          location: '',
          time: '9:00 AM CST',
          day: '16',
          month: 'JAN',
          send: '',
          link: '/external-apply-form',
        },
        // {
        //   id: 2,
        //   title: 'Texas Stock Pitch Information Session',
        //   location: 'Virtual',
        //   time: '6:00 PM - 7:00 PM CST',
        //   day: '25',
        //   month: 'JAN',
        //   send: '',
        //   link: 'https://utexas.zoom.us/j/97538483962',
        // },
        {
          id: 3,
          title: 'Registration Deadline',
          location: '',
          time: '11:59 PM CST',
          day: '4',
          month: 'FEB',
          send: '',
          link: '',
        },
        // {
        //   id: 4,
        //   title: 'Executive Summary & Resumes Due',
        //   location: '',
        //   time: '11:59 PM CST',
        //   day: '13',
        //   month: 'FEB',
        //   send: '',
        //   link: '',
        // },
        {
          id: 5,
          title: 'Evening Reception with Sponsors',
          location: '',
          time: '6:00 PM CST',
          day: '16',
          month: 'FEB',
          send: '',
          link: '',
        },
        {
          id: 6,
          title: 'Competition Day',
          location: '',
          time: '9:00 AM CST',
          day: '17',
          month: 'FEB',
          send: '',
          link: '',
        },
        // {
        //   id: 6,
        //   title: 'Optional Pitch Thesis Submission',
        //   location: '',
        //   time: '5:00 PM CST',
        //   day: '17',
        //   month: 'FEB',
        //   send: 'president@usiteam.org',
        //   link: '',
        // },
        // {
        //   id: 7,
        //   title: 'Networking Dinner and Career Panel',
        //   location: 'TBD',
        //   time: '6:00 PM - 8:30 PM CST',
        //   day: '17',
        //   month: 'FEB',
        //   send: '',
        //   link: '',
        // },
      ],
      competitionday: [
        {
          id: 1,
          title: 'Arrive',
          time: '10:15AM to 10:30AM',
          day: '01',
          // month: 'NOV',
          location: 'William C. Powers Student Activity Center',
        },
        {
          id: 2,
          title: 'Breakfast and Check-In',
          time: '10:30AM to 11:00AM',
          day: '02',
          // month: 'NOV',
          location: 'Room TBD',
        },
        {
          id: 3,
          title: 'Opening Remarks and Speaker',
          time: '11:00AM to 11:45AM',
          day: '03',
          // month: 'NOV',
          location: 'Room TBD',
        },
        {
          id: 4,
          title: 'Preliminary Rounds',
          time: '12:00PM to 02:00PM',
          day: '04',
          // month: 'NOV',
          location: 'Rooms TBD',
        },
        {
          id: 5,
          title: 'Lunch and Speaker',
          time: '02:00PM to 03:30PM',
          day: '05',
          // month: 'NOV',
          location: 'Room TBD',
        },
        {
          id: 6,
          title: 'Announce Finalists and Feedback',
          time: '03:30PM to 04:00PM',
          day: '06',
          // month: 'NOV',
          location: 'Room TBD',
        },
        {
          id: 7,
          title: 'Finals',
          time: '04:00PM to 06:00PM',
          day: '07',
          // month: 'NOV',
          location: 'Room TBD',
        },
      ],
      activeTab: '1',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Event Schedules"
              desc=" A Brief Overview of the Texas Stock Pitch Registration process and weekend"
            />

            <Row className="mt-4 pt-2 justify-content-center">
              <Col lg={8} md={12} className="text-center">
                <Nav
                  pills
                  className="rounded nav-justified flex-column flex-sm-row"
                >
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === '1' },
                        'rounded',
                      )}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      <div
                        className="text-center pt-1 pb-1"
                        style={{ minWidth: '200px' }}
                      >
                        <h6 className="title font-weight-normal mb-0">
                          Registration
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === '2' },
                        'rounded',
                      )}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      <div
                        className="text-center pt-1 pb-1"
                        style={{ minWidth: '200px' }}
                      >
                        <h6 className="title font-weight-normal mb-0">
                          Competition
                        </h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <div className="tab-content" id="pills-tabContent">
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        {this.state.registration.map((show, key) => (
                          <Col lg={6} key={key} className="mt-4 pt-2">
                            <Card className="event-schedule rounded border">
                              <CardBody>
                                <div className="d-flex">
                                  <ul className="date text-center text-primary me-3 mb-0 list-unstyled">
                                    <li className="day fw-bold mb-2">
                                      {show.day}
                                    </li>
                                    <li className="month fw-bold">
                                      {show.month}
                                    </li>
                                  </ul>
                                  <div className="flex-1 content">
                                    <h4>
                                      <Link to="#" className="text-dark title">
                                        {show.title}
                                      </Link>
                                    </h4>
                                    <p className="text-muted location-time">
                                      <span className="text-dark h6">
                                        Time:
                                      </span>{' '}
                                      {show.time}
                                      <br></br>
                                      {show.send != '' ? (
                                        <span className="text-dark h6">
                                          Send To:{' '}
                                        </span>
                                      ) : (
                                        <span></span>
                                      )}
                                      {show.send}
                                      {show.location != '' ? (
                                        <span className="text-dark h6">
                                          Location:{' '}
                                        </span>
                                      ) : (
                                        <br></br>
                                      )}
                                      {show.location}
                                    </p>
                                    {show.link != '' ? (
                                      <Link
                                        to={{
                                          pathname: show.link,
                                        }}
                                        target="_blank"
                                        className="btn btn-sm btn-outline-primary mouse-down"
                                      >
                                        {show.id == 1
                                          ? 'APPLICATION FORM'
                                          : 'JOIN NOW'}
                                      </Link>
                                    ) : (
                                      <span></span>
                                    )}
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        {this.state.competitionday.map((show, key) => (
                          <Col lg={6} key={key} className="mt-4 pt-2">
                            <Card className="event-schedule rounded border">
                              <CardBody>
                                <div className="d-flex">
                                  <ul className="date text-center text-primary me-3 mb-0 list-unstyled">
                                    <li className="day fw-bold mb-2">
                                      {show.day}
                                    </li>
                                    <li className="month fw-bold">
                                      {show.month}
                                    </li>
                                  </ul>
                                  <div className="flex-1 content">
                                    <h4>
                                      <Link to="#" className="text-dark title">
                                        {show.title}
                                      </Link>
                                    </h4>
                                    <p className="text-muted location-time">
                                      <span className="text-dark h6">
                                        Time:
                                      </span>{' '}
                                      {show.time}
                                      <br></br>
                                      {show.location != '' ? (
                                        <span className="text-dark h6">
                                          Location:{' '}
                                        </span>
                                      ) : (
                                        <span></span>
                                      )}
                                      {show.location}
                                    </p>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        {this.state.registration.map((show, key) => (
                          <Col lg={6} key={key} className="mt-4 pt-2">
                            <Card className="event-schedule rounded border">
                              <CardBody>
                                <div className="d-flex">
                                  <ul className="date text-center text-primary me-3 mb-0 list-unstyled">
                                    <li className="day fw-bold mb-2">
                                      {show.day}
                                    </li>
                                    <li className="month fw-bold">
                                      {show.month}
                                    </li>
                                  </ul>
                                  <div className="flex-1 content">
                                    <h4>
                                      <Link to="#" className="text-dark title">
                                        {show.title}
                                      </Link>
                                    </h4>
                                    <p className="text-muted time">
                                      <span className="text-dark h6">
                                        Time:
                                      </span>{' '}
                                      {show.time}
                                    </p>
                                    <Link
                                      to="#tickets"
                                      className="btn btn-sm btn-outline-primary mouse-down"
                                    >
                                      Buy Ticket
                                    </Link>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Schedule;
