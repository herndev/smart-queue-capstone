import Image from "next/image"
import Logo from "@/assets/logo.png"
import WavesBg from "@/assets/bg-svg.png"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function WelcomePage() {
  return (
    <div className="grid w-full h-full pt-4 place-items-center">
      <Image src={Logo} width={200} height={200} alt="Moelci-II logo" />
      <div className="text-center">
        <h1 className="p-6 text-3xl font-extrabold text-[#E80203] font-heading sm:text-5xl md:text-6xl lg:text-7xl">
          WELCOME TO MOELCI-II
        </h1>
        <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Bonifacio Branch
        </h2>
        <div className="pt-8 space-x-4 ">
          <Link
            href="/purpose"
            className={`text-xl tracking-wide font-extrabold bg-[#F9D029] hover:bg-yellow-300 text-black ${cn(
              buttonVariants({ size: "lg" })
            )}`}
          >
            Proceed
          </Link>
        </div>
      </div>
      <div className="grid w-full h-full mt-20 grid-row-2">
        <div className="bg-[#F9D029]">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="bg-[#E80203]">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  )
}
