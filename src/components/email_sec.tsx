import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
function Mail(){
    return(
        <div className="py-20 flex flex-col gap-y-8 justify-center items-center relative">
            <span className="text-slate-400  text-9xl absolute left-80 font-bold opacity-20 ">Newsletter</span>
            <span className="text-4xl font-bold flex justify-end px-32">
              Subscribe Our Newsletter
            </span>
            <p className="text-xl">Get the latest information and promo offers directly</p>
            <div className="flex w-full max-w-sm items-center space-x-2 z-10">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Get Started</Button>
            </div>
        </div>
        
  )
}
export default Mail;