import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, TagSelect, Recommendation } from './pages';
import TagResult from './components/TagResult';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/TagSelect" element={<TagSelect />}/>
        <Route path="/TagResult" element={<TagResult />}/>
        <Route path="/Recommendation" element={<Recommendation />}/>
      </Routes>
    </div>
  );
}

export default App;
