
import sampleStreaming from '../../feed/sample.json'
import PreviewContent from '../preview-content/preview-content.component'
const StreamingContent =()=>{
const stream = sampleStreaming.entries


console.log(stream)
const viewSampleStreming =stream.filter((stream,idx)=>{           
          return idx<21
    })
 
return(
    <div>
        <PreviewContent
            streamingContent = {viewSampleStreming}
        />
    </div>
)

}

export default StreamingContent