import React, { Component } from 'react';
import './App.css';
import { Container, Grid } from 'semantic-ui-react';
import SiteHeader from './components/SiteHeader';
import ResponsiveEmbed from 'react-responsive-embed';


class App extends Component {
  render() {
    return (
      <div>
        <SiteHeader />
        <Container>
          <Grid>
            <Grid.Column width={11}>
              <ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' allowFullScreen />
            </Grid.Column>
            <Grid.Column width={5}>
              
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
