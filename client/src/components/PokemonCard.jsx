import { useReactiveVar } from "@apollo/client"
import { useHistory } from "react-router-dom"
import release from '../assets/release.png'
import { myPokemonVar } from "../graphql/vars"
import toast, {Toaster} from 'react-hot-toast';

export default function PokemonCard({pokemon, owned}) {
    const history = useHistory()
	const path = history.location.pathname
	const myPokemon = useReactiveVar(myPokemonVar)

	const releasePokemon = (id, nickname) => {
		const found = (el) => el.nickname === nickname && el.id === id
		const index = myPokemon.findIndex(found)
		const updatedOwned = [...myPokemon]
		updatedOwned.splice(index, 1)
		toast(`${nickname} has been released from my pokemons!`)
		myPokemonVar([...updatedOwned])
	}

    return (
        <>
		<Toaster />
        <div className="relative border bg-white border-gray-200 rounded-xl hover:shadow-xl hover:transform hover:scale-110" >
			<span className="absolute top-0 left-0 text-sm bg-yellow-300 p-2 rounded-br-xl rounded-tl-xl text-white">
				# {pokemon.id}
			</span>
			{
				path === '/my-pokemons' 
				?
				<>
				<span className="absolute top-0 right-0 text-sm bg-[#c4344e] p-2 rounded-bl-xl rounded-tr-xl text-white z-10">
					<button type="click" onClick={() => releasePokemon(pokemon.id, pokemon.nickname)}>
						<img src={release} alt="" className=""/>
					</button>
				</span>
				</>
				: null
			}
			<img  className="max-h-40 w-full items-center bg-white object-contain rounded-t-xl" src={pokemon.image} alt="" onClick={() => history.push(`pokemon/${pokemon.name}`)} />
			<div className="pb-3 text-center">
				<h2 className="text-lg capitalize">{pokemon.name}</h2>
				{
					path !== '/my-pokemons' 
					?
					<h4 className="text-gray-500 text-sm">Owned : <span className="text-sm text-gray-500">{owned}</span></h4>
					:
					<h4 className="text-gray-500 text-sm">Name : <span className="text-sm text-gray-500">{pokemon.nickname}</span></h4>
				}

			</div>

		</div>
        </>
    )
}