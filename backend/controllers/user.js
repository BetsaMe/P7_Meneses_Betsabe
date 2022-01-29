const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const req = require('express/lib/request');
const User = require('../database/models/User');
const Post = require('../database/models/Post');

// SIGNUP
exports.signup = (req, res, next) => { 
       
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        User.create({
            pseudo: req.body.pseudo,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        })
        .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
        .catch(error => res.status(400).json({ error })); 
    })
    .catch(error => res.status(500).json({ error }));         
}; 

// LOGIN
exports.login = (req, res, next) => {

    User.findOne({
        where: { email: req.body.email}
    }).then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              pseudo: user.pseudo,
              userId: user.userId,
              token: jwt.sign(
                { userId: user.userId },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

// UPDATE USER

exports.modifyProfile=(req, res, next)=>{
    User.update({
    pseudo: req.body.pseudo,  
    firstName: req.body.firstName,
    lastName: req.body.lastName
    }, {
    where: {
        userId: req.params.id
    }
    }).then(result => {
    res.json(result);
    }).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  )
};



// GET USER
exports.getOneUser=(req, res, next)=>{
  User.findByPk(req.params.id,
  ).then(user=>{
    res.json(user);
  }).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );  
};

// DELETE USER

exports.deleteUser=(req, res, next)=>{
  User.destroy({
    where: {
        userId: req.params.id
    }
    }).then(result => {
    res.json(result);
    }).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  )
};
