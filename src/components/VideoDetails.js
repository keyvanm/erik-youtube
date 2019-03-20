import React from 'react'
import { Header, Menu, Image, Button, Container, Divider, Feed } from 'semantic-ui-react';
import ResponsiveEmbed from 'react-responsive-embed';
import _ from 'lodash';

const image = 'https://via.placeholder.com/150'
const date = '3 days ago'
const summary = 'Laura Faucet'
const extraText = "Have you seen what's going on in Israel? Can you believe it."

const VideoDetails = ({ video }) => (
  <div>
    <ResponsiveEmbed src={`https://www.youtube.com/embed/${video.id}`} allowFullScreen />
    <Header as='h1' content="VideoTitle" subheader="Views"/>
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
        UserName
        <Header.Subheader>Published on Date</Header.Subheader>
      </Header.Content>
      <Button primary style={{ float: 'right' }}>Subscribe SubCount</Button>
    </Header>
    <Container text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus egestas ligula, at porttitor arcu rutrum feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a metus finibus, finibus nibh at, ullamcorper sapien. Etiam volutpat lacus quis tellus tempus vulputate. Integer lobortis aliquet mi, sed lobortis nibh hendrerit vel. Sed in luctus ligula, sit amet commodo massa. Nullam leo orci, vestibulum id urna eu, vestibulum tincidunt eros. Mauris dignissim at dui vitae efficitur. Maecenas commodo lacinia nibh. In hac habitasse platea dictumst. Vestibulum ornare sollicitudin mi, non ullamcorper orci. Maecenas non quam id libero sollicitudin malesuada non feugiat leo.
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