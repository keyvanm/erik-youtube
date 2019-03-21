import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import SiteHeader from './components/SiteHeader';
import VideoPage from './components/VideoPage';
import { Switch, Route } from 'react-router';
import axios from 'axios';



class App extends Component {
  state = { data: [] }

  getData = (search) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        key: 'AIzaSyAaI00g4VFIr0rzuwwhcIQ0LngyECQtk58',
        'maxResults': '25',
        'part': 'snippet',
        'q': search,
        'type': 'video'
      }
    }).then(results => this.setState({ data: results.data.items }))
  }

  search = input => {
    this.getData(input)
  }

  componentDidMount() {
    this.getData('starwars');
  }
  render() {
    return (
      <div>
        <SiteHeader search={this.search} />
        <Container className="main-container">
          <Switch>
            <Route path="/video/:videoId" render={(props) => <VideoPage data={this.state.data} {...props} />} />
            <Route exact path="/" component={Container} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
