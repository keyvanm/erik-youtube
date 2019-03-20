import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import _ from 'lodash';
import './App.css';
import SiteHeader from './components/SiteHeader';
import VideoPage from './components/VideoPage';

class App extends Component {
  render() {
    return (
      <div>
        <SiteHeader />
        <Container className="main-container">
          <VideoPage />
        </Container>
      </div>
    );
  }
}

export default App;
