import { useHistory } from "react-router-dom"

export default function PokemonCard({pokemon}) {
    const history = useHistory()

    return (
        <>
        <div className="relative border bg-white border-gray-200 rounded-xl hover:shadow-xl hover:transform hover:scale-110">
			<span className="absolute top-0 left-0 text-sm bg-yellow-300 p-2 rounded-br-xl rounded-tl-xl text-white">
				# {pokemon.id}
			</span>
			<img onClick={() => history.push(`pokemon/${pokemon.name}`)} className="max-h-48 w-full items-center bg-white object-contain rounded-t-xl" src={pokemon.image} alt="" />
			<div className="pb-3 pt-1 text-center">
				<h2 className="text-lg capitalize">{pokemon.name}</h2>
				<h4 className="text-gray-500 text-sm">Owned : <span className="text-sm text-[#DA7F8F]">0</span></h4>
			</div>
			<div className="flex">
				<button className="py-3 w-full bg-yellow-300 rounded-b-xl text-white font-semibold hover:bg-yellow-400 hover:font-extrabold" onClick={() => history.push(`pokemon/${pokemon.name}`)}>View Detail</button>
			</div>
		</div>
        </>
    )
}