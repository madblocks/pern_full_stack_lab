const Router = require("express").Router()
const controller = require("../controllers/ActorController")

Router.get("/", controller.FindAllActors)
Router.get("/:actorId", controller.FindActorMovie)
// Router.post("/:actorId", controller.CreateActor)
// Router.put("/:actorId", controller.UpdateActor)
// Router.delete("/:actorId", controller.DeleteActor)
// Implement these routes
module.exports = Router