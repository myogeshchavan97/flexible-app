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

const DownloadsPage = () => (
  <React.Fragment>
    <p>This is Downloads page content</p>
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
        label: 'Downloads',
        content: <DownloadsPage />
      },
      {
        label: 'About',
        content: <AboutPage />
      }
    ];

    const isPremiumUser = false;
    return (
      <div>
        <Main
          data={data}
          showOnTop={true}
          menuToDisable={!isPremiumUser ? 'Downloads' : ''}
        />
      </div>
    );
  }
}

export default App;
