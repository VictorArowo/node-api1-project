import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 300px;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin-bottom: 50px;
  cursor: pointer;

  button {
    color: white;
    background-color: red;
    border: none;
    border-radius: 10px;
    font-family: 'Staatliches', cursive;
    width: 90px;
    height: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;

const User = ({ data: { name, bio, id }, handleDelete, handleEdit }) => {
  return (
    <Div onClick={() => handleEdit(name, bio, id)}>
      <h1>{name}</h1>
      <p>{bio}</p>
      <button onClick={e => handleDelete(id, e)}>DELETE</button>
    </Div>
  );
};

export default User;
