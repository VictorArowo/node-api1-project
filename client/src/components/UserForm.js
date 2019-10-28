import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  input[type='submit'] {
    width: 120px;
    height: 25px;
    background-color: blueviolet;
    color: white;
    border: none;
    border-radius: 5px;
  }

  input[type='text'] {
    width: 200px;
    height: 15px;
    border-radius: 5px;
    border: 1px solid grey;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

const UserForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name.."
          value={values.name}
          onChange={handleChange}
        />
        <br />
        <input
          name="bio"
          type="text"
          placeholder="Bio.."
          value={values.bio}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </Form>
    </div>
  );
};

export default UserForm;
