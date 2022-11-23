'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsToMany(models.Actor, {
        through: models.ActorMovie,
        as: 'movie_actors',
        foreignKey: 'movieId'
      })
      Movie.hasOne(models.Director, {
        foreignKey: 'directorId'
      })
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    directorId: { 
      type: DataTypes.INTEGER,
      references: {
        model: 'directors',
        id: 'id'
      }
      },
    releaseDate: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies'
  });
  return Movie;
};