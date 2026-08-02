import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site-config";

const links = [
 
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Conditions Générales",
    href: "/conditions",
  },
  {
    title: "Vie privée",
    href: "/vie-privee",
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-background px-6 py-2">
      <div className="mx-auto w-full max-w-screen-2xl divide-y">
        <div className="flex flex-col items-center justify-between gap-4 px-2 pt-3 pb-5 sm:flex-row">
          <Link className="flex items-center gap-2" href="/">
            <Image src="/logo-100.svg" alt="Logo Let's Go" width={24} height={24} />
            <span className="font-semibold text-lg text-primary">{SITE_NAME}</span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium text-sm">
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-4 px-2 pt-4 pb-2 sm:flex-row">
          <p className="font-medium text-muted-foreground text-sm">
            Copyright &copy; {new Date().getFullYear()} {SITE_NAME}. Application de covoiturage
          </p>
{/* Desktop Menu 
          <div className="flex items-center gap-4">
            <Link href="/">
              <Dribbble className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link href="/">
              <Twitter className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link href="/">
              <Github className="h-5 w-5 text-muted-foreground" />
            </Link>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
