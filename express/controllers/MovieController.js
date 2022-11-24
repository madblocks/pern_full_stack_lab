const { Movie, Actor, Director } = require("../models")
const director = require("../models/director")
// const { Op, literal, fn, col } = require("sequelize")

const FindAllMovies = async (req, res) => {
  try {
    const result = await Movie.findAll({
      attributes: ['title','releaseDate','genre'],
      include: [{model: Director, as: 'director', attributes: ['firstName','lastName']}]
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  FindAllMovies
}