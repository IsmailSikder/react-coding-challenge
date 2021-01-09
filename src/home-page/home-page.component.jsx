
import Movies from '../movies-page/movies-page.component'
import sample from '../feed/sample.json';
import Series from '../series-page/series-page.component';
import { Route  } from 'react-router-dom';
const Home= ()=>{
  const sampleData = sample.entries
  console.log(sampleData)  
  return(
    <div>
        <Route exact path='/movies' component={Movies}/>
        <Route exact path='/series' component={Series}/>
    </div>
)
}

export default Home