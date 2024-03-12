import Image from "next/image";
function Promotions(){
    return(
        <div className="flex flex-col  justify-center mb-10">
            <div>
                <div className="text-[#0062f5] uppercase font-sora font-bold flex justify-center">Promotions</div>
                <h1 className="font-bold text-5xl flex items-center justify-center">Our Promotions Events</h1>
            </div>
            <div className="flex gap-5 py-5 ">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center px-10 bg-slate-300 border border-gray-200 shadow">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GET UP<br/> TO 60%<br/>
                        For the summer<br/> season1</h5>
                        <Image src={'/event1.webp'} height={200} width={200} alt="event1"/>
                    </div>
                    <div className="bg-black text-white  uppercase flex flex-col items-center px-20 py-10 font-bold text-lg">
                        Get 30% off<br/>
                        Use promo code
                        <p className="uppercase w-full bg-slate-900 p-1 rounded-md flex items-center justify-center">Dineweekendsale</p> 
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="bg-[#efe1c7] px-10">
                        <h5 className="mt-3 tracking-tight text-gray-900 dark:text-white">
                        Flex Sweatshirt<br/>
                        <span className="line-through">$100.00</span>  <span className="font-bold">$75.00</span>
                        </h5>
                        <Image className="mt-8" src={'/event2.webp'} height={200} width={200} alt="event2"/>
                    </div>
                    <div className="bg-slate-300 px-10">
                        <h5 className="mt-3 tracking-tight text-gray-900 dark:text-white">
                        Flex Push Button Bomber<br/>
                        <span className="line-through">$225.00</span>  <span className="font-bold">$190.00</span>
                        </h5>
                        <Image className="mt-8" src={'/event3.webp'} height={200} width={200} alt="event3"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
};
export default Promotions;