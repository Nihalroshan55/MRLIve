import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React from 'react';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import PageLoader from "./Components/PageLoader";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <PageLoader>
                <Home />
              </PageLoader>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageLoader>
                <Contact />
              </PageLoader>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
