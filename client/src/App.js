import './App.css';
import './styles/output.css'
import {Switch, Route} from 'react-router-dom'
import {Home, Detail, MyPokemon} from './views'
import {NavBar} from './components'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/my-pokemons">
        <MyPokemon />
      </Route>
      <Route path="/pokemon/:name">
        <Detail />
      </Route>
      {/* <Route path="/search/:input">
        <Search />
      </Route> */}
    </Switch>
    </>
  );
}

export default App;
