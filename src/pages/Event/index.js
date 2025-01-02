// React Basic and Bootstrap
import React, { Component } from 'react';

// Import Generic components
import Section from './section';
import About from './About';
import Speakers from './Speakers';
import Schedule from './Schedule';

class Index extends Component {
  componentDidMount = async () => {
    document.body.classList = '';
    const topMenuElement = await getElementByIdAsync('top-menu');
    topMenuElement.classList.add('nav-light');
    document.getElementById('applyButton').className = 'btn btn-light';
    window.addEventListener('scroll', this.scrollNavigation, true);
  };
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
      document.getElementById('applyButton').className = 'btn btn-primary';
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
      document.getElementById('applyButton').className = 'btn btn-light';
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <Section />

        {/* About */}
        <About />

        {/* Speakers */}
        <Speakers />

        {/* Schedule */}
        <Schedule />
      </React.Fragment>
    );
  }
}

const getElementByIdAsync = (id) =>
  new Promise((resolve) => {
    const getElement = () => {
      const element = document.getElementById(id);
      if (element) {
        resolve(element);
      } else {
        requestAnimationFrame(getElement);
      }
    };
    getElement();
  });

export default Index;
