import React from 'react'
import { Header, Menu, Image, Button, Container, Divider, Feed } from 'semantic-ui-react';
import ResponsiveEmbed from 'react-responsive-embed';
import _ from 'lodash';

const image = 'https://via.placeholder.com/150'
const date = '3 days ago'
const summary = 'Laura Faucet'
const extraText = "Have you seen what's going on in Israel? Can you believe it."

const VideoDetails = (props) => (
  <div>
    <ResponsiveEmbed src={`https://www.youtube.com/embed/${props.video.id}`} allowFullScreen />
    <Header as='h1' content={props.item ? props.item.snippet.title : undefined} subheader={Math.trunc(Math.random() * 10000000) + ' Views'} />
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
    <Header as='h3'>
      <Image circular src='https://via.placeholder.com/150' />
      <Header.Content>
        {props.item ? props.item.snippet.channelTitle : undefined}
        <Header.Subheader>Published on {new Date().toDateString()}</Header.Subheader>
      </Header.Content>
      <Button primary style={{ float: 'right' }}>Subscribe SubCount</Button>
    </Header>
    <Container text>
      {props.item ? props.item.snippet.description : undefined}
    </Container>
    <Divider />
    <Feed>
      {
        _.times(10, () => (
          <Feed.Event image={image} date={date} summary={summary} extraText={extraText} />
        ))
      }
    </Feed>
  </div>
)

export default VideoDetails;