import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AddMovie from './components/AddMovie'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addmovie' element={<AddMovie/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}/>
          {/* <Route path='/actor/:id' element={<Actor/>}/> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
