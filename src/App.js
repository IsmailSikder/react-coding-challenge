
import './App.css';
import Movies from './movies-page/movies-page.component'

import Series from './series-page/series-page.component';
import Home from './home-page/home-page.component';
import { Switch,Route  } from 'react-router-dom';
import Header from './components/header/header.component';

function App() {


  return (
    <div className="App" >
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/movies' component={Movies}/>
        <Route exact path='/series' component={Series}/>
      </Switch>
    </div>
  );
}

export default App;
