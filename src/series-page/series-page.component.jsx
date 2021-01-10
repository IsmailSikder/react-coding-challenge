import PreviewContent from '../components/preview-content/preview-content.component';
import sampleStreaming from '../feed/sample.json'

const Series =()=>{
  const stream = sampleStreaming.entries
  const viewSampleStreming =stream.filter((stream,idx)=>{           
    return stream.programType==='series' && stream.releaseYear>=2010
})
        return(
            <div>
             <PreviewContent
                streamingContent = {viewSampleStreming}
             />
            </div>
        )
}

export default Series