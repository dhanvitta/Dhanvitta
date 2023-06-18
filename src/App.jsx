import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Bot from './Bot';
import LandingPage from './LandingPage';
import News from './News';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/learn" element={<Bot />} />
        <Route exact path="/news" element={<News />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App