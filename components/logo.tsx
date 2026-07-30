import Image from "next/image";

export const Logo = () => (
  <div className="relative h-8 w-24">
    <Image
      src="/logo-100.svg"
      alt="Logo Let's Go"
      fill
      className="object-contain object-left"
      priority
    />
  </div>
);