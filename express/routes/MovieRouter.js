const Router = require("express").Router()
const controller = require("../controllers/MovieController")

Router.get("/", controller.FindAllMovies)
Router.post("/", controller.AddMovie)
Router.get('/:movidId', controller.FindMovie)
Router.delete('/:movieId', controller.DeleteMovie)

module.exports = Router