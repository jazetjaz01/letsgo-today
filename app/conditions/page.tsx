import type { Metadata } from "next";
import TermsScreen from "@/components/terms";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: `Conditions générales d'utilisation de l'application ${SITE_NAME}, plateforme de mise en relation pour le covoiturage entre particuliers, sans commission.`,
};

export default function ConditionsPage() {
  return <TermsScreen />;
}
