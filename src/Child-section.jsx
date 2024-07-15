
export default function Subsection(){

    return(
        <>
 <div className="  flex-wrap p-7 justify-center lg:flex lg:flex-nowrap lg:gap-x-1  ">
    <div>
        < div className="relative cursor-pointer overflow-hidden">
        <img id="pic-1" className="w-25 mt-5 lg:mt-0 h-42 md:w-1/3 md:h-full lg:w-full  brightness-50 hover:transform hover:scale-110 transition ease-in-out duration-300" src="src/assets/metro-image-1.png" />
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


    <div>
    < div className="relative cursor-pointer overflow-hidden">
    <img id="pics"  className="w-20 h-42  md:w-1/3 md:h-full lg:w-full brightness-50 hover:transform hover:scale-110 transition ease-in-out duration-300 sm:w-full"src="src/assets/healt.png" />
    <div className="absolute top-20 left-0 p-4 text-white">
          <a
            href="#"
            className="flex-none  hidden lg:block lg:mt-5 bg-yellow-600  lg:h-6 lg:px-1 lg:py-1 lg:w-12  text-xs font-semibold font-semibold text-gray-200 shadow-sm transition duration-700 ease-in-out  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
            HEALTH
        </a>
        <p className=" text-lg mt-2 hover:text-red-500">
             <strong> Best Eye Health Vitamins and Ocular Supplements</strong>
        </p>
    </div>
    </div>

    </div>


   <div>
   < div className="relative cursor-pointer overflow-hidden">
    <img id="pics"  className="w-20 h-42 md:w-1/3  md:h-full lg:w-full  brightness-50 hover:transform hover:scale-110 transition ease-in-out duration-300" src="src/assets/Kenya-555x370.jpg" />
    <div className="absolute top-20 left-0 p-4 text-white">
          <a
            href="#"
            className="flex-none  hidden lg:block lg:mt-5 bg-red-600  lg:h-6 lg:px-0 lg:py-1 lg:w-12  text-xs font-semibold font-semibold text-gray-200 shadow-sm transition duration-700 ease-in-out  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
            POLITICS
        </a>
        <p className=" text-lg mt-2 hover:text-red-500">
             <strong> Kenyan Parliamentary Panel Calls for Reversal of Proposed Tax Increases</strong>
        </p>
    </div>
    </div>
    

   </div>


 
</div>

<div  className="justify-center">
    <img className="justify-center ml-20" src="src/assets/t3-1024x205.png" alt="" />
    </div>
        </>
    )
}

