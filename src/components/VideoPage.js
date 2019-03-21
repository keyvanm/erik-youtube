import React from 'react'
import { Grid, Item, Header, Image } from 'semantic-ui-react';
import VideoDetails from './VideoDetails'

const VideoPage = ({ match, data, history }) => {

  let foundItem;

  let linkTo = event => {
    history.push('/video/' + event.target.parentNode.id)
    findInfo(event.target.parentNode.id)
  }

  let findInfo = (id) => {
    data.forEach(item => {
      if (id === item.id.videoId) {
        foundItem = item
      }
    })
    return foundItem;

  }

  findInfo(match.params.videoId);

  return (
    <Grid>
      <Grid.Column width={11}><VideoDetails video={{ id: match.params.videoId }} item={foundItem} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Item.Group>
          {
            data.map(item => (
              <Item >
                <Item.Image src={item.snippet.thumbnails.default.url} />
                <Item.Content id={item.id.videoId}>
                  <Item.Header onClick={linkTo} as='a'>{item.snippet.title}</Item.Header>
                  <Item.Meta>{item.snippet.channelTitle}</Item.Meta>
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