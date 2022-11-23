const Router = require("express").Router()
//const MovieRouter = require("./MovieRouter")
const ActorRouter = require("./ActorRouter")
//const DirectorRouter = require("./DirectorRouter")

// Router.use("/movie", MovieRouter)
Router.use("/actors", ActorRouter)
// Router.use("/director", DirectorRouter)

module.exports = Router