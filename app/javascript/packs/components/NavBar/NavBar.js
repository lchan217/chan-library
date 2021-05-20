import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
      <Menu fixed='top' widths={3}>
        <Menu.Item as={Link} to='/books'>
          Books
        </Menu.Item>
        <Menu.Item as={Link} to='/authors'>
          Authors
        </Menu.Item>
        <Menu.Item as={Link} to='/references'>
          References
        </Menu.Item>
      </Menu>
  );
};

export default NavBar;