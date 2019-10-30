import React from 'react';
import User from './User';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 50px;
  max-height: 400px;
  overflow: auto;
`;

const UserList = ({ users, handleDelete, handleEdit }) => {
  return (
    <Div>
      {users.map(user => (
        <User
          key={user.id}
          data={user}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </Div>
  );
};

export default UserList;
