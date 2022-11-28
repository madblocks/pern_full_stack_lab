const { Movie, Actor, Director } = require("../models")
const director = require("../models/director")
// const { Op, literal, fn, col } = require("sequelize")

const FindAllMovies = async (req, res) => {
  try {
    const result = await Movie.findAll({
      attributes: ['id','title','releaseDate','genre'],
      include: [{model: Director, as: 'director', attributes: ['firstName','lastName']}]
    })
    res.send(result)
  } catch (error) {
    throw error
  }
}

const FindMovie = async (req, res) => {
  try {
    const result = await Movie.findAll({
      where: {id: req.params.movidId},
      attributes: ['id','title','releaseDate', 'genre'],
      include: [{model: Director, as: 'director', attributes: ['firstName','lastName']}]
    })
    console.log(req.params)

    res.send(result)
  } catch (error) {
    throw error
  }
}

const AddMovie = async (req, res, next) => {
  try {
    const director = await Director.create({firstName: req.body.director.firstName, lastName: req.body.director.lastName})
    console.log(req.dataValues)
    const movie = await Movie.create({
      title: req.body.title, 
      releaseDate: req.body.releaseDate, 
      genre: req.body.genre, 
      directorId: director.dataValues.id})
  } catch (error) {
    throw error
  }
}

const DeleteMovie = async (req, res, next) => {
  try { 
    console.log(req.params.movieId)
    console.log(req.body.id)
    const deletedMovie = await Movie.destroy({where: {id: req.body.id}})
    res.send(`deleted Movie Id something`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  FindAllMovies,
  FindMovie,
  AddMovie,
  DeleteMovie
}