export interface ServiceItem {
  id: string;
  title: string;
  kicker: string;
  description: string;
  imageUrl: string;
  iconName: string;
  count: number;
  accent: string;
}

export const COMPANY_INFO = {
  name: "ENTREPRISE MALIENNE DE TRAVAUX",
  acronym: "EMT SARL",
  slogan: "Des infrastructures utiles, durables et proches des territoires.",
  officialSlogan: "Expertise. Engagement. Résultats.",
  creationYear: 2015,
  referenceCount: 127,
  regionCount: 10,
  regionScope: "Toutes les régions du Mali",
  partnerCount: 25,
  domainCount: 8,
  nif: "061001033N",
  rccm: "MA.TBT.2015.B.128",
  manager: "Almansour Ag Mohamed",
  activities: ["BTP", "Forages hydrauliques", "Transport", "Quincaillerie", "Aménagement", "Commerce général"],
  headquarters: {
    city: "Tombouctou",
    address: "Sanfil, près de l'École de Santé Bouctou / Route de Kabara",
    phones: ["+223 79 19 94 66", "+223 69 19 94 66"],
    email: "entreprise@emt-mali.com",
  },
  representation: {
    city: "Bamako",
    address: "Torokorobougou, Rue 312 Porte 44",
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: "hydraulique",
    title: "Hydraulique & eau potable",
    kicker: "Eau, énergie solaire et résilience",
    description: "Forages, AES, SHVA, châteaux d'eau et systèmes de pompage solaire pour sécuriser l'accès à l'eau potable.",
    imageUrl: "/images/realisation-forage-boue.jpeg",
    iconName: "Droplets",
    count: 38,
    accent: "cyan",
  },
  {
    id: "hydro-agricole",
    title: "Aménagements hydro-agricoles & maraîchage",
    kicker: "Sécurité alimentaire et revenus",
    description: "Périmètres maraîchers et irrigués, bas-fonds, chenaux, canaux, digues et ouvrages de régulation.",
    imageUrl: "/images/realisation-surcreusement-chenal.jpeg",
    iconName: "Sprout",
    count: 28,
    accent: "emerald",
  },
  {
    id: "education",
    title: "Bâtiments – Éducation",
    kicker: "Des écoles accueillantes",
    description: "Construction, réhabilitation et équipement de salles de classe, blocs administratifs et latrines scolaires.",
    imageUrl: "/images/realisation-construction-ecole.jpeg",
    iconName: "School",
    count: 11,
    accent: "amber",
  },
  {
    id: "sante",
    title: "Bâtiments – Santé",
    kicker: "Des soins de proximité",
    description: "Construction, réhabilitation et extension de CSCOM, maternités et unités hospitalières.",
    imageUrl: "/images/realisation-construction-cscom.jpeg",
    iconName: "HeartPulse",
    count: 9,
    accent: "rose",
  },
  {
    id: "wash",
    title: "Assainissement & hygiène (WASH)",
    kicker: "Prévenir, protéger, assainir",
    description: "Latrines, dispositifs de lavage des mains, plateformes de gestion des déchets et caniveaux.",
    imageUrl: "/images/realisation-forage-mft.jpeg",
    iconName: "Waves",
    count: 8,
    accent: "blue",
  },
  {
    id: "pastoral",
    title: "Infrastructures pastorales & élevage",
    kicker: "Accompagner les économies pastorales",
    description: "Parcs de vaccination, puits pastoraux, aires d'abattage, marchés à bétail et magasins d'aliments.",
    imageUrl: "/images/realisation-unite-lait.jpeg",
    iconName: "PawPrint",
    count: 12,
    accent: "orange",
  },
  {
    id: "stockage",
    title: "Infrastructures économiques & stockage",
    kicker: "Conserver, transformer, valoriser",
    description: "Magasins de stockage, unités de transformation et infrastructures communautaires.",
    imageUrl: "/images/realisation-unite-lait.jpeg",
    iconName: "Warehouse",
    count: 4,
    accent: "violet",
  },
  {
    id: "fournitures",
    title: "Fournitures & équipements",
    kicker: "Acheminer les bons équipements",
    description: "Équipements médicaux, mobilier, matériel didactique et informatique, intrants et kits humanitaires.",
    imageUrl: "/images/realisation-reunion-equipement.jpeg",
    iconName: "PackageCheck",
    count: 17,
    accent: "indigo",
  },
];

