const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');

const postCtrl = require('../controllers/post');

router.post('/', postCtrl.createPost);
router.get('/', postCtrl.getAllPost);
router.get('/:id', postCtrl.getOnePost);
router.put('/:id', postCtrl.modifyPost);
router.delete('/:id', postCtrl.deletePost);


// INDEX /api/post
// router.get('/', (req, res) => {
//     Post.findAll().then(posts => {
//         res.json(posts);
//     }).catch(
//         (error) => {
//           res.status(404).json({
//             error: error
//           });
//         }
//     );
// });

// CREATE
// router.post('/', (req, res) => {
//     Post.create({
//         title: req.body.title,
//         content: req.body.content
//     }).then(post =>{
//         res.json(post);
//     }).catch(
//         (error) => {
//           res.status(400).json({
//             error: error
//           });
//         }
//     );  
// });

// READ

// router.get('/:id', (req, res) => {
//     Post.findByPk(req.params.id).then(post=>{
//         res.json(post);
//     }).catch(
//         (error) => {
//           res.status(400).json({
//             error: error
//           });
//         }
//     );  
// });

// UPDATE
// router.put('/:id', (req, res) => {
//     Post.update({
//         title: req.body.title,
//         body: req.body.body
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(result => {
//         res.json(result);
//     }).catch(
//         (error) => {
//           res.status(400).json({
//             error: error
//           });
//         }
//     )
// });

// DELETE
// router.delete('/:id', (req, res) => {
//     Post.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(result => {
//         res.json(result);
//     }).catch(
//         (error) => {
//           res.status(400).json({
//             error: error
//           });
//         }
//     )
// });

module.exports = router;