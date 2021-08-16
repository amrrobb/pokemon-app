import pokeball from '../assets/pokeball.png'

export default function CatchButton(params) {
    return (
        <>
        <div className="flex justify-center items-center z-10">

        <div className=" bottom-10 shadow-sm fixed">
            <div className="inline-block px-6 py-2 bg-white text-yellow-300 font-semibold border-2 border-yellow-300 rounded-md hover:bg-yellow-400 hover:text-white hover:border-yellow-400 focus:outline-none focus:ring">
                <div>
                    <img src={pokeball} alt="" />
                </div>
                Catch
            </div>
        </div>
        </div>
        </>
    )
}