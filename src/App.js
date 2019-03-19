import React, { Component } from 'react';
import './App.css';
import { Container, Grid, Item, Image } from 'semantic-ui-react';
import SiteHeader from './components/SiteHeader';
import ResponsiveEmbed from 'react-responsive-embed';
import _ from 'lodash';


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
            <Item.Group>
              {
                _.times(10, () => (
                  <Item>
                    <Item.Image src='https://via.placeholder.com/168x94.png' />
                    <Item.Content>
                      <Item.Header as='a'>Header</Item.Header>
                      <Item.Meta>Description</Item.Meta>
                      <Item.Description>
                        <Image src='/images/wireframe/short-paragraph.png' />
                      </Item.Description>
                      <Item.Extra>Additional Details</Item.Extra>
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
