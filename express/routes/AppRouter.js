const Router = require("express").Router()
const MovieRouter = require("./MovieRouter")
const ActorRouter = require("./ActorRouter")
//const DirectorRouter = require("./DirectorRouter")

Router.use("/movies", MovieRouter)
Router.use("/actors", ActorRouter)
// Router.use("/directors", DirectorRouter)

module.exports = Router