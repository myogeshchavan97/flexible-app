import React from 'react';
import Main from './components/Main';

const HomePage = () => (
  <React.Fragment>
    <p>This is Home page content</p>
  </React.Fragment>
);

const ContactPage = () => (
  <React.Fragment>
    <p>This is Contact page content</p>
  </React.Fragment>
);

const AboutPage = () => (
  <React.Fragment>
    <p>This is About page content</p>
  </React.Fragment>
);

class App extends React.Component {
  render() {
    const data = [
      {
        label: 'Home',
        content: <HomePage />
      },
      {
        label: 'Contact',
        content: <ContactPage />
      },
      {
        label: 'About',
        content: <AboutPage />
      }
    ];
    return (
      <div>
        <Main data={data} showOnTop={false} />
      </div>
    );
  }
}

export default App;
