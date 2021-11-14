import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { firebase } from '../../../firebase';

const AdminNav = (props) => {
  const links = [
    {
      title: 'Matches',
      linkTo: '/admin_matches',
    },
    {
      title: 'Players',
      linkTo: '/admin_players',
    },
  ];
  const renderItems = () =>
    links.map((link) => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button className='admin_nav_link'>
          {link.title}
        </ListItem>
      </Link>
    ));

  return <div>{renderItems()}</div>;
};

export default withRouter(AdminNav);
