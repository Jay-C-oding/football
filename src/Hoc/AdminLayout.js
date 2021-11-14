import React from 'react';
import AdminNav from '../components/Admin/Nav/AdminNav';

const AdminLayout = (props) => {
  return (
    <div className='admin_container'>
      <div className='admin_left_nav'>
        <AdminNav></AdminNav>
      </div>
      <div className='admin_right'>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default AdminLayout;
