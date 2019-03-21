import React from 'react'
import { Menu, Input, Container, Button } from 'semantic-ui-react';

class SiteHeader extends React.Component {
  state = { value: '' }

  pressButton = () => {
    this.props.search(this.state.value)
  }

  render() {
    return (
      < Container fluid>
        <Menu>
          <Menu.Item>
            YouTube
      </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' onChange={(e, data) => this.setState({ value: data.value })} placeholder='Search...' action={{ onClick: () => this.pressButton() }} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container >
    )
  }
}

export default SiteHeader;