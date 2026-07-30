import { Apple, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, PLAY_STORE_URL, SITE_NAME } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-center gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
      <Image
        src="/images/iphone-screen.jpg"
        alt="Aperçu de l'application letsgo sur smartphone"
        width={1108}
        height={1268}
        className="h-auto w-full max-w-xs shrink-0 sm:max-w-sm"
        priority
      />

      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Covoiturez  avec {SITE_NAME}
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Trouvez ou proposez un trajet en quelques clics, partout en France.
          Économisez sur vos déplacements et voyagez à plusieurs, en toute
          simplicité.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="gap-2"
            nativeButton={false}
            render={
              <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" />
            }
          >
            <Apple className="size-5" />
            Télécharger sur l&apos;App Store
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            nativeButton={false}
            render={
              <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" />
            }
          >
            <Play className="size-5" />
            Disponible sur Google Play
          </Button>
        </div>
      </div>
    </div>
  );
}
