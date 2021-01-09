import sample from '../feed/sample.json';
import Movies from '../movies-page/movies-page.component';
const ContentContainer =()=>{
    const sampleData = sample.entries  
    console.log(sampleData)  
        return(
            <div>
    
                 <div>
                {
                  sampleData.map(media=>(
                   
                     media.programType === 'series'?
                        ''
                        :
                       <div>
                         <p>{media.title}</p>
                          <Movies
                          key={media.title}
                          movies = {media}
                      />
                       </div>
                       
                   
                   )
                  )
                }
              </div>
            </div>
        )
}

export default ContentContainer