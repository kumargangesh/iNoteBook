import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import About from "./Tabs/About";
import Notes from "./Tabs/Notes";
import NoteState from './Context/NoteState';
import Alert from './Components/Alert';

export default function Routing() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert message = "this is an Alert" />
        <div className="container">
          <Routes>
            <Route element={<About />} path='/' />
            <Route element={<Notes />} path='/notes' />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  )
}
