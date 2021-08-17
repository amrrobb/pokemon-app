import { useQuery, useReactiveVar } from '@apollo/client';
import {PokemonCard, Loading} from '../components'
import {POKEMON_LIST} from '../graphql/queries'
import { myPokemonVar } from '../graphql/vars';

export default function Home(params) {
    const { loading, error, data, fetchMore } = useQuery(POKEMON_LIST, {variables: {limit: 20, offset: 0}});
    const myPokemon = useReactiveVar(myPokemonVar)

    const ownedPokemons = (id) => {
        let owned = myPokemon.filter(el => el.id === id).length
        return owned
    }

    if (loading) return (<> <Loading /> </>)
    if (error) return `Error! ${error.message}`;
    

    return (
        <>
        <div className="h-screen w-screen bg-gradient-to-b from-gray-200 to-white px-20 py-10 mmd:p-5">
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {
                data.pokemons 
                ? data.pokemons.results.map((el, i) => (
                    <PokemonCard pokemon={el} key={i} owned={ownedPokemons(el.id)}/>
                ))
                : null
            }
            </div>
            
            <div className="flex justify-center py-10  mmd:py-5">

                <div className=" bottom-10 shadow-sm">
                    <div className="inline-block px-6 py-2 bg-white text-yellow-300 font-semibold border-2 border-yellow-300 rounded-md hover:bg-yellow-400 hover:text-white hover:border-yellow-400 focus:outline-none focus:ring">
                    <button type="button"
                        onClick = {() => {
                            const {nextOffset} = data.pokemons
                            fetchMore({
                                variables: {offset: nextOffset},
                                updateQuery: (prevResult, {fetchMoreResult}) => {
                                    fetchMoreResult.pokemons.results = [
                                        ...prevResult.pokemons.results, 
                                        ...fetchMoreResult.pokemons.results
                                    ]
                                    return fetchMoreResult
                                }
                            })
                        }}
                        >
                        Load More
                    </button>   
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}