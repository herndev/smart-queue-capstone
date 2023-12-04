"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logo.png";
import BgWaves from "@/assets/bg-waves.png";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import useRequest from "@/hooks/useRequest";

export default function ConcernPage() {
  const request = useRequest();
  const router = useRouter();

  const handlePrintQueue = async () => {
    const res = await request.post('get_que', {
      que_type: 'concern',
    });

    console.log('TICKET RESPONSE: ', res);
    if (res.ok) {
      router.push("/thankyou");
    }
  };

  return (
    <div className="grid w-full h-full place-items-center">
      <div className="relative w-full h-60">
        <Image
          src={BgWaves}
          layout="fill"
          objectPosition="bottom"
          alt="Moelci-II waves"
          className="rotate-180"
        />
      </div>
      <div className="grid w-10/12 p-8 space-y-10 ring ring-black ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 place-items-center">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Moelci-II logo"
          className="absolute top-32"
        />
        <div className="w-full space-y-32 text-center">
          <h2 className="font-heading text-3xl font-bold bg-[#F9D029] w-96 py-4 m-auto rounded-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Concern
          </h2>
          <div className="flex justify-around w-full">
            <Link
              href="#"
              onClick={() => router.back()}
              className={`rounded-none text-xl tracking-wide font-bold bg-black hover:pb-2 text-white ${cn(
                buttonVariants({ size: "lg" }),
              )}`}
            >
              &larr; Back
            </Link>
            <Link
              href="/thankyou"
              onClick={handlePrintQueue}
              className={`rounded-none text-xl tracking-wide font-bold hover:pb-2 text-white ${cn(
                buttonVariants({ size: "lg", variant: "destructive" }),
              )}`}
            >
              Print Q. number
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
