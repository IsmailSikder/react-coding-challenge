
import PreviewContent from '../components/preview-content/preview-content.component';
import sampleStreaming from '../feed/sample.json'

const Movies =(props)=>{
  const stream = sampleStreaming.entries
  const viewSampleStreming =stream.filter((stream)=>{           
    return stream.programType==='movie' && stream.releaseYear>=2010
})
console.log(viewSampleStreming)

return(
    <div>
      <PreviewContent
        streamingContent = {viewSampleStreming}
      />
    </div>
)
}

export default Movies