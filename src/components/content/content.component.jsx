import sampleData from '../../feed/sample.json'
import Movies from '../../movies-page/movies-page.component'
const Content =()=>{
    const sampleContent = sampleData.entries
    console.log(sampleContent)
    const MovieContent = sampleContent.filter(streamingContent=>{
        console.log(streamingContent.programType)
            return streamingContent.releaseYear>=2010
    } )

    return(
        <div>
            <Movies
                movies={MovieContent}
            />
        </div>
    )
}

export default Content