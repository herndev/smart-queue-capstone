import Image from "next/image";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  return (
    <div className="grid w-full h-full bg-orange-400 place-items-center">
      <div>
        <Image src={Logo} width={200} height={200} alt="Moelci-II logo" />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-red-600 uppercase">
          Welcome to moelci-ii
        </h1>
        <h2>Bonifacio Branch</h2>
        <Button>Proceed</Button>
      </div>
    </div>
  );
}
