const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const req = require('express/lib/request');
const User = require('../database/models/User');

exports.signup = (req, res, next) => { 
       
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        User.create({
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
              firstName: user.firstName,
              token: jwt.sign(
                { firstName: user.firstName },
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
    firstName: req.body.firstName,
    lastName: req.body.lastName
    }, {
    where: {
        id: req.params.id
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


