const Router = require("express").Router()
const controller = require("../controllers/MovieController")

Router.get("/", controller.FindAllMovies)

module.exports = Router