const Post = require('../database/models/Post');

// INDEX /api/post

exports.getAllPost = (req, res, next) => {
    Post.findAll().then(posts => {
        res.json(posts);
    }).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
    );
};

// CREATE

exports.createPost=(req, res, next) =>{
    Post.create({
      title: req.body.title,
      content: req.body.content
    }).then(post =>{
      res.json(post);
    }).catch(
      (error) => {
        res.status(400).json({
          error: error
      });
    }
  ); 
};

// READ

exports.getOnePost=(req, res, next)=>{
    Post.findByPk(req.params.id).then(post=>{
      res.json(post);
    }).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
  );  
};

// UPDATE

exports.modifyPost=(req, res, next)=>{
    Post.update({
    title: req.body.title,
    body: req.body.body
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

// DELETE

exports.deletePost=(req, res, next)=>{
  Post.destroy({
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