export const REGIONS = [
  {
    name: "Tombouctou",
    tone: "amber",
  },
  {
    name: "Taoudéni",
    tone: "cyan",
  },
  {
    name: "Gao",
    tone: "emerald",
  },
  {
    name: "Ménaka",
    tone: "violet",
  },
  {
    name: "Kidal",
    tone: "indigo",
  },
  {
    name: "Mopti",
    tone: "orange",
  },
  {
    name: "Ségou",
    tone: "emerald",
  },
  {
    name: "Kayes",
    tone: "blue",
  },
  {
    name: "Koulikoro",
    tone: "blue",
  },
  {
    name: "District de Bamako",
    tone: "cyan",
  },
];

export const PARTNER_GROUPS = [
  {
    title: "Organisations internationales & Nations Unies",
    partners: ["CICR", "UNICEF", "FAO Mali"],
  },
  {
    title: "ONG internationales",
    partners: ["Islamic Relief Mali", "MSF", "Solidarités International", "ACF", "NRC", "CARE International au Mali"],
  },
  {
    title: "ONG nationales",
    partners: ["AMSS"],
  },
  {
    title: "Agences & coopération",
    partners: ["Lux-Development", "AGETIER-Mali", "AEDD", "ADES Tombouctou"],
  },
  {
    title: "État, projets publics & sociétés",
    partners: ["Ministère de l'Éducation nationale – MIQRA", "MEF – PRRE", "PRAPS 2", "INCLUSIF", "FSN", "SONATAM"],
  },
  {
    title: "Collectivités territoriales",
    partners: ["Conseil régional de Tombouctou", "Commune rurale d'Alafia", "Commune rurale de Haribomo", "Commune de Ber", "Mairie de Sanankoroba – MERIT"],
  },
];

export const FINANCIAL_PARTNERS = [
  "Banque mondiale (IDA)",
  "Banque africaine de développement (BAD)",
  "Union européenne",
  "Coopération luxembourgeoise",
  "WHH / BMZ",
  "USAID",
  "GIZ",
  "AFD",
  "ANICT",
  "FIDA",
  "MINUSMA",
  "HCR",
  "NORAD",
  "Living Earth Foundation",
  "AEN",
];


export interface RealizationSlide {
  id: string;
  domain: string;
  label: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
}

