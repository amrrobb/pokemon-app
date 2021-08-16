import {myPokemonVar} from '../graphql/vars'
import {PokemonCard} from '../components'
import { useReactiveVar } from '@apollo/client'
import empty from '../assets/empty.gif'

export default function MyPokemon(params) {
    const data = useReactiveVar(myPokemonVar)
  
    return (
        <>
        <div className="h-screen w-screen bg-gradient-to-b from-gray-200 to-white px-20 py-10 mmd:p-5">
            {
                data.length
                ?                 
                <>
                <div className="text-center mt-20 mb-10 mmd:mt-5 mmd:mb-5 text-gray-700 font-medium">
                    <p className="text-xl">My Pokemon List</p>
                    <h4 className="mt-2">Total Owned: {data.length}</h4>
                </div>
                </>
                :
                <>
                <div className="text-center mt-20 mmd:mt-10 text-gray-700 font-medium">
                    <div className="flex justify-center">
                        <img src={empty} alt="" className="mmd:w-7/12"/>
                    </div>
                    <p className="mt-5 text-xl">You haven't catch any pokemon yet!</p>
                </div>
                </>
            }
            
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {
                data.length 
                ? 
                <>
                { data.map((el, i) => (
                    <PokemonCard pokemon={el} key={i} />
                    ))
                }  
                </> 
                : null
            }
           
            </div>
        </div>
        </>
    )
}