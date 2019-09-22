import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <Router>
        <ul>
          <li>
            <Link to='/character'>Characters</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        <Route path='/character' component={CharacterList} />
        <Route exact path='/' component={WelcomePage} />
      </Router>
    </main>
  );
}
