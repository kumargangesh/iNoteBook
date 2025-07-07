import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Navbar from './Navbar';
import About from "./Tabs/About";
import Notes from "./Tabs/Notes";

export default function Routing() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route element={<About />} path='/' />
            <Route element={<Notes />} path='/notes' />
        </Routes>
    </BrowserRouter>
  )
}
