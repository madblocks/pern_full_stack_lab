import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'


const StyledMovie = styled.div`
  color: rgb(171, 191, 212);
  border: 2px solid rgb(171, 191, 212);
  border-radius: 9px;
  min-width: 200px;
  padding: 10px;
  text-align: left;
  .title {
    text-align: center;
    font-size: 25px;
    color: white;
    border-bottom: 1px solid rgb(171, 191, 212);
    margin-bottom: 10px;
    padding-bottom: 5px;
    text-decoration: none;
    outline: none;
  }
  .navLink {
    padding: 10px;
    font-size: 20px;
  }
  .navLink:hover {
    color: white;
  }
  .form {
    text-decoration: none;
    outline: none;
    
  }
  .input {
    text-decoration: none;
    outline: none;
    font-size: 16px;
  }
  .title:disabled {
    font-size: 25px;
    border-bottom: 1px solid rgb(171, 191, 212);
    box-sizing: border-box;
    outline: none !important;
    background-color: rgb(0, 25, 50);
  }
  *:disabled {
    background-color: rgb(0, 25, 50);
    border: none;
    color: rgb(171, 191, 212);
    font-size: 16px;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .active {
    color: white;
  }
`

export default function MovieDetails () {
  
  let { movieId } = useParams()

  const [ movie, setMovie ] = useState()
  const [ editDisabled, setEditDisabled ] = useState(true)

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(`http://localhost:3001/api/movies/${movieId}`)
      setMovie(response.data[0])
    }
    getMovie()
  }, [movieId])

  const deleteMovie = async () => {
    await axios.delete(`http://localhost:3001/api/movies/${movieId}`, {data: {id: movieId}})
    console.log(`Movie with ID: ${movieId} has been deleted`)
  }

  const handleEdit = (e) => {
    setMovie({...movie, [e.target.dataset.id]: e.target.value})
  }

  const toggleEdit = () => {
    // const inputs = document.querySelector('.input')
    // inputs.setAttribute('disabled', false)
    setEditDisabled(!editDisabled)
  }

  return (movie ? (
    <StyledMovie>
      <form className='form'>
        <label></label><input className='title input' value={movie.title} data-id='title' onChange={handleEdit} disabled={editDisabled}/><br></br>
        <label>Genre: </label><input className='genre input' value={movie.genre} data-id='genre' onChange={handleEdit} disabled={editDisabled}/><br></br>
        <label>Release: </label><input className='releaseDate input' value={movie.releaseDate} data-id='releaseDate' onChange={handleEdit} disabled={editDisabled}/><br></br>
        <label>Director: </label><input placeholder='Firstname' value={movie.director.firstName} onChange={handleEdit} disabled/><input value={movie.director.lastName} onChange={handleEdit} disabled/><br></br>
      </form>
      <div className='title'>{movie.title}</div>
      <div className='genre'>Genre: {movie.genre}</div>
      <div className='releaseDate'>Release: {movie.releaseDate}</div>
      <div className='director'>Director: {movie.director.firstName} {movie.director.lastName}</div>
      <FontAwesomeIcon className={editDisabled ? 'navLink' : 'navLink active'} icon={faEdit} id='editIcon' onClick={toggleEdit}/>
      <FontAwesomeIcon className='navLink' icon={faTrash} id='trashIcon' onClick={deleteMovie}/>
    </StyledMovie>
  ) : null)
}