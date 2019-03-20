import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import SiteHeader from './components/SiteHeader';
import VideoPage from './components/VideoPage';
import { Switch, Route } from 'react-router';



class App extends Component {
  render() {
    return (
      <div>
        <SiteHeader />
        <Container className="main-container">
          <Switch>
            <Route path="/video/:videoId" component={VideoPage} />
            <Route exact path="/" component={Container} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
