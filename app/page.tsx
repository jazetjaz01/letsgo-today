import { Apple, Percent, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, PLAY_STORE_URL, SITE_NAME } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
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

      <div className="mx-auto mb-20 flex w-full max-w-(--breakpoint-md) flex-col items-center gap-4 px-4 text-center sm:px-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary shadow-xl/2 dark:bg-primary/10">
          <Percent className="size-7" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          0% de commission
        </h2>
        <p className="text-lg text-muted-foreground">
          Les plateformes de covoiturage ont peu à peu ajouté des frais qui
          rendent les trajets partagés presque aussi chers qu&apos;un billet
          de train. Chez {SITE_NAME}, le prix que vous fixez est le prix que
          vous touchez : aucune commission n&apos;est prélevée, ni sur les
          trajets, ni sur les réservations. 100% du prix revient au
          conducteur.
        </p>
       
      </div>
    </div>
  );
}
