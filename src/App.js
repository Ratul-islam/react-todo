import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Index from './pages/index.js';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='*' element={ <Error /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
