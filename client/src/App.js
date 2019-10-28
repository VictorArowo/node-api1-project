import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', bio: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3300/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    axios
      .delete(`http://localhost:3300/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => {
        console.error(error);
      });
  };

  const handleEdit = (name, bio, id) => {
    setIsEditing(true);
    setForm({ name, bio });
    setEditingId(id);
  };

  const handleFormChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    !isEditing
      ? axios
          .post('http://localhost:3300/api/users', form)
          .then(res => {
            setUsers([...users, res.data]);
          })
          .catch(error => {
            console.error(error);
          })
      : axios
          .put(`http://localhost:3300/api/users/${editingId}`, form)
          .then(res => {
            setUsers(
              users.map(user => (user.id === editingId ? res.data : user))
            );
          })
          .catch(error => {
            console.error(error);
          });
    setEditingId(null);
    setIsEditing(false);
    setForm({ name: '', bio: '' });
  };

  return (
    <div className="App">
      <h1 style={{ fontSize: '50px' }}>User Maker</h1>
      <UserList
        users={users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <UserForm
        values={form}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
