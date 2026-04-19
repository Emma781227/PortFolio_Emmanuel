export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageLight?: string;
  technologies: string[];
  github?: string;
  demo?: string | null;
  demoLabel?: string;
  category: 'web' | 'mobile';
  screenshots?: { name: string; path: string }[];
  detailedContent?: {
    introduction: string;
    features?: string[];
    technical?: {
      title: string;
      items: string[];
    }[];
    workflow?: string;
    monitoring?: string;
    assets?: {
      title: string;
      items: string[];
    };
  };
}

export const projects: Project[] = [
  {
    slug: 'ble-dor-fullstack',
    title: 'Blé dor  - Plateforme de gestion pour boulangerie',
    description: 'Blé Dor est une application web de gestion pour boulangerie permettant de gérer produits, commandes et utilisateurs avec des dashboards personnalisés selon les rôles (client, gérant, propriétaire).',
    image: 'https://res.cloudinary.com/dlsgtpcaa/image/upload/v1776277820/Dachboard_bl%C3%A9_dor_ak3lt6.png',
    technologies: ['go', 'Next.js', 'Prisma', 'Stripe Connect', 'Cloudinary',  'Vercel', 'Render', 'GitHub Actions', ],
    github: 'https://github.com/Emma781227/Ble-dor',
    demo: 'https://ble-dor-1.vercel.app/',
    demoLabel: 'Voir le site',
    category: 'web',
     screenshots: [
      { name: 'page d\'acceuil', path: '/projects/Acceuil_blé_dor.png' },
      { name: 'Dashboard client', path: '/projects/Dashboard_client_blé_dor.png' },
      { name: 'Dashboard gérant', path: '/projects/Dashboard_manager_blé_dor.png' },
      { name: 'Page d\'inscription', path: '/projects/Inscription_Blé_dor.png' },
    ],
    detailedContent: {
      introduction: 'Plateforme web **full-stack** développée pour digitaliser l\'activité d\'une masseuse professionnelle indépendante.\n\nLe projet couvre l\'ensemble du parcours client : de la découverte des prestations à la réservation en ligne, en passant par le paiement sécurisé et la gestion post-visite (avis clients).\n\nCôté professionnel, l\'application offre un **tableau de bord complet** pour gérer les réservations, visualiser les statistiques, administrer les prestations et paramétrer le site.\n\nL\'architecture est pensée pour être **performante, maintenable et évolutive**, avec une **séparation claire entre frontend et backend**, un **déploiement automatisé** et une **gestion rigoureuse des données sensibles**.',
      features: [
         'Gestion des commandes en temps réel :',
  '  • Création et suivi des commandes côté client',
  '  • Mise à jour des statuts (en attente, préparation, prêt, livré)',
  '  • Attribution automatique d’un numéro de ticket',
  '  • Visualisation des commandes par rôle (client, manager, propriétaire)',

  'Gestion du catalogue produits :',
  '  • Ajout, modification et suppression de produits',
  '  • Activation/désactivation selon disponibilité (stock)',
  '  • Organisation par catégories (pain, viennoiserie, boissons, snacking)',
  '  • Intégration d’images produits',

  'Authentification et gestion des utilisateurs :',
  '  • Inscription et connexion sécurisées',
  '  • Gestion des rôles (CLIENT, MANAGER, OWNER)',
  '  • Isolation des données par utilisateur (chaque client voit ses commandes)',
  '  • Gestion des profils utilisateurs',

  'Dashboard client :',
  '  • Consultation des dernières commandes',
  '  • Suivi des statuts en temps réel',
  '  • Accès à l’historique des achats',
  '  • Interface simple et intuitive',

  'Dashboard manager :',
  '  • Gestion des commandes du jour',
  '  • Mise à jour des statuts en temps réel',
  '  • Gestion du catalogue produits',
  '  • Optimisation du flux en caisse',

  'Dashboard propriétaire :',
  '  • Vue globale des performances (CA, commandes, ticket moyen)',
  '  • Analyse hebdomadaire et journalière',
  '  • Gestion des managers (création, modification, suppression)',
  '  • Suivi des produits les plus vendus',

  'Architecture évolutive :',
  '  • Conception pensée pour une future application mobile',
  '  • API centralisée réutilisable (web + mobile)',
  '  • Système prêt pour intégration de paiements (Mobile Money, Orange Money)'
      ],
      technical: [
        {
          title: 'Frontend – Next.js',
          items: [
            'Framework React moderne avec **App Router** pour une navigation fluide avec **Next.js**',
            '**Server-Side Rendering (SSR)** pour l\'optimisation SEO',
            '**TypeScript** pour la sécurité des types',
            '**Tailwind CSS** pour un design responsive et cohérent',
            'Gestion d\'état avec **Zustand** pour les données globales',
            'Composants UI réutilisables et modulaires',
            'Optimisation des images et des performances'
          ]
        },
        {
          title: 'Backend – Next.js API Routes',
          items: [
             'API REST intégrée via **App Router (route.ts)**',
      'Architecture fullstack unifiée (frontend + backend)',
      'Validation des données côté serveur',
      'Gestion des rôles et sécurisation des accès',
      'Gestion des erreurs centralisée'
          ]
        },
        {
          title: 'Base de données – Prisma & PostgreSQL',
          items: [
             '**Prisma ORM** pour une gestion type-safe des données',
      '**PostgreSQL** pour la persistance des données',
      'Modélisation relationnelle (User, Order, Product, OrderItem)',
      'Relations avancées (client ↔ commandes, manager ↔ commandes)',
      'Migrations versionnées et évolutives'
          ]
        },
        {
          title: ' Authentification',
          items: [
            'Système basé sur session avec **getAuthSession()**',
      'Gestion des rôles utilisateurs (CLIENT, MANAGER, OWNER)',
      'Protection des routes côté serveur',
      'Isolation des données par utilisateur'
          ]
        },
        {
          title: 'Services externes',
          items: [
             'Intégration prévue de **Mobile Money** et **Orange Money**',
      'Possibilité d’ajouter Stripe ou autres solutions de paiement',
      'Upload d’images via services externes (Cloudinary envisagé)'
          ]
        },
        {
          title: 'Déploiement et Infrastructure',
          items: [
             '**Vercel** pour l’hébergement du frontend et backend Next.js',
      'Configuration des variables d’environnement',
      'Optimisation des performances via SSR et caching',
      'Architecture scalable pour montée en charge'
          ]
        },
        {
          title: 'CI/CD – GitHub Actions',
          items: [
            'Pipeline automatisé pour le frontend et le backend',
            'Tests unitaires et d\'intégration automatiques',
            'Vérification du build avant déploiement',
            'Déploiement automatique sur Vercel et Render',
            'Notifications en cas d\'échec du pipeline'
          ]
        }
      ],
      workflow: 'Le projet suit un workflow moderne :\n\n1. Développement local avec environnement Next.js et Prisma\n2. Gestion des versions avec Git et branches par fonctionnalités\n3. Tests manuels et validation des fonctionnalités (dashboard, commandes, produits)\n4. Build de production avec optimisation des performances\n5. Déploiement sur Vercel\n\nCette approche garantit une application stable, évolutive et maintenable.',
      monitoring: 'Le projet inclut :\n\n• Gestion des erreurs côté serveur (API)\n• Logs Prisma pour le suivi des requêtes base de données\n• Validation des données pour éviter les incohérences\n• Suivi des performances via Vercel\n• Structure prête pour ajout d’outils de monitoring avancés',
      assets: {
        title: 'Architecture globale',
        items: [
           '**Frontend (Next.js)** ↔ **API Routes** ↔ **Prisma ORM** ↔ **PostgreSQL**',
    '**Client / Manager / Owner** → accès sécurisé selon rôle',
    'Architecture pensée pour extension mobile (React Native / Expo)'
        ]
      }
    }
  },
  {
    slug: 'Biz manager',
    title: 'Platforme de creation de boutique en ligne - Biz manager',
    description: 'Plateforme de création de boutique en ligne permettant aux utilisateurs de créer et gérer leur propre boutique en ligne. Intégration de fonctionnalités de e-commerce avancées, gestion des stocks, et processus de paiement sécurisés.',
    image: '/projects/Acceuil_biz.png',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'CI/CD' , 'JavaScript', 'MCP', 'Base de données'],
    github: 'https://github.com/Emma781227/BizManager',
    demo: 'https://biz-manager-eta-umber.vercel.app/',
    demoLabel: 'Marketplace',
    category: 'web',
    screenshots: [
      { name: 'Espace commerçant', path: '/projects/Dashboard_biz.png' },
    ],
    detailedContent: {
      introduction: 'BizManager est une application web mobile-first conçue pour aider les petits commerçants à digitaliser la gestion de leur activité.\n\n Le projet répond à un besoin concret : centraliser la gestion d’une boutique, des produits, des commandes, des clients et des paiements dans un seul outil, tout en proposant une boutique publique simple d’accès pour les clients.\n\n L’application repose sur deux espaces distincts : un espace commerçant privé pour piloter l’activité, et un espace client public permettant de consulter les produits et commander facilement via WhatsApp.',
      features: [
         'Espace commerçant sécurisé avec authentification, vérification email et réinitialisation du mot de passe.',
    'Gestion complète de la boutique : informations, visuels, horaires et paramètres.',
    'CRUD produits avec catégories, images, filtres et gestion du stock.',
    'Gestion des clients et suivi des commandes avec statuts et paiements.',
    'Dashboard commerçant avec indicateurs clés de performance.',
    'Boutique publique accessible via un lien personnalisé.',
    'Catalogue client avec recherche, filtres, fiche produit et checkout simplifié.',
    'Commande client avec génération de message WhatsApp prérempli et référence de commande.',
    'PWA installable sur mobile pour une expérience plus proche d’une application.'
      ],
      technical: [
        {
          title: 'Stack',
          items: ['**Next.js App Router**',
        '**TypeScript**',
        '**Prisma ORM**',
        '**PostgreSQL**',
        '**Vercel**',
        '**Neon**'
          ]
        },
        {
          title: 'Ce que ce projet démontre',
          items: [
            'Conception d’une application full-stack orientée produit.',
        'Mise en place d’une architecture claire avec séparation entre espace privé et espace public.',
        'Gestion d’authentification, logique métier, multi-tenant et flux de commande.',
        'Déploiement en production avec gestion de base de données distante et variables d’environnement.',
        'Approche mobile-first et PWA pour une meilleure accessibilité sur smartphone.'
          ]
        },
        {
          title: 'Déploiement',
          items: [
            'La publication de l\'extension est automatisée grâce à **Azure**, permettant l\'**hébergement des artefacts de build**, la **gestion sécurisée du jeton VSCE** et le **déclenchement des workflows de publication**.',
            'Ce pipeline garantit des mises à jour rapides, cohérentes et reproductibles.'
          ]
        },
        {
          title: 'Objectif produit',
          items: ['Proposer un outil simple et concret pour des commerçants qui vendent déjà via WhatsApp, Instagram ou Facebook, mais qui ont besoin d’une solution plus structurée pour gérer leur activité.']
        }
      ]
    }
  },
  {
    slug: 'portfolio-nke',
    title: 'Portfolio professionnel - NKE Elomo',
    description: 'Portfolio professionnel bilingue (FR/EN) conçu pour présenter mon profil d\'ingénieur civil, mes projets techniques et mes compétences en design structurel, BIM et exécution de plans.',
    image: '/projects/pf.png',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'EmailJS', 'Vercel'],
    github: 'https://github.com/Emma781227/PortFolio_Emmanuel',
    demo: 'https://portfolio-nke-elomo.vercel.app/en',
    demoLabel: 'Voir le portfolio',
    category: 'web',
    screenshots: [
      { name: 'Accueil du portfolio', path: '/projects/pf.png' }
    ],
    detailedContent: {
      introduction: 'Portfolio web développé pour valoriser un profil d\'ingénieur civil orienté **structure**, **BIM** et **dessin d\'exécution**.\n\nLe site met en avant le parcours, les compétences techniques et les réalisations, avec une navigation claire et une expérience visuelle moderne adaptée au desktop comme au mobile.',
      features: [
        'Présentation claire du profil professionnel et des domaines d\'expertise.',
        'Section projets avec pages de détail et technologies associées.',
        'Navigation bilingue (français/anglais).',
        'Mise en avant du CV avec accès direct.',
        'Formulaire de contact intégré via EmailJS.',
        'Design responsive avec composants réutilisables.'
      ],
      technical: [
        {
          title: 'Frontend',
          items: [
            '**Astro** pour une architecture rapide et orientée contenu',
            '**TypeScript** pour la robustesse du code',
            '**Tailwind CSS** pour une interface moderne et responsive'
          ]
        },
        {
          title: 'Contenu et UX',
          items: [
            'Structuration modulaire des sections (hero, compétences, expériences, projets)',
            'Pages de détails générées par slug pour chaque projet',
            'Parcours utilisateur optimisé pour le recrutement et la prise de contact'
          ]
        },
        {
          title: 'Déploiement',
          items: [
            'Mise en ligne continue sur **Vercel**',
            'Versioning via **GitHub** avec workflow de mise à jour simple'
          ]
        }
      ]
    }
  },
  {
    slug: 'Editrix',
    title: 'Editrix - Co-monteur vidéo IA',
    description: 'Landing page Astro/React pour un co-monteur vidéo IA destiné aux créateurs de contenu, freelances et agences. Le site présente le produit, ses bénéfices, ses offres et ses cas d’usage avec une identité dark premium et un hero immersif.',
    image: '/projects/EdiHome.png',
    technologies: ['Astro 5', 'React 19', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Emma781227/Editrix',
    demo: null,
    category: 'web',
    screenshots: [
      { name: 'Hero', path: '/projects/EdiHome.png' },
      { name: 'Offres', path: '/projects/OffreEdi.png' },
      { name: 'À propos', path: '/projects/AboutEdi .png' },
    ],
    detailedContent: {
      introduction: 'Editrix est une landing page marketing conçue pour présenter un co-monteur vidéo IA destiné aux créateurs de contenu, freelances et agences.\n\nLe projet met l\'accent sur une **expérience immersive** avec un hero WebGL, des effets de verre et une identité visuelle dark premium. L\'objectif est de valoriser le produit de manière claire et crédible, tout en gardant une structure marketing complète pensée pour convertir.\n\nLe site est entièrement en français et combine des pages de présentation, des offres détaillées, une FAQ interactive, un formulaire de contact et les pages légales nécessaires.',
      features: [
        'Analyse automatique des rushs vidéo pour accélérer la sélection des passages utiles.',
        'Génération de rough-cuts intelligents pour réduire le temps de montage.',
        'Adaptation multi-formats pour YouTube, TikTok, Shorts et Reels.',
        'Sous-titres et exports automatisés pour simplifier la livraison finale.',
        'Offres structurées autour de Creator, Pro et Studio pour couvrir différents usages.',
        'Pages de conversion complètes avec hero, bénéfices, FAQ et contact.',
        'Interface pensée pour les créateurs, freelances et agences avec une direction visuelle premium.'
      ],
      technical: [
        {
          title: 'Stack technique',
          items: [
            '**Astro 5** pour une architecture orientée contenu et performante',
            '**React 19** pour les composants interactifs côté client',
            '**Three.js** pour l\'effet visuel immersif du hero',
            '**TypeScript** pour la sécurité des types',
            '**Tailwind CSS** pour le style responsive et cohérent'
          ]
        },
        {
          title: 'Structure du site',
          items: [
            'Accueil avec présentation du produit, hero animé, vidéo promo et CTA.',
            'À propos pour la vision, le positionnement et les engagements.',
            'Fonctionnalités pour expliquer le fonctionnement et les gains apportés par l\'IA.',
            'Pour qui pour les cas d\'usage créateurs, freelances et agences.',
            'Produits et tarifs pour détailler les offres Creator, Pro et Studio.',
            'FAQ avec recherche locale côté client.',
            'Contact et pages légales pour une structure marketing complète.'
          ]
        },
        {
          title: 'Fonctionnalités marquantes',
          items: [
            'Hero plein écran avec composant React LiquidEther et rendu WebGL.',
            'Vidéo promo intégrée dans `public/vid/pub.mp4` avec lecture pilotée par Intersection Observer.',
            'Fiches produits dynamiques via la route `src/pages/products/[id].astro`.',
            'Recherche instantanée dans la FAQ côté client.',
            'Navigation déjà structurée entre les pages marketing et les sections de conversion.'
          ]
        },
        {
          title: 'Installation et exécution',
          items: [
            '`npm install` pour installer les dépendances.',
            '`npm run dev` pour lancer le projet en local.',
            '`npm run build` pour générer la version de production.',
            '`npm run preview` pour prévisualiser le build localement.'
          ]
        },
        {
          title: 'Déploiement',
          items: [
            'Le projet est prêt pour un déploiement sur Vercel.',
            'La structure des pages permet une publication simple et maintenable.',
            'Le site est pensé pour être proprement affiché sur desktop et mobile.'
          ]
        }
      ],
      workflow: 'Le projet suit un workflow simple et efficace :\n\n1. Développement des pages marketing et des composants React.\n2. Intégration du hero WebGL, des effets visuels et de la vidéo promo.\n3. Validation du rendu responsive sur desktop et mobile.\n4. Build de production puis déploiement sur la plateforme cible.\n\nCette approche garantit une landing page rapide, immersive et facile à maintenir.',
      assets: {
        title: 'Arborescence utile',
        items: [
          'public/vid/ pour la vidéo promo.',
          'src/components/ pour les blocs marketing et le hero immersif.',
          'src/pages/products/ pour les fiches produits dynamiques.',
          'src/pages/faq/ pour la recherche locale des questions fréquentes.',
          'src/pages/legal/ pour les mentions légales et documents associés.'
        ]
      }
    }
  },
 
  
 
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
