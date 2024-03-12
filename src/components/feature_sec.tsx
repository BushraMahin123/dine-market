import Image from "next/image";
function FeatureSec(){
    return(
        <div className="relative">
            <span className="text-5xl font-bold flex justify-end px-32 ">
                Unique and <br/> Authentic
                 Vintage<br/> Designer
                  Jewellery
            </span>
            <div className="flex gap-10 bg-slate-200 md:w-full w-full justify-center items-center md:py-20 py-10  relative">
                <span className="text-slate-400 w-40 text-8xl absolute left-52 opacity-20 z-10">Different from others</span>
                <div className="flex flex-col gap-10 ">
                    <div className="w-40 flex flex-col gap-y-5">
                        <span className="font-bold">Using Good Quality Materials</span>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className="w-40 flex flex-col gap-y-5">
                        <span className="font-bold">Modern Fashion Design</span>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10 ">
                    <div className="w-40 flex flex-col gap-y-5">
                        <span className="font-bold">100% Handmade Products</span>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className="w-40 flex flex-col gap-y-5">
                        <span className="font-bold">Discount for Bulk Orders</span>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div>
                    <Image src={'/feature.webp'} width={300} height={300} alt="featuresec"/>
                </div>
                <div className="flex flex-col gap-10 ">
                    <div className="w-44 flex flex-col gap-y-5">
                        <p>This piece is ethically crafted in our small family-owned workshop in Peru with 
                            unmatched attention to detail and care. The Natural color is the actual natural
                             color of the fiber, undyed and 100% traceable.</p>
                    </div>
                    <button className="w-28 justify-center bg-slate-900 border-2 border-b-4 border-slate-900 text-white text-md font-bold flex">
                                See All<br/> Products
                    </button>
                </div>

            </div>
        </div>
    )
}
export default FeatureSec;