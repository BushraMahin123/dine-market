import Image from "next/image";
import { ShoppingCart } from "lucide-react";

function Hero_Section(){
    return(
        <main className="py-12">
            <div className="flex">
                <div className="sm:w-2/3 lg:w-2/5 ">
                    <span className="bg-blue-200 font-bold rounded-md text-blue-700 p-3">
                        Sale 70%
                    </span>
                        <h1 className="mt-5 uppercase text-4xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            An industrial
                            <span className="text-5xl sm:text-5xl">
                            Take on
                            </span>
                            <span className="text-5xl sm:text-5xl">
                            Streetwear
                            </span>
                        </h1>
                        <p className="mt-5 text-sm sm:text-base text-gray-700 dark:text-white">
                        Anyone can beat you but no one can<br/>
                        beat your outfit as long as you wear<br/>
                        Dine outfits.
                        </p>
                        <button className="p-3 mt-5  bg-slate-900 border-2 border-b-4 border-slate-900 text-white text-md font-bold flex gap-5">
                            <ShoppingCart/>
                                Start<br/> Shopping 
                        </button>
                        <div className="flex gap-3 mt-5">
                            <Image src={'/bazaar.webp'} width={100} height={100} alt="Bazaar"/>
                            <Image src={'/bustle.webp'} width={100} height={100} alt="Bustle"/>
                            <Image src={'/versace.webp'} width={100} height={100} alt="Versace"/>
                            <Image src={'/instyle.webp'} width={100} height={100} alt="Instyle"/>
                        </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <Image 
                        src={'/MainImage.png'} 
                        height={740} 
                        width={740} 
                        alt="Herosec"
                    />
                </div>
                </div>
            
       
    </main>
    )
}
export default Hero_Section;