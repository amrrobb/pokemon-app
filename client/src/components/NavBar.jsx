import pokeball from '../assets/pokeball.png'
import {NavLink} from 'react-router-dom'

export default function NavBar(params) {
    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-yellow-300 to-[#DA7F8F] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <div className="w-10 mr-4">
                <img src={pokeball} alt="" />
            </div>
            <NavLink exact to='/'>
                <span className="font-semibold text-xl tracking-tight">Pokemon</span>
            </NavLink>
        </div>
        <div className="block lg:hidden">
            <button id='boton' className="flex items-center px-3 py-2 border rounded text-[#FAF3F3] border-white hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-base lg:flex-grow">
            <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-[#FAF3F3] hover:text-white hover:font-semibold mr-6 nav-link me-3" exact to='/'>
                Home
            </NavLink>
           
            <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-[#FAF3F3] hover:text-white hover:font-semibold mr-6 nav-link me-3" exact to='/my-pokemons'>
                My Pokemons
            </NavLink>
            
            </div>
            <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
        </div>
        </nav>

        </>
    )
}