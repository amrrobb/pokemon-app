import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import {POKEMON_ONE} from '../graphql/queries'
import {colorTypePokemon} from '../helpers'
import { Modal, Loading} from '../components'

export default function Detail(params) {
    const {name} = useParams()
    const { loading, error, data } = useQuery(POKEMON_ONE, {variables: {name}}); 

    if (loading) return (<> <Loading /> </>)
    if (error) return `Error! ${error.message}`;

    return (
        <>
        <div className="relative h-screen w-screen bg-gradient-to-b from-gray-200 to-white pt-2 m-0">

         <div className="border bg-white border-gray-200 rounded-xl shadow-xl px-10 py-6 mx-32 my-6 text-center capitalize mmd:px-5 mmd:mx-5 msm:px-3 msm:mx-3">
             {
                 data.pokemon 
                 ?
                 <>
                    <div className="my-5">
                        <p className="text-4xl font-extrabold">
                            {data.pokemon.name}
                        </p>
                        <p className="text-2xl font-thin"># {data.pokemon.id}</p>

                    </div>
                    
                    <div className="grid lg:grid-flow-col text-left px-24 py-7 mmd:text-center mmd:align-middle msm:text-center msm:align-middle mmd:px-0 msm:px-0 mmd:py-2 msm:py-2">
                        <div className="grid grid-cols-1 mx-10 mmd:grid-cols-none mmd:justify-center mmd:mx-3 msm:grid-cols-none msm:justify-center msm:mx-2 mmd:animate-bounce">
                            <img className="max-w-max transform scale-[2.5] mmd:scale-[2] msm:scale-100  pt-10" src={data.pokemon.sprites.front_default} alt="" />
                            
                        </div>
                        <div className="ml-10 px-5 mmd:ml-0 mmd:px-2 msm:ml-0 msm:px-2">
                            <div className="mb-5 mmd:mt-16 msm:mt-16">
                                <p className="text-xl">Types: </p>
                            </div>
                                <div className="flex justify-start gap-1 mmd:justify-center msm:justify-center">
                                {
                                    data.pokemon.types.map((el, i) => {
                                        const colorType = colorTypePokemon(el.type.name)
                                        return <>
                                        <p className={`rounded-full px-2 py-1 text-white text-center w-28`} style={{"backgroundColor": `${colorType}`}} key={i.toString()} >{el.type.name }</p>
                                        </>
                                    })
                                }
                                </div>
                            <div className="my-5 mmd:mt-6 msm:mt-6">
                                <p className="text-xl">Moves: </p>
                            </div>
                            <div className="flex flex-wrap gap-1 justify-between">
                            {
                                data.pokemon.moves.map((el, i) => (
                                    
                                    <p className={`rounded-full px-2 py-1 text-white mmd:text-sm msm:text-xs text-center`} style={{"backgroundColor": `${colorTypePokemon( data.pokemon.types[0].type.name )}`}} key={i.toString()} >{el.move.name}</p>
                                   
                                    ))
                                }
                            </div>
                        </div>
                    </div>
    

                 </>
                 : null
                }
             
         </div>
        </div>
        <Modal image={data.pokemon.sprites} name={data.pokemon.name} id={data.pokemon.id} />
        </>
    )
}