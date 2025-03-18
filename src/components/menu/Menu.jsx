import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu (){
    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/saludo">Saludo</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu
