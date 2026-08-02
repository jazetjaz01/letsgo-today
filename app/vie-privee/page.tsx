import type { Metadata } from "next";
import PrivacyPolicyScreen from "@/components/privacy";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Protection des données",
  description: `Politique de protection des données personnelles de l'application ${SITE_NAME}, conforme au RGPD.`,
};

export default function ViePriveePage() {
  return <PrivacyPolicyScreen />;
}
