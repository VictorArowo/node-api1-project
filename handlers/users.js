const db = require('../data/db');

exports.getAllUsers = (req, res) => {
  db.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getUser = (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(user => {
      return user
        ? res.status(200).json(user)
        : res.status(404).json({
            message: 'The user with the specified ID does not exist.'
          });
    })
    .catch(() => {
      return res.status(500).json({
        error: 'The user information could not be retrieved.'
      });
    });
};

exports.addUser = (req, res) => {
  const newUser = {
    name: req.body.name,
    bio: req.body.bio
  };

  if (!newUser.name || !newUser.bio) {
    return res.status(400).json({
      error: 'Please provide name and bio for the user.'
    });
  }

  db.insert(newUser)
    .then(data => {
      return res.status(201).json({ ...data, ...newUser });
    })
    .catch(() => {
      return res.status(500).json({
        error: 'There was an error while saving the user to the database'
      });
    });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then(data => {
      return data !== 0
        ? res.status(200).json({ id })
        : res.status(404).json({
            message: 'The user with the specified ID does not exist.'
          });
    })
    .catch(() => {
      return res.status(500).json({
        errorMessage: 'The user could not be removed'
      });
    });
};

exports.editUser = (req, res) => {
  const { id } = req.params;

  const user = {
    name: req.body.name,
    bio: req.body.bio
  };

  if (!user.name || !user.bio) {
    return res.status(400).json({
      error: 'Please provide name and bio for the user.'
    });
  }
  db.update(id, user)
    .then(data => {
      return data !== 0
        ? res.status(200).json({ id, ...user })
        : res.status(404).json({
            message: 'The user with the specified ID does not exist.'
          });
    })
    .catch(() => {
      return res.status(500).json({
        errorMessage: 'The user information could not be modified.'
      });
    });
};
