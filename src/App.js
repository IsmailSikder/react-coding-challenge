
import './App.css';
import Home from './home-page/home-page.component';
import { Switch,Route  } from 'react-router-dom';
import Header from './components/header.component';

function App() {


  return (
    <div className="App" >
      <Header/>
      <Switch>
        <Route  path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
