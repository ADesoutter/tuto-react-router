import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">   
        <nav>
          <NavLink exact to="/">Accueil</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
    
        {/* Première page visible */}
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );


}export default App;