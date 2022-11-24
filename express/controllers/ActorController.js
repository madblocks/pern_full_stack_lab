const { Movie, Actor, Director } = require("../models")
// const { Op, literal, fn, col } = require("sequelize")

//CRUD
//CREATE
const CreateActor = async (req, res) => {
  try {
    let actorId = parseInt(req.params.actorId)
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
    const result = await Actor.findAll({attributes: ['id','firstName','lastName','birthYear']})
    res.send(result)
  } catch (error) {
    throw error
  }
}

const FindActorMovie = async (req, res) => {
  try {
    let actorId = parseInt(req.params.actorId)
    const result = await Actor.findAll( 
      {
        where: {id: actorId},
        include: [{
            model: Movie, 
            as: 'actor_in_movies',
            attributes: ['id','title','directorId','releaseDate','genre'],
            through: { attributes: [] },
            include: [{model: Director, as: 'director', attributes: ['firstName', 'lastName']}]
        }],
        attributes: ['id','firstName','lastName','birthYear'],
      }
    )
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