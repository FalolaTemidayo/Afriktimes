import './index.css'
function FirstSection(){
    return(
        <>
            <div className=" block md:flex justify-center px-3 mb-4 mt-3 gap-x-1">
                <div>
                    <div className="relative cursor-pointer mb-1 overflow-hidden">
                    <img className="w-full h-42 md:w-1/3 md:h-full lg:w-full brightness-50 hover:transform hover:scale-110 transition ease-in-out duration-800 delay-900" src="src/assets/world-image2.jpg" />
                    <div className="absolute lg:top-20 top-10 left-0 p-4 text-white">
                    <a
                    href="#"
                    className="flex-none py-1 bg-black px-1.5 h-1  text-xs font-semibold text-gray-200 shadow-sm transition duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                    WORLD
                    </a>
                    <p className=" text-lg lg:mt-2 hover:text-red-500">
                        <strong> US DECIDES NOT TO CHARGE MERRICK GARLAND WITH CONTEMPT</strong>
                    </p>
                    </div>
                    </div>

                    < div className="relative cursor-pointer overflow-hidden">
                    <img className="w-full hidden lg:block h-42 md:w-1/3 brightness-50 hover:transform hover:scale-110 transition ease-in-out duration-300 md:h-full lg:w-full" src="src/assets/metro-image-1.png" />
                    <div className="absolute top-20 left-0 p-4 text-white">
                    <a
                    href="#"
                    className="flex-none  hidden lg:block lg:mt-5 bg-black  lg:h-6 lg:px-1 lg:py-1 lg:w-12  text-xs font-semibold font-semibold text-gray-200 shadow-sm transition duration-700 ease-in-out  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                    METRO
                    </a>
                    <p className=" text-lg mt-2 hover:text-red-500">
                        <strong> Just In: Five die, 60 hospitalized in Lagos cholera outbreak</strong>
                    </p>
                    </div>
                    </div>
                </div>
                < div className="relative cursor-pointer overflow-hidden">
                    <img className="w-full h-42 md:w-1/3 md:h-full lg:w-full hover:filter brightness-50 transform hover:scale-110 transition ease-in-out duration-800" src="src/assets/News-image-1.png" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                    <a
                    href="#"
                    className="flex-none py-1 bg-black px-1.5 h-1  text-xs font-semibold font-semibold text-gray-200 shadow-sm transition duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                    NEWS
                    </a>
                    <p className=" text-lg mt-2 hover:text-red-500">
                        <strong> What to expect before South Africa's coalition formation and presidential election deadeline on the 25th </strong>
                    </p>
                    </div>
                </div>

                <div>
                    <div className="relative cursor-pointer mb-1 overflow-hidden hover:text-red-500">
                    <img className="w-full h-42 md:w-1/3 md:h-full lg:w-full brightness-50 transform hover:scale-110  transition ease-in-out duration-800" src="src/assets/Politics-Image1.jpg" />
                    <div className="absolute top-10 lg:top-20 left-0 lg:mt-8 p-4 text-white">
                    <a
                    href="#"
                    className="flex-none py-1 bg-red-600 px-1.5 h-1  text-xs font-semibold text-gray-200 shadow-sm transition duration-700 ease-in-out hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                    POLITICS
                    </a>
                    <p className=" text-lg lg:mt-2 hover:text-red-500 ">
                        <strong> Labour vows to reject ₦100,000 minimum wage, may resume strike on Tuesday</strong>
                    </p>
                    </div>
                    </div>

                    < div className="relative cursor-pointer overflow-hidden hover:text-red-500">
                    <img id='sportsPic' className=" hidden lg:block  md:w-1/3 md:h-full lg:w-100 h-10 brightness-50 transform hover:scale-110 transition ease-in-out duration-800 delay-800" src="src/assets/sports-image-1.jpg" />
                    <div className="absolute top-20 left-0 p-4 text-white">
                    <a
                    href="#"
                    className="flex-none hidden lg:block  bg-blue-500  lg:h-6 lg:px-1 lg:py-1 lg:w-12  text-xs font-semibold font-semibold text-gray-200 shadow-sm transition duration-700 ease-in-out  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    
                    >
                    SPORTS
                    </a>
                    <p className=" text-lg mt-2">
                        <strong> Rafael Nadal to skip Wimbledon to avoid grass-to-clay transition for olympics</strong>
                    </p>
                    </div>
                    </div>
                </div>
            </div>

           
        
        </>
    )

}
export default FirstSection
