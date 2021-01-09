import sample from '../feed/sample.json';

const Movies =()=>{
    const sampleData = sample.entries  
    console.log(sampleData)  
        return(
            <div>
    
                 <div>
                {
                  sampleData.map(media=>(
                   
                     media.programType === 'movie' && media.releaseYear >=2010?
                     <div>
                          <p>{media.title}</p>
                          <p>{media.releaseYear}</p>
                         <p>{media.programType}</p>
                     </div>
                       :
                       ''
                   )
                  )
                }
              </div>
            </div>
        )
}

export default Movies