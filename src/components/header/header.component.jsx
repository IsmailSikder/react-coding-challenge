import { Link } from "react-router-dom"
import './header.style.css'
import placeholder from '../../assets/placeholder.png'

const Header =()=>(
    <div  className='header' >

            <div className='image'
                    style={{backgroundImage : {placeholder}}}
            />
          

        <Link className='option' to='/movies'>Movies</Link>
       
       
        <Link className='option' to='/series'>Series</Link>        
    </div>
)

export default Header