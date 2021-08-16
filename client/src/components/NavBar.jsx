import pikachu from '../assets/pikachu.png'
import {NavLink} from 'react-router-dom'

export default function NavBar(params) {
    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-yellow-300 to-[#DA7F8F] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <div className="w-10 mr-4">
                <img src={pikachu} alt="" />
            </div>
            <NavLink exact to='/'>
                <span className="font-thin text-xl tracking-tight">Pikapedia!</span>
            </NavLink>
        </div>
        <div id='menu' className="w-full block flex-grow flex items-center w-auto">
            <div className="text-base flex-grow">
           
            <NavLink className="block lg:inline-block lg:mt-0 text-[#FAF3F3] hover:text-white hover:font-semibold mr-6 nav-link me-3 items-center mmd:text-right" exact to='/my-pokemons'>
                My Pokemons
            </NavLink>
            
            </div>
        </div>
        </nav>

        </>
    )
}