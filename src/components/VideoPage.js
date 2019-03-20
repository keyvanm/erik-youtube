import React from 'react'
import { Grid, Item } from 'semantic-ui-react';
import _ from 'lodash';
import VideoDetails from './VideoDetails';

const VideoPage = ({match}) => {
  return (
    <Grid>
      <Grid.Column width={11}>
        <VideoDetails video={{ id: match.params.videoId }} />
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