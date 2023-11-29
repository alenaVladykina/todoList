import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import Container from '@mui/material/Container';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Container fixed>
          <Routes>
            <Route path="/" element={<TodolistsList/>}/>
            <Route path="/about" element={<h1>404: PAGE NOT FOUND</h1>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
