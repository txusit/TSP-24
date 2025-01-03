// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Components
import SectionTitle from '../../components/Shared/SectionTitle';
// import TeamBox from '../../components/Shared/TeamBox';

//Import Images
import shawlogo from '../../assets/images/client/deshaw.png';
import point72Logo from '../../assets/images/client/point72.PNG';
import sigLogo from '../../assets/images/client/sig.JPG';
import yacktmanLogo from '../../assets/images/client/yacktman.PNG';
import blackstonelogo from '../../assets/images/client/blackstone.png';
import citadellogo from '../../assets/images/client/Citadel_Logo_File.jpg';


class Speakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // candidates: [
      //   {
      //     id: 1,
      //     image: image1,
      //     name: "Ronny Jofra",
      //     designation: "Organizer",
      //     link: "",
      //     socialIds: [
      //       { icon: "facebook", link: "#" },
      //       { icon: "instagram", link: "#" },
      //       { icon: "twitter", link: "#" },
      //       { icon: "linkedin", link: "#" },
      //     ],
      //   },
      //   {
      //     id: 2,
      //     image: image4,
      //     name: "Micheal Carlo",
      //     designation: "Event Manager",
      //     link: "",
      //     socialIds: [
      //       { icon: "facebook", link: "#" },
      //       { icon: "instagram", link: "#" },
      //       { icon: "twitter", link: "#" },
      //       { icon: "linkedin", link: "#" },
      //     ],
      //   },
      //   {
      //     id: 3,
      //     image: image3,
      //     name: "Aliana Rosy",
      //     designation: "Motivator",
      //     link: "",
      //     socialIds: [
      //       { icon: "facebook", link: "#" },
      //       { icon: "instagram", link: "#" },
      //       { icon: "twitter", link: "#" },
      //       { icon: "linkedin", link: "#" },
      //     ],
      //   },
      //   {
      //     id: 4,
      //     image: image2,
      //     name: "Sofia Razaq",
      //     designation: "Speaker",
      //     link: "",
      //     socialIds: [
      //       { icon: "facebook", link: "#" },
      //       { icon: "instagram", link: "#" },
      //       { icon: "twitter", link: "#" },
      //       { icon: "linkedin", link: "#" },
      //     ],
      //   },
      // ],
      partners: [
        {
          image: shawlogo,
          alt: 'D. E. Shaw Sponsor',
          //sponsorRank: 'Platinum',
        },
        {
          image: yacktmanLogo,
          alt: 'Yacktman Sponsor',
          //sponsorRank: 'Platinum',
        },
        {
          image: point72Logo,
          alt: 'Citadel Sponsor',
          //sponsorRank: 'Gold',
        },
        {
          image: citadellogo,
          alt: 'Citadel Sponsor',
          //sponsorRank: 'Gold',
        },
        // {
        //   image: sigLogo,
        //   alt: 'Citadel Sponsor',
        //   //sponsorRank: 'Silver',
        // },
        // {
        //   image: blackstonelogo,
        //   alt: 'Citadel Sponsor',
        //   //sponsorRank: 'Silver',
        // },
        // {
        //   image: adventLogo,
        //   alt: 'Citadel Sponsor',
        //   sponsorRank: 'Bronze',
        // },
        // { image: img5 },
        // { image: img6 },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* <Container> */}
        {/* section title */}
        {/* <SectionTitle
              title="Our Speakers"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect."
            /> */}

        {/* <Row> */}
        {/* teambox */}
        {/* <TeamBox candidates={this.state.candidates} />
            </Row>
          </Container> */}
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Event Sponsors"
              /*to delete the landrick, change SectionTitle*/
              desc="People who made this competition possible."
            />

            {/* Partners */}
            <Row className="justify-content-center">
              {this.state.partners.map((partner, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  key={key}
                  className="text-center mt-4 pt-2"
                >
                  <img
                    src={partner.image}
                    className="avatar"
                    style={{ maxHeight: '35px' }}
                    alt={partner.alt}
                  />
                 {/* <h6 className="mt-2 text-muted">{partner.sponsorRank}</h6> */}
                </Col>
              ))}
            </Row>
          </Container>
        </section>
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
      </React.Fragment>
    );
  }
}

export default Speakers;
