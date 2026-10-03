export interface ReferenceItem {
  id: string;
  category: string;
  title: string;
  location: string;
  partner: string;
  year: string;
  impact: string;
}

export const REFERENCE_CATEGORIES = [
  "Hydraulique & eau potable",
  "Aménagements hydro-agricoles & maraîchage",
  "Bâtiments – Éducation",
  "Bâtiments – Santé",
  "Assainissement & hygiène (WASH)",
  "Infrastructures pastorales & élevage",
  "Infrastructures économiques & stockage",
  "Fournitures & équipements"
] as const;

export const REFERENCE_CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Hydraulique & eau potable": "Réalisation et réhabilitation de forages, adductions d'eau sommaires (AES), systèmes hydrauliques villageois améliorés (SHVA), châteaux d'eau et systèmes de pompage solaire.",
  "Aménagements hydro-agricoles & maraîchage": "Aménagement de périmètres maraîchers et irrigués, bas-fonds, chenaux, canaux, digues et ouvrages de régulation au service de la sécurité alimentaire.",
  "Bâtiments – Éducation": "Construction, réhabilitation et équipement de salles de classe, blocs administratifs et latrines scolaires.",
  "Bâtiments – Santé": "Construction, réhabilitation et extension de centres de santé communautaires (CSCOM), maternités et unités hospitalières.",
  "Assainissement & hygiène (WASH)": "Latrines, dispositifs de lavage des mains, plateformes de gestion des déchets et caniveaux.",
  "Infrastructures pastorales & élevage": "Parcs de vaccination, puits pastoraux, aires d'abattage, marchés à bétail et magasins d'aliments bétail.",
  "Infrastructures économiques & stockage": "Magasins de stockage, unités de transformation et infrastructures communautaires.",
  "Fournitures & équipements": "Fourniture et livraison d'équipements médicaux, mobilier, matériel didactique et informatique, intrants et kits humanitaires."
};

