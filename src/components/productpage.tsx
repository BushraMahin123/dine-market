// import * as React from "react"
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel"

// function Products(){
//     return(
//         <div className="flex flex-col items-center justify-center mb-10">
//             <div>
//                 <div className="text-[#0062f5] uppercase font-sora font-bold flex justify-center">Products</div>
//                 <h1 className="font-bold text-5xl">Check What We Have</h1>
//             </div>
 

//             <Carousel
//             opts={{
//                 align: "start",
//             }}
//             className="w-full"
//             >
//             <CarouselContent>
//                 {Array.from({ length: 5 }).map((_, index) => (
//                 <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 transform transition duration-500 hover:scale-125">
//                     <div className="p-1">
//                     <Card className="bg-slate-300">
//                         <CardContent className="flex aspect-square items-center justify-center p-6">
//                             <Image src={'/herosection.webp'} width={400} height={400} alt="img"/>
//                         </CardContent>
//                     </Card>
//                     </div>
//                 </CarouselItem>
//                 ))}
//             </CarouselContent>
//             </Carousel>
        

//         </div>
//     )
// };
// export default Products;