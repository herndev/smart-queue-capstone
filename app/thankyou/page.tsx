"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.clear();
      router.push("/");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="grid w-full h-full pt-4 place-items-center">
      <Image src={Logo} width={200} height={200} alt="Moelci-II logo" />
      <div className="text-center">
        <h1 className="p-4 text-3xl font-extrabold text-[#E80203] font-heading sm:text-5xl md:text-6xl lg:text-7xl">
          Thank You!
        </h1>
        <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Have a great day!
        </h2>
        <div className="pt-6">
          <Image
            src={Logo}
            className="m-auto"
            width={150}
            height={150}
            alt="Emoticon logo"
          />
        </div>
      </div>
      <div className="grid w-full h-full mt-14 grid-row-2">
        <div className="bg-[#F9D029]">
          <p>&nbsp;</p>
        </div>
        <div className="bg-[#E80203]">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}
