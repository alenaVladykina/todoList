import React from 'react'
import './App.css'
import Container from '@mui/material/Container';
import {HashRouter, Route, Routes} from "react-router-dom";
import {TodolistsList} from "../features/TodolistsList/TodolistsList";


function App() {

  return (
    <div className="App">
      <HashRouter>
        <Container fixed>
          <Routes>
            <Route path="/" element={<TodolistsList/>}/>
            <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>}/>
          </Routes>
        </Container>
      </HashRouter>
    </div>
  )
}

export default App


