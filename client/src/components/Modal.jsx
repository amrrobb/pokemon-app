import { useState } from 'react';
import { CatchButton } from '../components'
import { useForm } from 'react-hook-form';
import { useReactiveVar } from '@apollo/client';
import {myPokemonVar} from '../graphql/vars'
import toast, {Toaster} from 'react-hot-toast';

export default function Modal({image, name, id}) {
    const [message, setMessage] = useState({})
    const [isCatch, setCatch] = useState(false)
    const emptyString = ''
    
    const existPokemonVar = useReactiveVar(myPokemonVar)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        let {nickname} = data
        const input = {id, name, image: image.front_default, nickname}

        reset({})
        myPokemonVar([...existPokemonVar, input])
        toast(`${nickname} has been added to my pokemons!`)
        modalClose("mymodalcentered")
        
    }

    const openModal = (key) => {
        document.getElementById(key).showModal(); 
        document.body.setAttribute('style', 'overflow: hidden;'); 
        document.getElementById(key).children[0].scrollTop = 0; 
        document.getElementById(key).children[0].classList.remove('opacity-0'); 
        document.getElementById(key).children[0].classList.add('opacity-100')
    }

    const modalClose = (key) => {
        document.getElementById(key).children[0].classList.remove('opacity-100');
        document.getElementById(key).children[0].classList.add('opacity-0');
        setTimeout(function () {
            document.getElementById(key).close();
            document.body.removeAttribute('style');
        }, 100);
        setCatch(false)
    }

    const catchPokemon = () => {
        const chance = Math.floor(Math.random() * 100)
        if (chance <= 50) {

            setMessage({
                "title": "Oh no!",
                "image": image.back_default,
                "body": `The wild ${name} fled`
            })
            openModal('mymodalcentered')
        }
        else {
            setCatch(true)
            setMessage({
                "title": "Gotcha!",
                "image": image.front_default,
                "body": `Caught wild ${name}, please give a name to save it:`
            })
            openModal('mymodalcentered')
        }
    }  
    
    return (
        <>
        <Toaster />
        <div className="flex justify-center">
            <button type="button" onClick={() => catchPokemon()}>
                <CatchButton / >
            </button>
        </div>



        <dialog id="mymodalcentered" className="bg-transparent z-0 relative w-screen h-screen">
            <div className="p-7 mmd:-p-3 flex justify-center items-center fixed left-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-0">
                <div className="bg-white flex justify-center rounded-lg w-1/2 mmd:w-max msm:w-max">
                    <div className="flex flex-col items-center">
                        <div className="p-7 flex justify-between w-max">
                            <div className="text-gray-900 font-bold text-2xl">{message.title}</div>
                            {/* <svg onClick={() => modalClose('mymodalcentered')} className="ml-auto fill-current text-gray-700 w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                            </svg> */}
                        </div>

                        <div className="px-7 pb-3 normal-case " style={{"maxHeight": "40vh"}}>
                            <form onSubmit={handleSubmit(onSubmit)}  >
                            <div className="flex justify-center">
                                <img src={message.image} alt="" />
                            </div>
                            <div className="flex justify-center">
                                <p>{message.body}</p>
                            </div>
                            <div className="flex justify-center">
                            {
                                isCatch 
                                ?
                                <>
                                <div className="flex flex-col">

                                <input className="mt-2 px-4 py-1 border-4 rounded border-light-yellow-400 border-opacity-75" {...register("nickname", { required: true })} name="nickname" defaultValue={emptyString}/>
                                
                                {errors.nickname && <span className="text-center text-[#f3b7c2] pt-1 mmd:text-xs">Name cannot be empty!</span>}
                                </div>
                                </>
                                : null
                            }
                            </div>


                        
                            <div className="p-7 flex justify-center items-center w-full">
                                {
                                    isCatch
                                    ?
                                    <button type="submit" className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded mr-3">
                                        Save
                                    </button>
                                    : null
                                }
                                <button type="button" onClick={() => modalClose('mymodalcentered')} className="bg-transparent hover:bg-gray-500 text-yellow-400 font-semibold hover:text-white py-2 px-4 border border-yellow-300 hover:border-transparent rounded">
                                    Close
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
        </>
    )
}
