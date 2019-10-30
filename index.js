const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const {
  getAllUsers,
  addUser,
  getUser,
  deleteUser,
  editUser
} = require('./handlers/users');

app.get('/api/users', getAllUsers);
app.post('/api/users', addUser);
app.get('/api/users/:id', getUser);
app.delete('/api/users/:id', deleteUser);
app.put('/api/users/:id', editUser);

app.listen(process.env.PORT || 3300, () => {
  console.log('listening on ' + (process.env.PORT || 3300));
});
