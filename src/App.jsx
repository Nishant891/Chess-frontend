import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Error from "./pages/Error.jsx";

import { createContext } from 'react';

export const AppContext = createContext();

function App() {
  return (
    <>
      <AppContext.Provider>
        <Router basename="/">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
      </AppContext.Provider>
    </>

  )
}

export default App
