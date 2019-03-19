import React, { Component } from 'react';
import { Container, Grid, Item, Image } from 'semantic-ui-react';
import ResponsiveEmbed from 'react-responsive-embed';
import _ from 'lodash';

import './App.css';

import SiteHeader from './components/SiteHeader';




class App extends Component {
  render() {
    return (
      <div>
        <SiteHeader />
        <Container className="main-container">
          <Grid>
            <Grid.Column width={11}>
              <ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' allowFullScreen />
            </Grid.Column>
            <Grid.Column width={5}>
              <Item.Group>
                {
                  _.times(10, () => (
                    <Item>
                      <Item.Image src='https://via.placeholder.com/168x94.png' />
                      <Item.Content>
                        <Item.Header as='a'>Video Title</Item.Header>
                        <Item.Meta>Video Channel</Item.Meta>
                      </Item.Content>
                    </Item>
                  ))
                }
              </Item.Group>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
