import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  padding-top: 50px;
  color: rgb(171, 191, 212);
  
  label {
    display: block;
  }
`

export default function AddMovie () {

  const [ movie, setMovie ] = useState(
    {
      title: '',
      genre: '',
      director: {
        firstName: '',
        lastName: ''
      },
      releaseDate: ''
    }
  )

  const handleRelease = (e) => {
    setMovie({...movie, [e.target.dataset.id]: parseInt(e.target.value)})
  }
  const handleChange = (e) => {
    setMovie({...movie, [e.target.dataset.id]: e.target.value})
  }
  const handleDirectorFirst = (e) => {
    setMovie({...movie, 
                director: {...movie.director, firstName: e.target.value}})
  }
  const handleDirectorLast = (e) => [
    setMovie({...movie, 
                director: {...movie.director, lastName: e.target.value}})
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const addMovie = async () => {
      const response = await axios.post('http://localhost:3001/api/movies', movie)
      console.log(response)
    }
    addMovie()
  }



  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <label>
          Title: <input type='text' value={movie.title} onChange={handleChange} data-id='title' />
        </label>
        <label>
          Genre: <input type='text' value={movie.genre} onChange={handleChange} data-id='genre' />
        </label>
        <label>
          Release Date: <input type='text' value={movie.releaseDate} onChange={handleRelease} data-id='releaseDate' />
        </label>
        <label>
          Director: <input type='text' value={movie.director.firstName} placeholder='First Name' onChange={handleDirectorFirst}/>
                    <input type='text' value={movie.director.lastName} placeholder='Last Name' onChange={handleDirectorLast}/>
        </label>
        <input type='submit' value='submit'/>
      </form>
    </StyledForm>
  )
}