export const REALIZATION_SLIDES: RealizationSlide[] = [
  {
    id: "etude-geophysique",
    domain: "Hydraulique & eau potable",
    label: "Étude et implantation",
    title: "Étude géophysique avant forage",
    description: "Reconnaissance du terrain et préparation de l’implantation pour sécuriser la ressource en eau.",
    location: "Territoires d’intervention EMT",
    imageUrl: "/images/realisation-etude-geophysique.jpeg",
  },
  {
    id: "forage-boue",
    domain: "Hydraulique & eau potable",
    label: "Forage en chantier",
    title: "Forage à la boue",
    description: "Une étape technique de creusement et de contrôle du forage, réalisée avec des moyens adaptés au terrain.",
    location: "Nord et Centre du Mali",
    imageUrl: "/images/realisation-forage-boue.jpeg",
  },
  {
    id: "forage-mft",
    domain: "Hydraulique & eau potable",
    label: "Forage MFT",
    title: "Réalisation d’un forage MFT",
    description: "Mise en œuvre d’une solution de forage mécanisé pour améliorer l’accès durable à l’eau.",
    location: "Zones rurales maliennes",
    imageUrl: "/images/realisation-forage-mft-termine.jpeg",
  },
  {
    id: "forage-mft-technique",
    domain: "Hydraulique & eau potable",
    label: "Forage MFT",
    title: "Séquence technique du forage MFT",
    description: "Une vue complémentaire du chantier pour montrer la précision des opérations et le suivi des équipes.",
    location: "Zones rurales maliennes",
    imageUrl: "/images/realisation-forage-mft.jpeg",
  },
  {
    id: "pompage-solaire",
    domain: "Hydraulique & énergie",
    label: "Énergie renouvelable",
    title: "Installation photovoltaïque pour le pompage",
    description: "Équipement solaire pensé pour réduire les coûts d’exploitation et fiabiliser les systèmes d’adduction d’eau.",
    location: "Sites hydrauliques EMT",
    imageUrl: "/images/realisation-photovoltaique-01.jpeg",
  },
  {
    id: "pompage-solaire-02",
    domain: "Hydraulique & énergie",
    label: "Énergie renouvelable",
    title: "Deuxième vue de l’installation solaire",
    description: "Une installation photovoltaïque documentée sous un autre angle pour valoriser le matériel posé sur site.",
    location: "Sites hydrauliques EMT",
    imageUrl: "/images/realisation-photovoltaique-02.jpeg",
  },
  {
    id: "equipement-forage",
    domain: "Hydraulique & eau potable",
    label: "Préparation de projet",
    title: "Réunion pour le plan d’équipement",
    description: "Échanges techniques et organisation des équipements nécessaires à la mise en service du forage.",
    location: "Équipes et partenaires EMT",
    imageUrl: "/images/realisation-reunion-equipement.jpeg",
  },
  {
    id: "soufflage",
    domain: "Hydraulique & eau potable",
    label: "Développement d’ouvrage",
    title: "Soufflage et développement d’un forage",
    description: "Nettoyage, développement et vérification de l’ouvrage avant son équipement et sa réception.",
    location: "Chantiers hydrauliques EMT",
    imageUrl: "/images/realisation-soufflage-forage.jpeg",
  },
  {
    id: "cscom",
    domain: "Bâtiments – Santé",
    label: "Infrastructure sociale",
    title: "Construction d’un CSCOM",
    description: "Des bâtiments de santé de proximité conçus pour renforcer l’accueil et les soins dans les territoires.",
    location: "Régions d’intervention EMT",
    imageUrl: "/images/realisation-construction-cscom.jpeg",
  },
  {
    id: "ecole",
    domain: "Bâtiments – Éducation",
    label: "Infrastructure sociale",
    title: "Construction d’une école",
    description: "Des espaces scolaires durables pour accompagner les communautés et améliorer les conditions d’apprentissage.",
    location: "Régions d’intervention EMT",
    imageUrl: "/images/realisation-construction-ecole.jpeg",
  },
  {
    id: "chenal",
    domain: "Aménagements hydro-agricoles",
    label: "Aménagement rural",
    title: "Surcreusement d’un chenal",
    description: "Travaux d’aménagement pour améliorer la circulation de l’eau et soutenir les usages agricoles locaux.",
    location: "Zones agricoles maliennes",
    imageUrl: "/images/realisation-surcreusement-chenal.jpeg",
  },
  {
    id: "lait",
    domain: "Élevage & économie locale",
    label: "Valorisation des filières",
    title: "Unité de production de lait",
    description: "Une réalisation au service de la transformation locale, de l’élevage et des revenus des communautés.",
    location: "Territoires ruraux du Mali",
    imageUrl: "/images/realisation-unite-lait.jpeg",
  },
  {
    id: "chantier-01",
    domain: "Hydraulique & eau potable",
    label: "Suivi de chantier",
    title: "Intervention technique sur site",
    description: "Une équipe mobilisée sur le terrain pour suivre les travaux et assurer la qualité de l’exécution.",
    location: "Chantiers EMT",
    imageUrl: "/images/realisation-chantier-01.jpeg",
  },
  {
    id: "chantier-02",
    domain: "Hydraulique & eau potable",
    label: "Suivi de chantier",
    title: "Équipe et équipements de forage",
    description: "Des moyens humains et matériels adaptés aux contraintes des chantiers hydrauliques au Mali.",
    location: "Chantiers EMT",
    imageUrl: "/images/realisation-chantier-02.jpeg",
  },
  {
    id: "chantier-03",
    domain: "Hydraulique & eau potable",
    label: "Réalisation documentée",
    title: "Ouvrage hydraulique en cours",
    description: "Une séquence de terrain qui illustre le soin apporté à chaque étape de la réalisation.",
    location: "Chantiers EMT",
    imageUrl: "/images/realisation-chantier-03.jpeg",
  },
];
