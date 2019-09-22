import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard';
import LocationCard from './components/LocationCard';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function App() {
  const [search, setSearch] = useState({});
  const newSearch = searches => {
    const addSearch = {
      id: Date.now()
    };
    setSearch([...search, addSearch]);
  };
  return (
    <main>
      <SearchForm  newSearch={newSearch} />
      <Header />
      <Router>
        <ul>
          <li>
            <Link to='/character'>Characters</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/location'>Locations</Link>
          </li>
        </ul>
        <Route path='/character' component={CharacterCard} />
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/location' component={LocationCard} />
      </Router>
    </main>
  );
}
