import './index.css'
export default function Secondsection(){

    return(
        <>
            <div className="mt-8 justify-center px-3 block">


                <div className="flex flex-wrap gap-x-2 flex-wrap " id="top-stories-container" >
                    <div>
                        <a
                        href="#"
                        
                        className= "flex-none py-3 bg-red-500 px-3.5 py-1 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                        <b> TOP STORIES </b>
                        </a>
                    </div>
                    
                    <div id='menu' className="flex item-center gap-x-3 ml-3 mt-3">
                        <a href="#" className="hover:text-red-600 text-sm text-red-600"> <strong>World</strong></a>
                        <a href="#" className="hover:text-red-600 text-sm text-gray-800"> <strong>News</strong></a>
                        <a href="#" className="hover:text-red-600 text-sm text-gray-800"> <strong>Stories</strong></a>
                        <a href="#" className="hover:text-red-600 text-sm text-gray-800"> <strong>Trending:</strong></a>

                    </div>                
                </div>

                
                <div className="flex  flex-wrap gap-x-10 justify-center  md:flex-wrap ">
                    <div  className=" mb-8 overflow-hidden relative flex flex-wrap gap-x-5 mt-2" >
                        <div>
                            <img  id='world1-pic' className=" block cursor-pointer w-50 h-50 brightness-50 hover:transform hover:scale-110 transition ease-in-out duration-800 delay-900" src="src/assets/World-image-3.png" alt="" />
                            <div className="absolute lg:top-20 top-5 mt-10 left-0 p-4 text-white">
                                <a
                                href="#"
                                className="flex-none py-1 bg-black px-1.5 h-1 mt-5 text-xs font-semibold text-gray-200 shadow-sm transition duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                >
                                WORLD
                                </a>
                                <p id='pic1-text' className=" text-lg w-20 lg:mt-10  hover:text-red-500 cursor-pointer">
                                    <strong> Russian missile strike kills 9 in Zelensky's hometown - officials</strong>
                                </p>
                            </div>
                        </div>

                        <div className='mt-7 justify-center  lg:mt-0'>
                            <div className='flex mb-2 hover:brightness-50 hover:text-red-600 cursor-pointer'>
                                <img className='h-20 cursor-pointer '  src='src/assets/World2-Image 1.png' alt='' />
                                <div >
                                    <p className='text-gray-700 text-sm ml-2'>June 17, 2024</p>
                                    <p className='text-gray-800 ml-2 hover:text-red-500'><strong>Israel, Hamas accused of war crimes  <br />in new UN report </strong></p>
                                </div>
                            </div>

                            <div className='flex mb-2  hover:brightness-50 hover:text-red-600 cursor-pointer'>
                                <img className='h-20 cursor-pointer '  src='src/assets/Tesla.png' alt='' />
                                <div >
                                    <p className='text-gray-700 text-sm ml-2'>June 17, 2024</p>
                                    <p className='text-gray-800 ml-2 hover:text-red-500'><strong>Tesla pays fight tests power of <br />ELon musk's mystique </strong></p>
                                </div>
                            </div>

                            <div className='flex mb-2 hover:brightness-50 hover:text-red-600 cursor-pointer'>
                                <img className='h-20 cursor-pointer '  src='src/assets/Electric cars.png' alt='' />
                                <div >
                                    <p className='text-gray-700 text-sm ml-2'>June 17, 2024</p>
                                    <p className='text-gray-800 ml-2 hover:text-red-600'><strong>Why the EU might be about to make  <br />chinese electric cars </strong></p>
                                </div>
                            </div>

                            <div className='flex  hover:brightness-50 hover:text-red-600 cursor-pointer'>
                                <img className='h-20 cursor-pointer '  src='src/assets/Hezbollah.jpg' alt='' />
                                <div >
                                    <p className='text-gray-700 text-sm ml-2'>June 18, 2024</p>
                                    <p className='text-gray-800 ml-2 hover:text-red-500'><strong>Hezbollah reports strikes <br/>on 9 Isreali military sites <br/> using rockets and drones </strong></p>

                                </div>
                            </div>
                        </div>                        
                    </div>
                    
                   
                    <div id='world1-pic2-cont p-2'  className='mb-2 '>
                        <div>
                            <a
                            href="#"                        
                            className= "flex-none py-3 bg-black px-3.5 py-1 mb-5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                            >
                            <b> STAY CONNECTED </b>
                            </a>
                        </div>
                        
                        <img id='world1-pic2' className='w-30 mt-4 '  src='src/assets/connected-image1.png' />
                    </div>
                </div>

            </div>
        </>
    )
}