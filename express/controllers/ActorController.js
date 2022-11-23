const { Movie, Actor, Director } = require("../models")
// const { Op, literal, fn, col } = require("sequelize")

//CRUD
//CREATE
const CreateActor = async (req, res) => {
  try {
    let actorId = parseInt(req.params.actor_id)
    let actorBody = { actorId, ...req.body }
    let actor = await Actor.create(actorBody)
    res.send(actor)
  } catch (error) {
    throw error
  }
}

//FIND (READ)
const FindAllActors = async (req, res) => {
  try {
    const result = await Actor.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const FindActorMovie = async (req, res) => {
  try {
    const result = await Actor.findByPk(3, {include: [{model: Movie, as: 'actor_in_movies'}]})
    res.send(result)
  } catch (error) {
    throw error
  }
}

//UPDATE
const UpdateActor = async (req, res) => {
  try {
    let actorId = parseInt(req.params.actor_id)
    let updatedActor = await Actor.update(req.body, {
      where: { id: actorId },
      returning: true,
    })
    res.send(updatedActor)
  } catch (error) {
    throw error
  }
}

//DELETE
const DeleteActor = async (req, res) => {
  try {
    let actorId = parseInt(req.params.actor_id)
    await Actor.destroy({ where: { id: actorId } })
    res.send({ message: `Deleted actor with an id of ${actorId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateActor,
  FindAllActors,
  FindActorMovie,
  UpdateActor,
  DeleteActor,
}