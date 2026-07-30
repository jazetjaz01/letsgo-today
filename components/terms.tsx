import {
  LegalDocumentScreen,
  type LegalDocumentSection,
} from "@/components/legal-document-screen";

const LAST_UPDATED = "29 juillet 2026";

const SECTIONS: LegalDocumentSection[] = [
  {
    title: "Article 1 : Objet et champ d'application",
    blocks: [
      {
        type: "text",
        content:
          "Les présentes Conditions Générales d'Utilisation (ci-après les « CGU ») régissent l'accès et l'utilisation de l'application mobile Letsgo (ci-après l'« Application »), éditée par la société Merci Immobilier, immatriculée et domiciliée au 7 Avenue de Banyuls sur Mer, 66100 Perpignan (ci-après l'« Éditeur »).",
      },
      {
        type: "text",
        content:
          "L'Application a pour unique objet de faciliter la mise en relation entre des conducteurs non professionnels voyageant pour leur propre compte et des passagers souhaitant effectuer le même trajet, dans le cadre d'un partage de frais de covoiturage (frais de carburant et de péage).",
      },
      {
        type: "text",
        content:
          "L'utilisation de l'Application implique l'acceptation pleine, entière et sans réserve des présentes CGU par l'utilisateur (conducteur ou passager).",
      },
    ],
  },
  {
    title: "Article 2 : Mentions légales",
    blocks: [
      {
        type: "text",
        content:
          "L'Application Letsgo est éditée par la société Merci Immobilier :",
      },
      {
        type: "list",
        items: [
          "Adresse postale : 7 Avenue de Banyuls sur Mer, 66100 Perpignan, France. Rcs : 852 226 620 00015",
          "Activité de la plateforme : simple mise en relation technique de covoiturage. L'Éditeur n'agit en aucun cas comme transporteur, organisateur de transport, agence de voyage ou prestataire de services de transport routier.",
        ],
      },
    ],
  },
  {
    title: "Article 3 : Inscription et compte utilisateur",
    blocks: [
      {
        type: "text",
        content:
          "Pour utiliser l'Application et accéder au service de mise en relation, l'utilisateur doit créer un compte personnel. L'utilisateur s'engage à fournir des informations exactes, sincères et à jour lors de son inscription.",
      },
      {
        type: "text",
        content:
          "Chaque utilisateur ne peut créer qu'un seul compte. L'accès au compte est protégé par des identifiants confidentiels que l'utilisateur s'engage à ne pas divulguer.",
      },
    ],
  },
  {
    title: "Article 4 : Fonctionnement du covoiturage et absence de commission",
    blocks: [
      {
        type: "text",
        content:
          "4.1. Nature du service : Letsgo met exclusivement en relation des particuliers souhaitant partager un trajet en voiture. Sont strictement exclues toutes prestations de transport collectif par bus, train ou tout autre mode de transport public ou privé rémunéré.",
      },
      {
        type: "text",
        content:
          "4.2. Absence de commission : l'utilisation de l'Application et la mise en relation sont entièrement gratuites. L'Éditeur (Merci Immobilier) ne prélève aucune commission, frais de service ou redevance sur les trajets partagés via l'Application.",
      },
      {
        type: "text",
        content:
          "4.3. Caractère non professionnel du covoiturage : le conducteur s'engage à ne réaliser aucun bénéfice financier par le biais de Letsgo. La participation financière demandée par le conducteur au passager sert exclusivement à couvrir une partie des frais réels du trajet (carburant et péages autoroutiers), conformément à la législation en vigueur sur le covoiturage entre particuliers.",
      },
    ],
  },
  {
    title: "Article 5 : Modalités de paiement (espèces entre utilisateurs)",
    blocks: [
      {
        type: "text",
        content:
          "5.1. Absence de module de paiement en ligne : l'Application Letsgo ne dispose d'aucun système de paiement électronique intégré (pas de paiement par carte bancaire, pas de portefeuille électronique géré par l'Éditeur).",
      },
      {
        type: "text",
        content:
          "5.2. Paiement direct en espèces : toutes les transactions financières relatives à la participation aux frais s'effectuent directement, hors application, de manière physique et en espèces entre le passager et le conducteur au moment du trajet.",
      },
      {
        type: "text",
        content:
          "5.3. Responsabilité financière : l'Éditeur (Merci Immobilier) n'intervient à aucun moment dans la transaction financière entre les utilisateurs et décline toute responsabilité en cas de litige, de non-paiement, de contestation du montant ou d'échange d'espèces entre conducteurs et passagers.",
      },
    ],
  },
  {
    title: "Article 6 : Obligations et responsabilités des utilisateurs",
    blocks: [
      {
        type: "text",
        content:
          "6.1. Obligations communes : les utilisateurs s'engagent à respecter les lois et règlements en vigueur, à faire preuve de courtoisie et à honorer les réservations de covoiturage validées.",
      },
      {
        type: "text",
        content:
          "6.2. Obligations du conducteur : le conducteur certifie expressément :",
      },
      {
        type: "list",
        items: [
          "Être titulaire d'un permis de conduire valide et en cours de validité.",
          "Posséder un véhicule assuré pour le covoiturage (assurance responsabilité civile automobile valide) et en bon état de contrôle technique.",
          "Ne pas exercer d'activité commerciale ou de transport public de voyageurs.",
          "Respecter scrupuleusement le Code de la route.",
        ],
      },
      {
        type: "text",
        content:
          "6.3. Obligations du passager : le passager s'engage à se présenter à l'heure et au lieu convenus avec le conducteur et à régler directement la participation aux frais en espèces convenue.",
      },
    ],
  },
  {
    title: "Article 7 : Gestion des retards et exécution du trajet",
    blocks: [
      {
        type: "text",
        content:
          "7.1. Ponctualité : Les conducteurs et les passagers s'engagent à faire leurs meilleurs efforts pour respecter les horaires et les lieux de rendez-vous convenus via l'Application.",
      },
      {
        type: "text",
        content:
          "7.2. Absence de garantie de ponctualité par l'Éditeur : L'Éditeur (Merci Immobilier) n'exerce aucun contrôle sur l'acheminement des véhicules, les conditions de circulation, les pannes ou les impondérables de la route. Par conséquent, l'Éditeur ne garantit en aucun cas la ponctualité des conducteurs et ne saurait voir sa responsabilité engagée en cas de retard, de modification d'itinéraire ou d'annulation de dernière minute d'un trajet.",
      },
      {
        type: "text",
        content:
          "7.3. Responsabilité entre utilisateurs en cas de retard : En cas de retard important ou d'absence d'une des parties au point de rendez-vous, les utilisateurs sont invités à communiquer directement entre eux par les moyens mis à leur disposition. L'Éditeur décline toute responsabilité quant aux préjudices directs ou indirects (manqués de transports, rendez-vous manqués, frais supplémentaires) résultant d'un retard ou d'un défaut d'exécution du trajet par l'un des participants.",
      },
    ],
  },
  {
    title: "Article 8 : Limitation de responsabilité de l'Éditeur",
    blocks: [
      {
        type: "text",
        content:
          "La société Merci Immobilier agit en qualité de simple hébergeur technique et fournisseur d'une application de mise en relation. En conséquence, l'Éditeur ne saurait être tenu pour responsable :",
      },
      {
        type: "list",
        items: [
          "De l'annulation d'un trajet, d'un retard, d'un comportement inapproprié ou d'un défaut de ponctualité d'un utilisateur.",
          "Des accidents de la route, dommages corporels, matériels ou pannes survenant lors d'un trajet covoituré.",
          "Des litiges financiers, désaccords ou défauts de paiement en espèces entre le conducteur et le passager.",
          "Des interruptions, bugs ou dysfonctionnements techniques de l'Application.",
        ],
      },
    ],
  },
  {
    title: "Article 9 : Force majeure",
    blocks: [
      {
        type: "text",
        content:
          "9.1. Définition : Est considérée comme un cas de force majeure, au sens des présentes CGU, tout événement extérieur, imprévisible et irrésistible au sens de l'article 1218 du Code civil et de la jurisprudence des tribunaux français, rendant impossible l'exécution par l'Éditeur ou par l'un des utilisateurs de leurs obligations respectives.",
      },
      {
        type: "text",
        content:
          "9.2. Exonération de responsabilité : Aucune des parties (ni l'Éditeur, ni les utilisateurs conducteurs ou passagers) ne pourra être tenue pour responsable d'un retard ou d'un manquement dans l'exécution de ses obligations si ce retard ou manquement résulte directement d'un cas de force majeure (tels que, sans s'y limiter : catastrophes naturelles, intempéries exceptionnelles, grèves nationales ou sectorielles, pannes massives des réseaux de télécommunication, décisions gouvernementales ou administratives, pandémies, etc.).",
      },
    ],
  },
  {
    title: "Article 10 : Données personnelles et vie privée",
    blocks: [
      {
        type: "text",
        content:
          "Les données collectées lors de l'inscription et de l'utilisation de l'Application Letsgo sont traitées conformément au Règlement Général sur la Protection des Données (RGPD). L'utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles qu'il peut exercer en contactant l'Éditeur à son siège social ou via la rubrique « Nous contacter » de l'Application. Le détail de ces traitements figure dans la Politique de protection des données de l'Application.",
      },
    ],
  },
  {
    title: "Article 11 : Modification des CGU",
    blocks: [
      {
        type: "text",
        content:
          "L'Éditeur se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs seront informés des modifications substantielles via l'Application. L'utilisation continue de l'Application après modification vaut acceptation des nouvelles CGU.",
      },
    ],
  },
  {
    title: "Article 12 : Loi applicable et juridiction compétente",
    blocks: [
      {
        type: "text",
        content:
          "Les présentes CGU sont soumises au droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, et à défaut de résolution amiable, compétence exclusive est attribuée aux tribunaux compétents du ressort de Perpignan.",
      },
    ],
  },
  {
    title: "Article 13 : Contact",
    blocks: [
      {
        type: "text",
        content:
          "Pour toute question relative aux présentes CGU, au fonctionnement de l'Application ou pour exercer vos droits sur vos données personnelles, vous pouvez contacter l'Éditeur via la rubrique « Nous contacter » de l'Application, ou par courrier à l'adresse du siège social indiquée à l'Article 2.",
      },
    ],
  },
];

export default function TermsScreen() {
  return (
    <LegalDocumentScreen
      title="Conditions générales d'utilisation"
      lastUpdated={LAST_UPDATED}
      intro="Éditeur : Merci Immobilier — 7 Avenue de Banyuls sur Mer, 66100 Perpignan, France. Plateforme de mise en relation entre conducteurs et passagers pour des trajets partagés (covoiturage)."
      sections={SECTIONS}
    />
  );
}