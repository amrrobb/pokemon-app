import { useQuery } from '@apollo/client';
import {PokemonCard} from '../components'
import {POKEMON_LIST} from '../graphql/queries'

export default function Home(params) {
    const { loading, error, data } = useQuery(POKEMON_LIST, {variables: {limit: 20, offset: 0}});

    // console.log(data.pokemons.results);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
        <div className="h-screen w-screen bg-gray-100 p-5">
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {
                data.pokemons 
                ? data.pokemons.results.map((el, i) => (
                    <PokemonCard pokemon={el} key={i}/>
                ))
                : null
            }
            
            </div>
        </div>
        </>
    )
}