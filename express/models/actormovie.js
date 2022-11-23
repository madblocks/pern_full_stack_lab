'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActorMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActorMovie.init({
    movieId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'movies',
        id: 'id'
      }
    },
    actorId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'actors',
        id: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ActorMovie',
    tableName: 'actormovie'
  });
  return ActorMovie;
};