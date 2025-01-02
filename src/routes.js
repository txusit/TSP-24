import React from 'react';

//External
const ExternalUsit = React.lazy(() => {
  window.location.replace('https://www.texasusit.org/');
  return null;
});
const ExternalFoundation = React.lazy(() => {
  window.location.replace('https://www.usitfoundation.org/');
  return null;
});
const ExternalQMI = React.lazy(() => {
  window.location.replace('http://www.texasqmi.org/');
  return null;
});
const ExternalInstagram = React.lazy(() => {
  window.location.replace('https://www.instagram.com/texasusit/?hl=en');
  return null;
});
const ExternalMap = React.lazy(() => {
  window.location.replace(
    'https://www.google.com/maps/place/William+C.+Powers+Student+Activity+Center/@30.284868,-97.7389096,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b59b81da169f:0x74d4292e5f6afe63!8m2!3d30.284868!4d-97.7367209',
  );
  return null;
});
const ExternalApplyForm = React.lazy(() => {
  window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSff9OXNqkfArRupro3RwbUHpXNlslfucMBexfBttviyBPlbgw/viewform');
  return null;
});

//Special
const PageComingSoon = React.lazy(() =>
  import('./pages/Special/PageComingSoon'),
);
const PageError = React.lazy(() => import('./pages/Special/PageError'));
const PageMaintenance = React.lazy(() =>
  import('./pages/Special/PageMaintenance'),
);

// Import all components
const Forums = React.lazy(() => import('./pages/Forums/index'));
const Event = React.lazy(() => import('./pages/Event/index'));

const PageAboutUs = React.lazy(() => import('./pages/About/PageAboutUs'));

//Utility
const PagePrivacy = React.lazy(() => import('./pages/Utility/PagePrivacy'));
const PageTerms = React.lazy(() => import('./pages/Utility/PageTerms'));

//Contact
const PageContact = React.lazy(() => import('./pages/Contact/PageContact'));

// forums
const Overview = React.lazy(() => import('./pages/Forums/Subpages/overview'));
const ForumTopic = React.lazy(() =>
  import('./pages/Forums/Subpages/ForumTopic'),
);
const ForumsComments = React.lazy(() =>
  import('./pages/Forums/Subpages/ForumsComments'),
);

const routes = [
  //routes without Layout

  //External pages
  {
    path: '/external-usit',
    component: ExternalUsit,
  },
  {
    path: '/external-foundation',
    component: ExternalFoundation,
  },
  {
    path: '/external-qmi',
    component: ExternalQMI,
  },
  {
    path: '/external-instagram',
    component: ExternalInstagram,
  },
  {
    path: '/external-map',
    component: ExternalMap,
  },
  {
    path: '/external-apply-form',
    component: ExternalApplyForm,
    // component: PageComingSoon
  },

  //Special Pages
  {
    path: '/page-comingsoon',
    component: PageComingSoon,
    isWithoutLayout: true,
  },
  { path: '/page-error', component: PageError, isWithoutLayout: true },
  {
    path: '/page-maintenance',
    component: PageMaintenance,
    isWithoutLayout: true,
  },

  // Landings
  { path: '/index-forums', component: Forums, isTopbarDark: true },
  { path: '/index-event', component: Event },

  { path: '/page-about', component: PageAboutUs, isTopbarDark: true },

  //Utility
  { path: '/page-terms', component: PageTerms, isTopbarDark: true },
  { path: '/page-privacy', component: PagePrivacy, isTopbarDark: true },

  //Page Contact
  { path: '/page-contact', component: PageContact, isTopbarDark: true },

  // forums
  { path: '/forums', component: Overview, isTopbarDark: true },
  { path: '/forums-topic', component: ForumTopic, isTopbarDark: true },
  { path: '/forums-comments', component: ForumsComments, isTopbarDark: true },

  //Index Main (Event)
  { path: '/index', component: Event, isTopbarDark: false },

  //Index root
  { path: '/', component: Event, isTopbarDark: false, exact: true }, // This is what I changed
  { component: PageError, isWithoutLayout: true, exact: false },
];

// { path='/submit-application'; component={()=>{
//   window.location.href = 'https://example.com/1234';
//   return null;
// }}}

export default routes;