export const REFERENCES: ReferenceItem[] = [
  {
    "id": "ref-001",
    "category": "Hydraulique & eau potable",
    "title": "Travaux d'essais de pompage",
    "location": "Niafunké, région de Tombouctou",
    "partner": "MSF (Médecins Sans Frontières)",
    "year": "2026",
    "impact": "Intervention réalisée pour le compte de MSF (Médecins Sans Frontières). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-002",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation de 3 SHVA (Ikorchatane, Ifartatan-Boumbangué, Kel-Tabinguate) et d'un PM + SHVA à Kel-Bourem-Erewi",
    "location": "commune de Bambara Maoudé ; commune de Haribomo, cercle de Bambara-Maoudé, Gourma-Rharous, région de Tombouctou",
    "partner": "Islamic Relief Mali",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte d'Islamic Relief Mali (financement : IR Canada). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-003",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un SHVA avec 4 bornes-fontaines et d'un périmètre maraîcher de 1 ha équipé d'un SHVA",
    "location": "Guelekoro – commune de Dialakoroba, cercle de Kati, région de Koulikoro",
    "partner": "Islamic Relief Mali",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte d'Islamic Relief Mali (financement : IR Netherlands). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-004",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un SHPA à Efferer, réhabilitation d'une AES et aménagement d'un PM à Adiora (projet Tamité)",
    "location": "Efferer, Adiora – commune de Ouinerden, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "Islamic Relief Mali",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte d'Islamic Relief Mali. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-005",
    "category": "Hydraulique & eau potable",
    "title": "Réhabilitation du forage de Toya",
    "location": "Toya, région de Tombouctou",
    "partner": "MSF (Médecins Sans Frontières)",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte de MSF (Médecins Sans Frontières). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-006",
    "category": "Hydraulique & eau potable",
    "title": "Confection et installation d'un château d'eau métallique de 5 m³ à Toya",
    "location": "Toya, région de Tombouctou",
    "partner": "MSF (Médecins Sans Frontières)",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte de MSF (Médecins Sans Frontières). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-007",
    "category": "Hydraulique & eau potable",
    "title": "Construction d'un château d'eau de 5 m³ et réhabilitation du réseau d'eau du CSCOM de Fifo",
    "location": "Fifo – commune de Haribomo, cercle de Bambara-Maoudé, région de Tombouctou",
    "partner": "MSF (Médecins Sans Frontières)",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte de MSF (Médecins Sans Frontières). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-008",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation de deux (2) forages type AES à Kel Boni",
    "location": "Kel Boni – commune de Garbakoïra, région de Tombouctou",
    "partner": "AMSS",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : GIZ / PROSAR). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-009",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un SHVA et réhabilitation de l'AES de Diartou",
    "location": "Diartou – commune de Dianké, cercle de Niafunké, région de Tombouctou",
    "partner": "CICR",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-010",
    "category": "Hydraulique & eau potable",
    "title": "Réhabilitation et solarisation du système de production d'eau potable de Léré",
    "location": "commune de Léré, cercle de Niafunké, région de Tombouctou",
    "partner": "CICR",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-011",
    "category": "Hydraulique & eau potable",
    "title": "Renforcement de la production d'eau potable du centre SOMAGEP (2 forages photovoltaïques)",
    "location": "Goundam, région de Tombouctou",
    "partner": "CICR",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-012",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'une AES à Daka Mahamoud",
    "location": "Daka Mahamoud – commune de Haribomo, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "CICR",
    "year": "2022 – 2023",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-013",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'une AES à Tinadandan (projet d'urgence)",
    "location": "Tinadandan – commune de Gargando, cercle de Goundam, région de Tombouctou",
    "partner": "CICR",
    "year": "2023",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-014",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'une AES à Tinoradj",
    "location": "Tinoradj – commune de Essakane, cercle de Goundam, région de Tombouctou",
    "partner": "CICR",
    "year": "2023",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-015",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un SHVA à Albouchra",
    "location": "Albouchra – commune de Léré, cercle de Niafunké, région de Tombouctou",
    "partner": "CICR",
    "year": "2023",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-016",
    "category": "Hydraulique & eau potable",
    "title": "Lot 22 : 3 nouveaux forages équipés en système solaire dans 3 centres de santé",
    "location": "Hassidina (commune de Alfacrouna), district d'Achouratt, région de Taoudéni",
    "partner": "UNICEF",
    "year": "2022 – 2023",
    "impact": "Intervention réalisée pour le compte de l'UNICEF. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-017",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation de 2 forages positifs alimentant 2 SHVA",
    "location": "Gargando – Télé, cercle de Goundam, région de Tombouctou",
    "partner": "Solidarités International",
    "year": "2023",
    "impact": "Intervention réalisée pour le compte de Solidarités International. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-018",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un SHVA à Keri Djemola",
    "location": "Keri Djemola – commune de Léré, cercle de Niafunké, région de Tombouctou",
    "partner": "CICR",
    "year": "2021 – 2022",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-019",
    "category": "Hydraulique & eau potable",
    "title": "Réhabilitation d'ouvrages d'eau (pompes solaires, modules PV, têtes de forage) à Darsalam, Elgar et Tinachararatane",
    "location": "Darsalam (commune de Tilemsi), Elgar (commune de Alzounoub), Tinachararatane (commune de Tin Aïcha), cercle de Goundam, région de Tombouctou",
    "partner": "Solidarités International",
    "year": "2021 – 2022",
    "impact": "Intervention réalisée pour le compte de Solidarités International (financement : OFDA – USAID). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-020",
    "category": "Hydraulique & eau potable",
    "title": "Construction d'un SHVA à Timarkahawane et aménagement d'infrastructures hydrauliques à Darsalam (programme RRM)",
    "location": "commune de Tilemsi, cercle de Goundam, région de Tombouctou",
    "partner": "Solidarités International",
    "year": "2022",
    "impact": "Intervention réalisée pour le compte de Solidarités International (financement : USAID (RRM)). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-021",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un forage équipé en pompage photovoltaïque à Boukiate",
    "location": "Boukiate – commune de urbaine de Tombouctou, région de Tombouctou",
    "partner": "NRC (Conseil norvégien pour les réfugiés)",
    "year": "2021",
    "impact": "Intervention réalisée pour le compte du NRC (Conseil norvégien pour les réfugiés) (financement : UNHCR). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-022",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un château d'eau et aménagement d'un périmètre maraîcher à Ehabak",
    "location": "Ehabak – commune de Razelma, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2020",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : MINUSMA). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-023",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'une AES à M'Bouna",
    "location": "commune de M'Bouna, cercle de Goundam, région de Tombouctou",
    "partner": "CICR",
    "year": "2019",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-024",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un SHVA à Souhourou (phase 2)",
    "location": "Souhourou – commune de Gossi, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "CICR",
    "year": "2018",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-025",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'une adduction d'eau sommaire (AES) à Salam",
    "location": "commune de Salam, cercle de Tombouctou, région de Tombouctou",
    "partner": "CICR",
    "year": "2016 – 2017",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-026",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation de 3 AES et réhabilitation de 2 SHVA",
    "location": "Cercle de Goundam, région de Tombouctou",
    "partner": "Lux-Développement (Projet MLI/803)",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de Lux-Développement (Projet MLI/803) (financement : Union européenne). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-027",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation de 5 AES et réhabilitation de 3 SHVA",
    "location": "Cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "Lux-Développement (Projet MLI/803)",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de Lux-Développement (Projet MLI/803) (financement : Union européenne). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-028",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un forage équipé d'une pompe à motricité humaine à Ingodiri",
    "location": "Ingodiri – commune de Gargando, cercle de Goundam, région de Tombouctou",
    "partner": "SONATAM",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de la SONATAM. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-029",
    "category": "Hydraulique & eau potable",
    "title": "Réhabilitation de pompes manuelles à Dibla",
    "location": "Dibla – commune de Doukouria, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : Living Earth Foundation (LEF)). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-030",
    "category": "Hydraulique & eau potable",
    "title": "Réhabilitation de forages à Wana",
    "location": "Wana – commune de Doukouria, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : Living Earth Foundation (LEF)). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-031",
    "category": "Hydraulique & eau potable",
    "title": "Exécution de 4 forages équipés de systèmes solaires et cuves de 20 m³",
    "location": "commune de Ber et commune de Salam, cercle de Tombouctou, région de Tombouctou",
    "partner": "CICR",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte du CICR. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-032",
    "category": "Hydraulique & eau potable",
    "title": "Travaux d'adduction d'eau à Kabara",
    "location": "Kabara, cercle de Tombouctou, région de Tombouctou",
    "partner": "Conseil régional de Tombouctou",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte du Conseil régional de Tombouctou (financement : ANICT). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-033",
    "category": "Hydraulique & eau potable",
    "title": "Réhabilitation de l'adduction d'eau sommaire (AES) de Wana",
    "location": "Wana – commune de Doukouria, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2015",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : Living Earth Foundation (LEF)). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-034",
    "category": "Hydraulique & eau potable",
    "title": "Réhabilitation de dix (10) points d'eau",
    "location": "Cercles de Rharous et Tombouctou, cercle de Gourma-Rharous, Tombouctou, région de Tombouctou",
    "partner": "AMSS",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : AEN (Projet Eau Hygiène Assainissement)). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-035",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un puits à Kel Dargou",
    "location": "Kel Dargou – commune de Haribomo, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "Commune rurale de Haribomo",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune rurale de Haribomo (financement : ANICT). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-036",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation de cinq forages et réhabilitation d'un forage (Fifo, Timgharen, Kabongo, Akouloutan, Ifoghas)",
    "location": "commune de Haribomo, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "Commune rurale de Haribomo",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune rurale de Haribomo (financement : PIDRN). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-037",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation d'un forage équipé d'une cuve de 20 m³ à Tindjaré",
    "location": "Tindjaré – commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "Commune de Ber",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune de Ber. Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-038",
    "category": "Hydraulique & eau potable",
    "title": "Réalisation et équipement d'un forage en AES et reconstitution du cheptel pour les jeunes de Walett Zaggar",
    "location": "Walett Zaggar – commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "ADES Mali",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de l'ADES Mali (financement : MINUSMA). Ces travaux renforcent l'accès durable des populations à l'eau potable."
  },
  {
    "id": "ref-039",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement d'un ouvrage à submersion contrôlée à Bomohama",
    "location": "Bomohama – commune de Ouinerden, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "Islamic Relief Mali",
    "year": "2026",
    "impact": "Intervention réalisée pour le compte d'Islamic Relief Mali (financement : Islamic Relief Germany). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-040",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation de 3 périmètres maraîchers avec pompage solaire à Keniero (Siby), Sandama (Sobra) et Niogonan (Guihoyo)",
    "location": "Siby, Sobra, Guihoyo, région de Koulikoro",
    "partner": "Mairie de Sanankoroba (Projet MERIT)",
    "year": "2026",
    "impact": "Intervention réalisée pour le compte de la Mairie de Sanankoroba (Projet MERIT) (financement : FIDA (prêt et don)). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-041",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation de 3 périmètres maraîchers avec pompage solaire à Boron, Tiembougou (Kolokani) et Nabougou (Nyamina)",
    "location": "Boron, Kolokani, Nyamina, région de Koulikoro",
    "partner": "Mairie de Sanankoroba (Projet MERIT)",
    "year": "2026",
    "impact": "Intervention réalisée pour le compte de la Mairie de Sanankoroba (Projet MERIT) (financement : FIDA (prêt et don)). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-042",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement de 7 ha de bas-fonds et d'un périmètre maraîcher de 1 ha",
    "location": "commune de Bourem Inaly, cercle de Tombouctou, région de Tombouctou",
    "partner": "AGETIER-Mali",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-043",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réhabilitation d'ouvrage régulateur, surcreusement de mares et PM de 1 ha à Bellasao Djandjina",
    "location": "Beregoungou, Bourem Inaly, Bellasao Djandjina, cercle de Tombouctou, région de Tombouctou",
    "partner": "AGETIER-Mali",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-044",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement de 2 ha de champs de dattes en goutte-à-goutte à Tindjambane",
    "location": "Tindjambane – commune de Bourem Inaly, cercle de Tombouctou, région de Tombouctou",
    "partner": "AGETIER-Mali",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-045",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation d'un périmètre maraîcher avec système de pompage et d'une AES",
    "location": "Doneguebougou – commune de Safo, cercle de Kati, région de Koulikoro",
    "partner": "Islamic Relief Mali",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte d'Islamic Relief Mali (financement : IR UK). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-046",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement d'un petit périmètre maraîcher équipé de station de pompage solaire",
    "location": "Gossi, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "FAO Mali",
    "year": "2023",
    "impact": "Intervention réalisée pour le compte de la FAO Mali. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-047",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement du périmètre maraîcher de N'Tahaka",
    "location": "N'Tahaka, région de Gao",
    "partner": "AMSS",
    "year": "2022",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : WHH). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-048",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement du périmètre maraîcher de Baria",
    "location": "Baria, région de Gao",
    "partner": "AMSS",
    "year": "2022",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : WHH). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-049",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation d'un système hydraulique maraîcher amélioré (SHMA) à Madina",
    "location": "Madina – commune de Soumpi, cercle de Niafunké, région de Tombouctou",
    "partner": "CICR",
    "year": "2022",
    "impact": "Intervention réalisée pour le compte du CICR. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-050",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation d'un ouvrage régulateur et d'une digue de 700 ml à Beregoungou",
    "location": "Beregoungou – commune de Bourem Inaly, cercle de Tombouctou, région de Tombouctou",
    "partner": "Lux-Développement (Projet MLI/802 RELAC)",
    "year": "2021 – 2022",
    "impact": "Intervention réalisée pour le compte de Lux-Développement (Projet MLI/802 RELAC) (financement : Coopération luxembourgeoise). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-051",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Équipement de forage pour un système hydraulique maraîcher à Niafunké",
    "location": "commune de Soboundou, cercle de Niafunké, région de Tombouctou",
    "partner": "CICR",
    "year": "2020 – 2021",
    "impact": "Intervention réalisée pour le compte du CICR. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-052",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation de 3 périmètres maraîchers pour femmes à Bangadria Abba, Bougouberi et Goungoumé",
    "location": "commune de Binga ; commune de Tindirma, cercle de Diré, région de Tombouctou",
    "partner": "AEDD (PACV-MT)",
    "year": "2018 – 2019",
    "impact": "Intervention réalisée pour le compte de l'AEDD (PACV-MT) (financement : Fonds d'adaptation (AFB n°11602)). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-053",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation de 5 périmètres maraîchers et réhabilitation de 8 autres (Dabi, Dagodji, Goubo, Hamakoïra, N'Gourouné, Niafunké, Deybata, Soumpi, Tringa, Gathy-Djirma, Dianké…)",
    "location": "commune de Soboundou, Soumpi, Dianké, Léré, cercle de Niafunké, région de Tombouctou",
    "partner": "MEF / PRRE – CARE International au Mali",
    "year": "2017 – 2018",
    "impact": "Intervention réalisée pour le compte du MEF / PRRE – CARE International au Mali (financement : IDA – Don H901-ML). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-054",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Creusement de canaux et chenaux – canal secondaire de Tyéne",
    "location": "Tyéne – commune de Tonka, cercle de Goundam, région de Tombouctou",
    "partner": "Lux-Développement (Projet MLI/803)",
    "year": "2017 – 2018",
    "impact": "Intervention réalisée pour le compte de Lux-Développement (Projet MLI/803) (financement : Union européenne). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-055",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement des périmètres maraîchers de Tehigrène et Toukabangou Tao",
    "location": "Tehigrène – commune de Bintagoungou ; Toukabangou Tao – commune de Issabery, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : WHH-BMZ). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-056",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement des périmètres maraîchers de Bintagoungou, Bilalbankoré et Issabery",
    "location": "commune de Bintagoungou ; commune de Issabery, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : WHH-BMZ). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-057",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement de deux périmètres maraîchers",
    "location": "commune de Bourem Sidi Amar, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de l'AMSS. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-058",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation de cinq (05) périmètres maraîchers",
    "location": "Tilemsi, région de Gao",
    "partner": "CICR",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte du CICR. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-059",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation de six (6) périmètres maraîchers",
    "location": "Cercle de Goundam, région de Tombouctou",
    "partner": "Lux-Développement (Projet MLI/803)",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de Lux-Développement (Projet MLI/803) (financement : Union européenne). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-060",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Creusement du chenal et entretien des berges du bras de Nianbourgou",
    "location": "Nianbourgou – commune de Douékiré, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : PURPEPV). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-061",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Creusement du chenal et entretien des berges du bras de Gallaga",
    "location": "Gallaga – commune de Douékiré, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : PURPEPV). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-062",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation de cinq (2 + 3) périmètres maraîchers",
    "location": "commune de Bourem Inaly, cercle de Tombouctou, région de Tombouctou",
    "partner": "CICR",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte du CICR. Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-063",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement de trois périmètres maraîchers (Hangabera)",
    "location": "commune de Télé, cercle de Goundam, région de Tombouctou",
    "partner": "Conseil régional de Tombouctou",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte du Conseil régional de Tombouctou (financement : ANICT). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-064",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement de périmètres irrigués villageois (PIV)",
    "location": "commune de Kirchamba, Bourem Sidi Amar, Télé, cercle de Diré, Goundam, région de Tombouctou",
    "partner": "Conseil régional de Tombouctou",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte du Conseil régional de Tombouctou (financement : ANICT). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-065",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Aménagement et équipement en GMP d'un PIV de 30 ha à Tin Telout",
    "location": "Tin Telout – commune de Alafia, cercle de Tombouctou, région de Tombouctou",
    "partner": "Commune rurale d'Alafia",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune rurale d'Alafia (financement : ANICT). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-066",
    "category": "Aménagements hydro-agricoles & maraîchage",
    "title": "Réalisation d'un périmètre irrigué villageois de 15 ha à Kel Dargou",
    "location": "Kel Dargou – commune de Haribomo, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "Commune rurale de Haribomo",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune rurale de Haribomo (financement : ANICT). Ces aménagements contribuent à la sécurité alimentaire et à l'amélioration des revenus des producteurs, notamment des femmes."
  },
  {
    "id": "ref-067",
    "category": "Bâtiments – Éducation",
    "title": "Construction et équipement d'une école de 3 salles, bloc latrines, direction et espace ami des enfants",
    "location": "Guelekoro – commune de Dialakoroba, cercle de Kati, région de Koulikoro",
    "partner": "Islamic Relief Mali",
    "year": "2025",
    "impact": "Intervention réalisée pour le compte d'Islamic Relief Mali (financement : IR Netherlands). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-068",
    "category": "Bâtiments – Éducation",
    "title": "Construction de 2 kits scolaires (6 salles, 2 bureaux-magasins, 4 blocs de latrines) – écoles de Ber et Ousmane Macinanké (MIQRA)",
    "location": "Ber (CAP de Ber) ; Ousmane Macinanké (CAP de Niafunké), cercle de Tombouctou, Niafunké, région de Tombouctou",
    "partner": "Ministère de l'Éducation nationale – DFM (MIQRA)",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte du Ministère de l'Éducation nationale – DFM (MIQRA) (financement : Banque mondiale – Don D7740). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-069",
    "category": "Bâtiments – Éducation",
    "title": "Réhabilitation d'un bloc de 3 salles de classe – école Ousmane Macinanké",
    "location": "commune de Soboundou, cercle de Niafunké, région de Tombouctou",
    "partner": "NRC (Conseil norvégien pour les réfugiés)",
    "year": "2021 – 2022",
    "impact": "Intervention réalisée pour le compte du NRC (Conseil norvégien pour les réfugiés). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-070",
    "category": "Bâtiments – Éducation",
    "title": "Construction logement directeur, direction, bloc de 3 latrines et clôture – école de Tirist",
    "location": "Tirist – commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "Conseil régional de Tombouctou",
    "year": "2020",
    "impact": "Intervention réalisée pour le compte du Conseil régional de Tombouctou (financement : UE / AFD / ANICT (FNACT)). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-071",
    "category": "Bâtiments – Éducation",
    "title": "Construction et équipement de six (6) salles de classe – CAP de Goundam",
    "location": "CAP de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2019",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : PACETEM). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-072",
    "category": "Bâtiments – Éducation",
    "title": "Construction de deux (2) salles de classe – CAP de Diré",
    "location": "CAP de Diré, région de Tombouctou",
    "partner": "AMSS",
    "year": "2019",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : PACETEM). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-073",
    "category": "Bâtiments – Éducation",
    "title": "Construction d'un bloc de 3 salles de classe et d'un bloc de 2 latrines à Amaydar – CAP de Rharous",
    "location": "Amaydar, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "AMSS",
    "year": "2019",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : PACETEM). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-074",
    "category": "Bâtiments – Éducation",
    "title": "Construction de 2 blocs de 3 salles de classe et 4 blocs de 2 latrines",
    "location": "Cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2018",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : WHH-BMZ). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-075",
    "category": "Bâtiments – Éducation",
    "title": "Construction de 3 salles de classe et 2 blocs de 3 latrines – école de Boss (PUEPT II)",
    "location": "Boss, cercle de Goundam, région de Tombouctou",
    "partner": "AGETIER-Mali / Ministère de l'Éducation nationale",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali / Ministère de l'Éducation nationale (financement : IDA – Banque mondiale). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-076",
    "category": "Bâtiments – Éducation",
    "title": "Construction de 3 salles de classe et 2 blocs de 3 latrines – école de Tourchawane (PUEPT II)",
    "location": "Tourchawane – commune de Banikane, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "AGETIER-Mali / Ministère de l'Éducation nationale",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali / Ministère de l'Éducation nationale (financement : IDA – Banque mondiale). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-077",
    "category": "Bâtiments – Éducation",
    "title": "Réalisation de 3 salles de classe et 2 blocs de latrines (Timbaradjene)",
    "location": "commune de Alafia, cercle de Tombouctou, région de Tombouctou",
    "partner": "Commune rurale d'Alafia",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune rurale d'Alafia (financement : ANICT). Ces infrastructures améliorent les conditions d'accueil et d'apprentissage des élèves."
  },
  {
    "id": "ref-078",
    "category": "Bâtiments – Santé",
    "title": "Réalisation d'une maternité, hangar, latrines, incinérateur, clôture, réhabilitation et électrification – CSCOM de Dangha",
    "location": "commune de Dangha, cercle de Diré, région de Tombouctou",
    "partner": "AGETIER-Mali / Fonds de Solidarité Nationale",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali / Fonds de Solidarité Nationale (financement : BAD / Budget national (PARSEP-NM)). Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-079",
    "category": "Bâtiments – Santé",
    "title": "Réalisation d'un CSCOM à Djédjéfou",
    "location": "Djédjéfou – commune de Haribomo, cercle de Bambara-Maoudé, région de Tombouctou",
    "partner": "AGETIER-Mali / Fonds de Solidarité Nationale",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali / Fonds de Solidarité Nationale (financement : BAD / Budget national (PARSEP-NM)). Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-080",
    "category": "Bâtiments – Santé",
    "title": "Réhabilitation et renforcement des infrastructures du CSCOM d'Inadiatafane",
    "location": "commune de Inadiatafane, cercle de Gourma-Rharous, région de Tombouctou",
    "partner": "CICR",
    "year": "2020 – 2021",
    "impact": "Intervention réalisée pour le compte du CICR. Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-081",
    "category": "Bâtiments – Santé",
    "title": "Construction de magasins et salle URENI dans deux CSCOM",
    "location": "Région de Tombouctou, région de Tombouctou",
    "partner": "Lux-Développement (Projet MLI/803)",
    "year": "2021",
    "impact": "Intervention réalisée pour le compte de Lux-Développement (Projet MLI/803) (financement : Union européenne). Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-082",
    "category": "Bâtiments – Santé",
    "title": "Construction d'un bloc d'isolement (10 lits) – Hôpital de Tombouctou",
    "location": "Hôpital de Tombouctou, région de Tombouctou",
    "partner": "CICR",
    "year": "2020",
    "impact": "Intervention réalisée pour le compte du CICR. Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-083",
    "category": "Bâtiments – Santé",
    "title": "Construction d'un CSCOM à Tondidarou",
    "location": "Tondidarou – commune de Soboundou, cercle de Niafunké, région de Tombouctou",
    "partner": "AMSS",
    "year": "2018",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : Ambassade du Royaume des Pays-Bas). Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-084",
    "category": "Bâtiments – Santé",
    "title": "Construction d'un CSCOM à Ber",
    "location": "commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "CICR",
    "year": "2018",
    "impact": "Intervention réalisée pour le compte du CICR. Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-085",
    "category": "Bâtiments – Santé",
    "title": "Construction du CSCOM de Bourem Inaly",
    "location": "commune de Bourem Inaly, cercle de Tombouctou, région de Tombouctou",
    "partner": "CICR",
    "year": "2016 – 2017",
    "impact": "Intervention réalisée pour le compte du CICR. Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-086",
    "category": "Bâtiments – Santé",
    "title": "Construction d'un CSCOM à Bintagoungou",
    "location": "commune de Bintagoungou, cercle de Goundam, région de Tombouctou",
    "partner": "CICR",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte du CICR. Ces réalisations renforcent l'accès des populations aux soins de santé de proximité."
  },
  {
    "id": "ref-087",
    "category": "Assainissement & hygiène (WASH)",
    "title": "Sécurisation (clôture) de l'aire de lavage et de séchage de Zouera + compteur d'eau et vanne",
    "location": "Zouera, région de Tombouctou",
    "partner": "MSF (Médecins Sans Frontières)",
    "year": "2026",
    "impact": "Intervention réalisée pour le compte de MSF (Médecins Sans Frontières). Ces ouvrages améliorent les conditions d'hygiène et d'assainissement des usagers."
  },
  {
    "id": "ref-088",
    "category": "Assainissement & hygiène (WASH)",
    "title": "Lot 23 : 9 cabines de latrines, 15 lave-mains, réhabilitation de 30 cabines et 6 panneaux dans 6 écoles",
    "location": "Toual et autres écoles, région de Taoudéni",
    "partner": "UNICEF",
    "year": "2022 – 2024",
    "impact": "Intervention réalisée pour le compte de l'UNICEF. Ces ouvrages améliorent les conditions d'hygiène et d'assainissement des usagers."
  },
  {
    "id": "ref-089",
    "category": "Assainissement & hygiène (WASH)",
    "title": "Lot 22 : 12 cabines de latrines, lave-mains et 3 plateformes de gestion des déchets dans 3 centres de santé",
    "location": "Hassidina (commune de Alfacrouna), district d'Achouratt, région de Taoudéni",
    "partner": "UNICEF",
    "year": "2022 – 2023",
    "impact": "Intervention réalisée pour le compte de l'UNICEF. Ces ouvrages améliorent les conditions d'hygiène et d'assainissement des usagers."
  },
  {
    "id": "ref-090",
    "category": "Assainissement & hygiène (WASH)",
    "title": "Lot 15 : 18 cabines de latrines, réhabilitation de 16 cabines, 11 dispositifs lave-mains et 5 plateformes de gestion des déchets dans des centres de santé",
    "location": "Bambara Maoudé, Hondoubomo Koïna (Alafia), Madiakoye, Minkiri (Hamzakoma), Nounou (Soboundou), Soumpi, cercle de Tombouctou, Gourma-Rharous, Niafunké, région de Tombouctou",
    "partner": "UNICEF",
    "year": "2021",
    "impact": "Intervention réalisée pour le compte de l'UNICEF. Ces ouvrages améliorent les conditions d'hygiène et d'assainissement des usagers."
  },
  {
    "id": "ref-091",
    "category": "Assainissement & hygiène (WASH)",
    "title": "Réalisation de 500 ml de caniveaux au niveau des logements",
    "location": "commune de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : Living Earth Foundation (LEF)). Ces ouvrages améliorent les conditions d'hygiène et d'assainissement des usagers."
  },
  {
    "id": "ref-092",
    "category": "Assainissement & hygiène (WASH)",
    "title": "Construction de 100 ml de caniveaux",
    "location": "commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "Commune de Ber",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune de Ber. Ces ouvrages améliorent les conditions d'hygiène et d'assainissement des usagers."
  },
  {
    "id": "ref-093",
    "category": "Assainissement & hygiène (WASH)",
    "title": "Réhabilitation de blocs de latrines dans des écoles (dont école Assatou Kora de Bourem Inaly) et ouvrages associés",
    "location": "Bourem Inaly, Tintelout, Ber, Arnassaye, Beregoungou, Hassidino, Teherdje, région de Tombouctou",
    "partner": "Action contre la Faim (ACF)",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte d'Action contre la Faim (ACF). Ces ouvrages améliorent les conditions d'hygiène et d'assainissement des usagers."
  },
  {
    "id": "ref-094",
    "category": "Assainissement & hygiène (WASH)",
    "title": "Travaux de caniveaux",
    "location": "Tombouctou, région de Tombouctou",
    "partner": "Action contre la Faim (ACF)",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte d'Action contre la Faim (ACF). Ces ouvrages améliorent les conditions d'hygiène et d'assainissement des usagers."
  },
  {
    "id": "ref-095",
    "category": "Infrastructures pastorales & élevage",
    "title": "Construction de 3 magasins d'aliments bétail à Korientzé, Ténenkou et Youwarou",
    "location": "Korientzé, Ténenkou, Youwarou, cercle de Mopti, Ténenkou, Youwarou, région de Mopti",
    "partner": "PRAPS 2 – Ministère du Développement rural",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte du PRAPS 2 – Ministère du Développement rural (financement : Banque mondiale (Crédit 6861-ML)). Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-096",
    "category": "Infrastructures pastorales & élevage",
    "title": "Construction du parc de vaccination de Sonima et réhabilitation de celui de Lerneb (réponse COVID-19)",
    "location": "Sonima (commune de Alzounoub), Lerneb (commune de Tilemsi), cercle de Goundam, région de Tombouctou",
    "partner": "Solidarités International",
    "year": "2021 – 2022",
    "impact": "Intervention réalisée pour le compte de Solidarités International. Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-097",
    "category": "Infrastructures pastorales & élevage",
    "title": "Construction d'un parc de vaccination à Bankor",
    "location": "Bankor – commune de Essakane, cercle de Goundam, région de Tombouctou",
    "partner": "CICR",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte du CICR. Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-098",
    "category": "Infrastructures pastorales & élevage",
    "title": "Fonçage de deux (2) puits pastoraux",
    "location": "commune de Tin Aïcha, cercle de Goundam, région de Tombouctou",
    "partner": "Conseil régional de Tombouctou",
    "year": "2017",
    "impact": "Intervention réalisée pour le compte du Conseil régional de Tombouctou (financement : ANICT). Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-099",
    "category": "Infrastructures pastorales & élevage",
    "title": "Construction de deux parcs de vaccination à Dibla et Zinzin",
    "location": "Dibla, Zinzin – commune de Doukouria, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : Living Earth Foundation (LEF)). Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-100",
    "category": "Infrastructures pastorales & élevage",
    "title": "Fonçage d'un puits pastoral à Wana",
    "location": "Wana – commune de Doukouria, cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : AEN (Projet Eau Hygiène Assainissement)). Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-101",
    "category": "Infrastructures pastorales & élevage",
    "title": "Construction d'un parc de vaccination",
    "location": "commune de Gargando, cercle de Goundam, région de Tombouctou",
    "partner": "Conseil régional de Tombouctou",
    "year": "2016",
    "impact": "Intervention réalisée pour le compte du Conseil régional de Tombouctou (financement : ANICT). Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-102",
    "category": "Infrastructures pastorales & élevage",
    "title": "Réalisation d'un marché à bétail et d'une aire d'abattage",
    "location": "commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "CICR",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte du CICR. Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-103",
    "category": "Infrastructures pastorales & élevage",
    "title": "Construction des aires d'abattage de Niafunké, Diré et Goundam",
    "location": "Niafunké, Diré, Goundam, cercle de Niafunké, Diré, Goundam, région de Tombouctou",
    "partner": "Conseil régional de Tombouctou",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte du Conseil régional de Tombouctou. Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-104",
    "category": "Infrastructures pastorales & élevage",
    "title": "Réalisation d'un parc de vaccination à Ikouneden",
    "location": "Ikouneden – commune de Alafia, cercle de Tombouctou, région de Tombouctou",
    "partner": "Commune rurale d'Alafia",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune rurale d'Alafia (financement : Commune d'Alafia). Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-105",
    "category": "Infrastructures pastorales & élevage",
    "title": "Construction d'un parc métallique de vaccination à Hassi Kayar",
    "location": "Hassi Kayar – commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "Commune de Ber",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune de Ber (financement : ANICT). Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-106",
    "category": "Infrastructures pastorales & élevage",
    "title": "Fonçage d'un puits pastoral à Tindjaré",
    "location": "Tindjaré – commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "Commune de Ber",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune de Ber. Ces infrastructures soutiennent l'activité pastorale et la santé du cheptel."
  },
  {
    "id": "ref-107",
    "category": "Infrastructures économiques & stockage",
    "title": "Réalisation d'infrastructures à Koro, Gnini et Bih",
    "location": "commune de Koro, Bondo, région de Mopti",
    "partner": "Projet de Financement Inclusif (INCLUSIF/SD3C)",
    "year": "2023",
    "impact": "Intervention réalisée pour le compte du Projet de Financement Inclusif (INCLUSIF/SD3C). Ces infrastructures soutiennent les activités économiques locales et la conservation des productions."
  },
  {
    "id": "ref-108",
    "category": "Infrastructures économiques & stockage",
    "title": "Construction de trois magasins de stockage de 20 tonnes",
    "location": "Cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2020",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : Living Earth Foundation (LEF)). Ces infrastructures soutiennent les activités économiques locales et la conservation des productions."
  },
  {
    "id": "ref-109",
    "category": "Infrastructures économiques & stockage",
    "title": "Construction de 6 magasins de stockage",
    "location": "Cercle de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2018",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : WHH-BMZ). Ces infrastructures soutiennent les activités économiques locales et la conservation des productions."
  },
  {
    "id": "ref-110",
    "category": "Infrastructures économiques & stockage",
    "title": "Construction d'une unité de transformation et de commercialisation de lait",
    "location": "Akayabé – commune de Diré, région de Tombouctou",
    "partner": "MEF / PRRE – CARE International au Mali",
    "year": "2018",
    "impact": "Intervention réalisée pour le compte du MEF / PRRE – CARE International au Mali (financement : IDA – Don H901-ML). Ces infrastructures soutiennent les activités économiques locales et la conservation des productions."
  },
  {
    "id": "ref-111",
    "category": "Fournitures & équipements",
    "title": "Fourniture et livraison de tables-bancs aux Académies d'enseignement",
    "location": "Académies d'enseignement (dont Bougouni)",
    "partner": "Ministère de l'Éducation nationale – UGP MIQRA",
    "year": "2026",
    "impact": "Intervention réalisée pour le compte du Ministère de l'Éducation nationale – UGP MIQRA (financement : Banque mondiale). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-112",
    "category": "Fournitures & équipements",
    "title": "Fourniture et installation d'équipements et mobiliers sanitaires – Dangha et Koura",
    "location": "Dangha, Koura – commune de Dangha, cercle de Diré, région de Tombouctou",
    "partner": "AGETIER-Mali / Fonds de Solidarité Nationale",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali / Fonds de Solidarité Nationale (financement : BAD / Budget national (PARSEP-NM)). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-113",
    "category": "Fournitures & équipements",
    "title": "Fourniture et installation d'équipements et mobiliers sanitaires – Djédjéfou et Fifo",
    "location": "Djédjéfou, Fifo – commune de Haribomo, cercle de Bambara-Maoudé, région de Tombouctou",
    "partner": "AGETIER-Mali / Fonds de Solidarité Nationale",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali / Fonds de Solidarité Nationale (financement : BAD / Budget national (PARSEP-NM)). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-114",
    "category": "Fournitures & équipements",
    "title": "Fourniture et installation d'équipements et mobiliers sanitaires – Léré et Sondage",
    "location": "Léré, Sondage – commune de Léré, cercle de Niafunké, région de Tombouctou",
    "partner": "AGETIER-Mali / Fonds de Solidarité Nationale",
    "year": "2024",
    "impact": "Intervention réalisée pour le compte de l'AGETIER-Mali / Fonds de Solidarité Nationale (financement : BAD / Budget national (PARSEP-NM)). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-115",
    "category": "Fournitures & équipements",
    "title": "Achat/fourniture de matériels didactiques pour les écoles RMI",
    "location": "Région de Tombouctou, région de Tombouctou",
    "partner": "AMSS",
    "year": "2023",
    "impact": "Intervention réalisée pour le compte de l'AMSS. EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-116",
    "category": "Fournitures & équipements",
    "title": "Achat de matériels didactiques et fournitures scolaires pour les centres SSA/P (30 centres) et AA",
    "location": "Région de Tombouctou, région de Tombouctou",
    "partner": "AMSS",
    "year": "2021 – 2023",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : NORAD (lot fournitures)). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-117",
    "category": "Fournitures & équipements",
    "title": "Fourniture d'aliments bétail (projet DAP)",
    "location": "Tombouctou et Rharous, cercle de Tombouctou, Gourma-Rharous, région de Tombouctou",
    "partner": "FAO Mali",
    "year": "2023",
    "impact": "Intervention réalisée pour le compte de la FAO Mali. EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-118",
    "category": "Fournitures & équipements",
    "title": "Achat de kits de dignité (survivantes) et de kits bébé",
    "location": "Ménaka, région de Ménaka",
    "partner": "AMSS",
    "year": "2020",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : HCR). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-119",
    "category": "Fournitures & équipements",
    "title": "Fourniture de matériels informatiques",
    "location": "Tombouctou, région de Tombouctou",
    "partner": "ADES Mali",
    "year": "2020",
    "impact": "Intervention réalisée pour le compte de l'ADES Mali. EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-120",
    "category": "Fournitures & équipements",
    "title": "Fourniture de 602 150 litres de diesel pour périmètres irrigués villageois",
    "location": "Cercle de Niafunké, région de Tombouctou",
    "partner": "AMSS",
    "year": "2019",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : WHH-BMZ). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-121",
    "category": "Fournitures & équipements",
    "title": "Achat de matériels et équipements pour les centres YEP",
    "location": "Goundam et Gourma-Rharous, cercle de Goundam, Gourma-Rharous, région de Tombouctou",
    "partner": "AMSS",
    "year": "2019",
    "impact": "Intervention réalisée pour le compte de l'AMSS. EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-122",
    "category": "Fournitures & équipements",
    "title": "Acquisition de matériels informatiques pour l'équipe LuxDev",
    "location": "Bamako / Mali",
    "partner": "Lux-Développement (Projet MLI/021)",
    "year": "2019",
    "impact": "Intervention réalisée pour le compte de Lux-Développement (Projet MLI/021) (financement : Coopération luxembourgeoise). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-123",
    "category": "Fournitures & équipements",
    "title": "Achat de 330 chèvres et 110 boucs",
    "location": "commune de Ber, cercle de Tombouctou, région de Tombouctou",
    "partner": "Conseil régional de Tombouctou",
    "year": "2019",
    "impact": "Intervention réalisée pour le compte du Conseil régional de Tombouctou (financement : ANICT). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-124",
    "category": "Fournitures & équipements",
    "title": "Fourniture de 505 000 litres de diesel pour périmètres irrigués villageois",
    "location": "Cercle de Diré, région de Tombouctou",
    "partner": "AMSS",
    "year": "2018",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : WHH-BMZ). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-125",
    "category": "Fournitures & équipements",
    "title": "Achat et fourniture de farine Misola et de 300 chèvres pour l'embouche",
    "location": "commune de Goundam, région de Tombouctou",
    "partner": "AMSS",
    "year": "2018",
    "impact": "Intervention réalisée pour le compte de l'AMSS (financement : Living Earth Foundation (LEF)). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-126",
    "category": "Fournitures & équipements",
    "title": "Fourniture de mobilier de bureau à la mairie",
    "location": "commune de Alafia, cercle de Tombouctou, région de Tombouctou",
    "partner": "Commune rurale d'Alafia",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte de la Commune rurale d'Alafia (financement : ANICT). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  },
  {
    "id": "ref-127",
    "category": "Fournitures & équipements",
    "title": "Achat et fourniture de matériels et équipements médicaux pour 15 CSCOM",
    "location": "Cercles de Bambara Maoudé et Gourma-Rharous, cercle de Bambara-Maoudé, Gourma-Rharous, région de Tombouctou",
    "partner": "Islamic Relief Mali",
    "year": "À préciser",
    "impact": "Intervention réalisée pour le compte d'Islamic Relief Mali (financement : IR UK & Every Pregnancy). EMT a assuré l'approvisionnement et la livraison des biens jusqu'aux sites bénéficiaires."
  }
];
