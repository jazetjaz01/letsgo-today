import type { Metadata } from "next";
import PrivacyPolicyScreen from "@/components/privacy";

export const metadata: Metadata = {
  title: "Protection des données",
  description:
    "Politique de protection des données personnelles de l'application letsgo, conforme au RGPD.",
};

export default function ViePriveePage() {
  return <PrivacyPolicyScreen />;
}
