import StreamingCard from "../card/card.component"
import './preview-content.style.css'

const PreviewContent =(props)=>{
    
    return(
        <div className='card-list'>
        {
          props.streamingContent.map(streamingObj =>(
            <StreamingCard  key = {streamingObj.title} streaming={streamingObj}/>
          )
          )   
      }    
     </div>
       
    )
}

export default PreviewContent