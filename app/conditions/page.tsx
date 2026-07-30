import type { Metadata } from "next";
import TermsScreen from "@/components/terms";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation de l'application letsgo, plateforme de mise en relation pour le covoiturage entre particuliers, sans commission.",
};

export default function ConditionsPage() {
  return <TermsScreen />;
}
