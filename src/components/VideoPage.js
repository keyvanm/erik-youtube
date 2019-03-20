import React from 'react'
import { Grid, Item, Header, Menu } from 'semantic-ui-react';
import ResponsiveEmbed from 'react-responsive-embed';
import _ from 'lodash';


const VideoPage = ({match}) => {
  return (
    <Grid>
      <Grid.Column width={11}>
        <ResponsiveEmbed src={`https://www.youtube.com/embed/${match.params.videoId}`} allowFullScreen />
        <Header content="VideoTitle" subheader="Views"/>
        <Menu pointing secondary>
          <Menu.Menu position='right'>
            <Menu.Item
              icon="thumbs up"
              name="Likes"
            />
            <Menu.Item
              icon="thumbs down"
              name="Dislikes"
            />
            <Menu.Item
              icon="share"
              name="Share"
            />
            <Menu.Item
              icon="save"
              name="Save"
            />
            <Menu.Item
              icon="ellipsis horizontal"
            />
          </Menu.Menu>
          
        </Menu>
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
  )
}

export default VideoPage