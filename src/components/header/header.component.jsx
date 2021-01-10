import { Link } from "react-router-dom"
import './header.style.css'

const Header =()=>(
    <div  className='header' >

        <Link className='option' to='/movies'>Movies</Link>
       
       
        <Link className='option' to='/series'>Series</Link>        
    </div>
)

export default Header