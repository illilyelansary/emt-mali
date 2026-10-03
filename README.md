# EMT SARL — Site vitrine institutionnel

Site officiel de l’**Entreprise Malienne de Travaux (EMT SARL)**, basé à Tombouctou et prêt à être déployé sur GitHub Pages, Netlify ou toute autre plateforme statique.

## Données intégrées depuis le document officiel

Le site a été restructuré à partir du document `EMT_Contenus_Site_Internet.docx` fourni par l’entreprise. Il présente désormais **127 références**, **8 domaines d’expertise**, **10 zones d’intervention** et un réseau de **plus de 25 partenaires**.

Les huit domaines sont l’hydraulique et l’eau potable, les aménagements hydro-agricoles et le maraîchage, les bâtiments pour l’éducation, les bâtiments pour la santé, l’assainissement et l’hygiène WASH, les infrastructures pastorales et l’élevage, les infrastructures économiques et le stockage, ainsi que les fournitures et équipements.

La rubrique **Expérience** présente désormais un paragraphe institutionnel général, sans citer de projets, de partenaires, de lieux ou de détails individuels. Une section **Réalisations terrain** présente séparément un diaporama de 15 photographies transmises par EMT SARL.

## Informations officielles

- **Dénomination :** Entreprise Malienne de Travaux
- **Sigle :** EMT SARL
- **Année de création :** 2015
- **NIF :** 061001033N
- **RCCM :** MA.TBT.2015.B.128
- **Activités déclarées :** BTP, forages hydrauliques, transport, quincaillerie, aménagement et commerce général
- **Siège :** Sanfil, près de l'École de Santé Bouctou / Route de Kabara, Tombouctou
- **Représentation :** Torokorobougou, Rue 312 Porte 44, Bamako
- **Téléphones :** +223 79 19 94 66 / +223 69 19 94 66
- **Email :** entreprise@emt-mali.com
- **Devise :** Expertise. Engagement. Résultats.

## Développement local

```bash
npm install
npm run dev
```

Pour générer la version de production :

```bash
npm run build
```

Le dossier `dist/` généré est prêt à être servi par Netlify, Nginx, Apache ou une autre solution d’hébergement statique.

## Déploiement sur GitHub + Netlify

1. Créez un dépôt GitHub, par exemple `emt-sarl-website`.
2. Copiez tous les fichiers de cette archive dans le dépôt.
3. Envoyez les fichiers avec les commandes suivantes :

```bash
git init
git add .
git commit -m "Site EMT SARL — 127 références et 8 domaines"
git branch -M main
git remote add origin https://github.com/VOTRE_UTILISATEUR/emt-sarl-website.git
git push -u origin main
```

4. Dans Netlify, choisissez **Add new site > Import an existing project > GitHub**.
5. Sélectionnez le dépôt. Le fichier `netlify.toml` configure automatiquement `npm run build` et le dossier de publication `dist`.

## Organisation du dépôt

```text
├── .github/workflows/deploy.yml   Vérification automatique du build
├── public/images/                 Logo EMT et photos embarquées
├── docs/                          En-tête et logo originaux fournis
├── src/const.ts                   Données institutionnelles, zones et partenaires
├── src/references.ts              Données sources conservées pour l’historique éditorial
├── src/pages/Home.tsx             Page vitrine, diaporama et références filtrables
├── src/index.css                  Palette, typographie et base graphique
├── netlify.toml                   Configuration de déploiement Netlify
├── package.json                   Scripts et dépendances
└── README.md                      Ce guide
```

## Contenus disponibles dans `public/images`

Le dépôt embarque le logo EMT officiel, les photos de forage fournies par l’entreprise, les 15 nouvelles photos de réalisations terrain, des photos documentaires publiques du Mali pour les autres domaines, la plaquette EMT originale et une copie du document RCCM fourni. Les auteurs et licences des photos publiques sont détaillés dans [`IMAGE-CREDITS.md`](IMAGE-CREDITS.md).

© 2026 EMT SARL — Tous droits réservés.
