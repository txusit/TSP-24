import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Images
import logolight from '../../assets/images/logo-light.png';
import logodark from '../../assets/images/logo-dark.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/page-about' },
        { title: 'Contact', link: '/page-contact' },
      ],
      grid2: [
        { title: 'USIT', link: '/external-usit' },
        { title: 'USIT Foundation', link: '/external-foundation' },
        { title: 'USIT QMI', link: '/external-qmi' },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? 'footer bg-light' : 'footer'}>
          <Container>
            <Row>
              <Col
                lg="6"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="#" className="logo-footer">
                  <img
                    src={this.props.isLight ? logodark : logolight}
                    height="24"
                    alt=""
                  />
                </Link>
                <ul
                  className={
                    this.props.isLight
                      ? 'list-unstyled social-icon social mx-lg-4 mb-0 d-inline-block'
                      : 'list-unstyled social-icon foot-social-icon mx-lg-4 mb-0 d-inline-block'
                  }
                >
                  <li className="list-inline-item me-1">
                    <Link
                      to="/external-instagram"
                      className="rounded align-bottom"
                    >
                      <FeatherIcon
                        icon="instagram"
                        className="fea icon-sm fea-social"
                      />
                    </Link>
                  </li>
                </ul>
                <p className={this.props.isLight ? 'mt-4 text-muted' : 'mt-4'}>
                  The University Securities Investment Team (USIT) was founded
                  in 2010 by Forrest Wilkinson and Harvey Powers to address a
                  need at UT for comprehensive investing teaching. USIT’s
                  mission was and remains the engagement of students in an
                  educational and interactive atmosphere that promotes personal,
                  occupational, and academic growth through active securities
                  investing.
                </p>
              </Col>

              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-4 pt-2 pt-sm-0 offset-lg-2"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? 'text-dark footer-head'
                      : 'text-light footer-head'
                  }
                >
                  Pages
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? 'text-muted' : 'text-foot'
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>{' '}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="2"
                md="4"
                xs="12"
                className="mt-4 mt-sm-4 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? 'text-dark footer-head'
                      : 'text-light footer-head'
                  }
                >
                  Useful Links
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? 'text-muted' : 'text-foot'
                        }
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
        <footer className="footer footer-bar">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm="6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © 2024-2025 University Securities Investment Team.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
