import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
