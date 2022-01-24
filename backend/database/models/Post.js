const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Post extends Model {}

Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
}, {
    sequelize,
    modelName: "post"
});

module.exports = Post;

