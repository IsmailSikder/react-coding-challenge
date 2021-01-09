import { Link } from "react-router-dom"
import palceholder from '../assets/placeholder.png'
const Header =()=>(
    <div  className='header'>
        <Link className='option' to='/movies' >Movies</Link>
        <Link className='option' to='/series'>Series</Link>
        
    </div>
)

export default Header