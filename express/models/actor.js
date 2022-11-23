'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actor.belongsToMany(models.Movie, {
        as: 'actor_in_movies',
        through: models.ActorMovie,
        foreignKey: 'actorId'
      })
    }
  }
  Actor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthYear: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actor',
    tableName: 'actors'
  });
  return Actor;
};