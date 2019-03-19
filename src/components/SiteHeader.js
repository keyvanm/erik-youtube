import React from 'react'
import { Menu, Input, Container } from 'semantic-ui-react';

const SiteHeader = () => (
  <Container fluid>
    <Menu>
      <Menu.Item>
        YouTube
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Container>
)

export default SiteHeader;