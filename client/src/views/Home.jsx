import { useQuery, useReactiveVar } from '@apollo/client';
import {PokemonCard, Loading} from '../components'
import {POKEMON_LIST} from '../graphql/queries'
import { myPokemonVar } from '../graphql/vars';

export default function Home(params) {
    const { loading, error, data } = useQuery(POKEMON_LIST, {variables: {limit: 20, offset: 0}});
    const myPokemon = useReactiveVar(myPokemonVar)

    const ownedPokemons = (id) => {
        let owned = myPokemon.filter(el => el.id === id).length
        return owned
    }

    // console.log(data.pokemons.results);

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
        </div>
        </>
    )
}