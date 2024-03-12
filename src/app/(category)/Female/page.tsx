"use client"
import Image from "next/image";
function FemaleSection(){
    return(
  // <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            <div className="bg-white p-4">
              <Image src={'/event1.webp'} alt="Placeholder Image" width={300} height={300}/>
              <div className="px-11 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image src={"/event1.webp"} alt="Placeholder Image" width={300} height={300}/>
              <div className="px-11 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image src={"/event1.webp"} alt="Placeholder Image" width={300} height={300}/>
              <div className="px-11 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image src={"/event1.webp"} width={300} height={300} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"/>
              <div className="px-11 py-4">
                <div className="font-bold text-xl mb-2">Blog Title</div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image src={"/event1.webp"} width={300} height={300} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"/>
              <div className="px-11 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image src={"/event1.webp"} width={300} height={300} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"/>
              <div className="px-11 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
              </div>
            </div>
          </div>
        </div>
      // </div>
    )
};
export default FemaleSection;