import { Apple, HeartHandshake, Percent, Play, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, PLAY_STORE_URL, SITE_NAME } from "@/lib/site-config";

const values = [
  {
    icon: Percent,
    title: "0% de commission",
    description:
      "Le prix que vous fixez est le prix que vous touchez. Pas de frais cachés, pas de pourcentage prélevé sur vos trajets.",
  },
  {
    icon: Users,
    title: "Accessible à tous",
    description:
      "Étudiants, salariés, retraités : nous voulons que covoiturer redevienne un réflexe simple pour tous les trajets du quotidien.",
  },
  {
    icon: HeartHandshake,
    title: "Un projet solidaire",
    description: `${SITE_NAME} est né d'une conviction : partager un trajet doit rapprocher les gens, pas remplir les caisses d'une plateforme.`,
  },
];

const About = () => (
  <div className="flex flex-col items-center py-16">
    <div className="text-center">
      <b className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
        {SITE_NAME}
      </b>
      <h1 className="mt-3 font-medium text-4xl tracking-tight">
        Qui sommes-nous ?
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Notre projet est simple : rendre à nouveau accessible le covoiturage,
        avec un taux de commission de 0%.
      </p>
    </div>

    <div className="mx-auto mt-16 flex max-w-(--breakpoint-md) flex-col items-center gap-4 px-6 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary shadow-xl/2 dark:bg-primary/10">
        <span className="font-bold text-4xl">0%</span>
      </div>
      <p className="text-lg text-muted-foreground">
        Les plateformes de covoiturage ont peu à peu ajouté des frais qui
        rendent les trajets partagés presque aussi chers qu&apos;un billet de
        train. Nous avons créé {SITE_NAME} pour inverser cette tendance : 100%
        du prix du trajet revient au conducteur, 0% de commission prélevée
        par {SITE_NAME}.
      </p>
    </div>

    <div className="mx-auto grid max-w-(--breakpoint-xl) gap-16 px-6 py-24 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-3">
      {values.map(({ icon: Icon, title, description }) => (
        <div key={title} className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-primary/5 text-primary shadow-xl/2 dark:bg-primary/10">
            <Icon />
          </div>
          <h3 className="mt-6 font-medium text-xl">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>

    <div className="flex flex-col items-center gap-6 px-6 text-center">
      <h2 className="font-medium text-2xl tracking-tight">
        Rejoignez le mouvement
      </h2>
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

export default About;
