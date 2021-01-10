
import Movies from '../movies-page/movies-page.component'

import Series from '../series-page/series-page.component';
import { Route  } from 'react-router-dom';
import StreamingContent from '../components/streaming-content/streaming-content.component';

const Home= ()=>{
 // const sampleData = sample.entries
  //console.log(sampleData)  
  return(
    <div>
        <Route exact path='/movies' component={Movies}/>
        <Route exact path='/series' component={Series}/>
        <StreamingContent/>
    </div>
)
}

export default Home