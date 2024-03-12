import Hero_Section from "@/components/Herosection"
import Promotions from "@/components/promotions"
import ProductsSec from "./(Products)/product/page"
import FeatureSec from "@/components/feature_sec"
import Mail from "@/components/email_sec"
import { CartProvider } from "./context/cart_context"
export default function Home() {
  return (
    <CartProvider>
      <div className="px-12">
          <Hero_Section/>
          <Promotions/>
          <ProductsSec/>
          <FeatureSec/>
          <Mail/>
      </div>
    </CartProvider>
  )
}
