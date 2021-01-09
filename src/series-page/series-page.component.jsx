import sample from '../feed/sample.json';

const Series =()=>{
    const sampleData = sample.entries  
    console.log(sampleData)  
        return(
            <div>
    
                 <div>
                {
                  sampleData.map(media=>(
                   
                     media.programType === 'series' && media.releaseYear >=2010?
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

export default Series