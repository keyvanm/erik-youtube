import React from 'react'
import { Grid, Item } from 'semantic-ui-react';
import ResponsiveEmbed from 'react-responsive-embed';
import _ from 'lodash';


const VideoPage = ({match}) => {
  return (
    <Grid>
      <Grid.Column width={11}>
        <ResponsiveEmbed src={`https://www.youtube.com/embed/${match.params.videoId}`} allowFullScreen />
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