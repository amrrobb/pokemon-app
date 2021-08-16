import pokeball from '../assets/pokeball.png'

export default function Loading(params) {
    return (
        <div className="h-screen w-screen bg-gradient-to-b from-gray-200 to-white px-20 py-10 mmd:p-5">
            <div className="text-center mt-20 mmd:mt-10 text-gray-700 font-medium">
                <div className="flex justify-center">
                    <img src={pokeball} alt="" className="mmd:w-5/12 animate-spin"/>
                </div>
                <p className="mt-5 text-xl">Loading . . .</p>
            </div>
        </div>
    )
}