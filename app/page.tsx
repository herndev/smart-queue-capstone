import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function WelcomePage() {
  return (
    <div className="grid w-full h-full bg-orange-400 place-items-center">
      <div>
        <Image src={Logo} width={200} height={200} alt="Moelci-II logo" />
      </div>
      <div className="text-center">
        {/* <h1 className="font-bold text-red-600 uppercase">
          Welcome to moelci-ii
        </h1> */}
        <h1 className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">
          WELCOME TO MOELCI-II
        </h1>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Bonifacio Branch
        </h2>
        <div className="space-x-4">
          <Link href="/purpose" className={cn(buttonVariants({ size: "lg" }))}>
            Proceed
          </Link>
          {/* <p>{currentDate}</p>
            <p>{currentTime}</p> */}
        </div>
      </div>
    </div>
  );
}
