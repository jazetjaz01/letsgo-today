import {
  LegalDocumentScreen,
  type LegalDocumentSection,
} from "@/components/legal-document-screen";

const LAST_UPDATED = "29 juillet 2026";

const SECTIONS: LegalDocumentSection[] = [
  {
    title: "1. Généralités",
    blocks: [
      {
        type: "text",
        content:
          "La présente Politique de protection des données décrit comment la société Merci Immobilier (ci-après l'« Éditeur »), éditrice de l'application Letsgo, collecte, utilise, partage et protège vos données personnelles lorsque vous utilisez l'Application, conformément au Règlement Général sur la Protection des Données (RGPD).",
      },
      {
        type: "text",
        content:
          "Letsgo est une plateforme de mise en relation entre conducteurs et passagers pour des trajets de covoiturage partagés. Elle n'est ni transporteur, ni intermédiaire de paiement : voir à ce titre les Conditions générales d'utilisation.",
      },
    ],
  },
  {
    title: "2. Les données que nous collectons",
    blocks: [
      {
        type: "text",
        content:
          "2.1. Données que vous nous transmettez directement : prénom, nom, adresse email, numéro de téléphone, date de naissance, adresse postale, photo de profil, minibio, préférences de voyage (discussion, musique, cigarette, animaux), informations sur votre véhicule (marque, modèle, couleur), trajets que vous publiez ou réservez, messages échangés avec d'autres membres via la messagerie de l'Application, ainsi que les avis et notes que vous laissez ou recevez.",
      },
      {
        type: "text",
        content:
          "2.2. Données collectées automatiquement : la localisation approximative que vous renseignez pour rechercher ou publier un trajet (villes de départ et d'arrivée), ainsi que les données techniques strictement nécessaires au fonctionnement et à la sécurité de l'Application.",
      },
      {
        type: "text",
        content:
          "2.3. Durée de conservation : vos données sont conservées tant que votre compte est actif. En cas de clôture de compte, elles sont supprimées ou anonymisées sous 30 jours, sauf lorsqu'une durée de conservation plus longue est nécessaire pour répondre à une obligation légale ou traiter un litige ou un signalement en cours.",
      },
    ],
  },
  {
    title: "3. Comment nous utilisons vos données",
    blocks: [
      {
        type: "list",
        items: [
          "Fournir le service : créer votre profil, publier ou rechercher des trajets, gérer vos réservations et vous mettre en relation avec les autres membres.",
          "Sécurité et lutte contre la fraude : traiter les signalements et blocages entre utilisateurs, modérer les contenus manifestement abusifs.",
          "Communication : vous envoyer les notifications que vous avez choisi d'activer dans vos Préférences de communication (compte et réservations, messages d'autres membres, actualités, marketing, sondages).",
          "Amélioration de l'Application : mesurer l'usage et les performances, uniquement si vous avez activé cette option dans « Mesure de performances ».",
          "Respect de nos obligations légales, notamment en cas de demande d'une autorité compétente.",
        ],
      },
    ],
  },
  {
    title: "4. Partage de vos données",
    blocks: [
      {
        type: "list",
        items: [
          "Avec les autres utilisateurs : votre prénom, votre photo de profil, votre note moyenne et, une fois une réservation confirmée, votre numéro de téléphone, sont visibles par l'autre membre du trajet concerné.",
          "Avec notre prestataire d'hébergement technique, qui stocke vos données de manière sécurisée pour notre compte et n'est autorisé à les utiliser à aucune autre fin.",
          "Avec des partenaires publicitaires tiers, uniquement si vous avez explicitement activé la catégorie « Publicités de tiers » dans vos Préférences de communication (désactivée par défaut).",
          "Avec les autorités administratives ou judiciaires compétentes, lorsque la loi nous y oblige.",
        ],
      },
      {
        type: "text",
        content: "Letsgo ne vend jamais vos données personnelles à des tiers.",
      },
    ],
  },
  {
    title: "5. Transfert de données hors Union européenne",
    blocks: [
      {
        type: "text",
        content:
          "Nous nous efforçons de conserver vos données au sein de l'Union européenne. Si un transfert hors UE devait s'avérer nécessaire, il serait encadré par des garanties appropriées (notamment des clauses contractuelles types approuvées par la Commission européenne).",
      },
    ],
  },
  {
    title: "6. Sécurité de vos données",
    blocks: [
      {
        type: "text",
        content:
          "Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre l'accès non autorisé, la perte ou l'altération. L'accès à votre compte est protégé par des identifiants confidentiels dont vous êtes seul responsable (voir « 8. Confidentialité du mot de passe »).",
      },
    ],
  },
  {
    title: "7. Vos droits",
    blocks: [
      {
        type: "text",
        content:
          "Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :",
      },
      {
        type: "list",
        items: [
          "Droit d'accès et de rectification de vos données.",
          "Droit à l'effacement de vos données.",
          "Droit d'opposition, notamment à l'utilisation de vos données à des fins marketing (via vos Préférences de communication).",
          "Droit à la limitation du traitement et à la portabilité de vos données.",
          "Droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).",
        ],
      },
      {
        type: "text",
        content:
          "Vous pouvez exercer ces droits en nous contactant via la rubrique « Nous contacter » de l'Application, ou par courrier à l'adresse du siège social indiquée à l'article 9.",
      },
    ],
  },
  {
    title: "8. Confidentialité du mot de passe",
    blocks: [
      {
        type: "text",
        content:
          "Vous êtes seul responsable de la confidentialité des identifiants permettant d'accéder à votre compte et vous engagez à ne les communiquer à personne.",
      },
    ],
  },
  {
    title: "9. Modification de la présente politique",
    blocks: [
      {
        type: "text",
        content:
          "Nous pouvons être amenés à modifier la présente Politique de protection des données, notamment pour refléter une évolution de l'Application ou de la réglementation. Toute modification substantielle vous sera signalée via l'Application. Nous vous invitons à la consulter régulièrement.",
      },
    ],
  },
  {
    title: "10. Contact",
    blocks: [
      {
        type: "text",
        content:
          "Pour toute question relative à la présente politique ou à l'utilisation de vos données personnelles, vous pouvez contacter l'Éditeur via la rubrique « Nous contacter » de l'Application, ou par courrier à l'adresse suivante : Merci Immobilier, 7 Avenue de Banyuls sur Mer, 66100 Perpignan, France.",
      },
    ],
  },
];

export default function PrivacyPolicyScreen() {
  return (
    <LegalDocumentScreen
      title="Protection des données"
      lastUpdated={LAST_UPDATED}
      intro="Éditeur : Merci Immobilier — 7 Avenue de Banyuls sur Mer, 66100 Perpignan, France."
      sections={SECTIONS}
    />
  );
}
