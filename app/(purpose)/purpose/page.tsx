import Image from "next/image"
import Logo from "@/assets/logo.png"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function PurposePage() {
  return (
    <div className="grid w-full h-full place-items-center">
      <div className="grid w-full h-full grid-row-2">
        <div className="bg-[#E80203]">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="bg-[#F9D029]">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <Image
        src={Logo}
        width={200}
        height={200}
        alt="Moelci-II logo"
        className="top-24"
      />
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-[#E80203] leading-[1.1] sm:text-3xl md:text-6xl">
          Choose your purpose of visit
        </h2>
        <div className="flex flex-col items-center pt-10 space-y-8">
          <Link
            href="/purpose/concern"
            className={`text-xl tracking-wide font-extrabold hover:bg-yellow-300 text-black ${cn(
              buttonVariants({ size: "lg" })
            )}`}
          >
            Concern
          </Link>
          <Link
            href="/purpose/payment"
            className={`text-xl tracking-wide font-extrabold hover:bg-yellow-300 text-black ${cn(
              buttonVariants({ size: "lg" })
            )}`}
          >
            Payment
          </Link>
        </div>
      </div>
    </div>
  )
}
