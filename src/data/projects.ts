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
    slug: 'Portfolio ',
    title: 'Porfolio ',
    description: ' Application mobile de portfolio personnel développée . Présentation des projets, compétences et expériences professionnelles à travers une interface moderne et intuitive.',
    image: '/projects/pf.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Emma781227/PortFolioNKE',
    demo: 'https://portfolio-nke-elomo.vercel.app/en',
    category: 'web'
  },
  {
    slug: 'fuel',
    title: 'Fuel',
    description: 'Application web pour suivre les pleins d\'essence avec calculs automatiques des kilomètres parcourus, consommation et coûts. Inclut des statistiques en temps réel, visualisations graphiques, estimations de trajet, et interface moderne.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Next.js API Routes', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/TabarBaptiste/fuel',
    demo: 'https://fuel-nine.vercel.app/',
    demoLabel: 'Voir l\'application',
    category: 'web',
    screenshots: [
      { name: 'Tableau de bord', path: '/projects/fuel/tableau_bord.png' },
      { name: 'Historique', path: '/projects/fuel/historique.png' },
      { name: 'Résumé mensuel', path: '/projects/fuel/resume_mensuel.png' },
      { name: 'Graphiques', path: '/projects/fuel/graphiques.png' }
    ],
    detailedContent: {
      introduction: 'Application web **full-stack** développée pour suivre et gérer efficacement les pleins d\'essence d\'un véhicule.\n\nPensée pour un usage personnel, elle offre une interface intuitive permettant d\'enregistrer chaque plein, de visualiser les statistiques de consommation et de coûts, avec des calculs automatiques des kilomètres parcourus et de la consommation moyenne.\n\nLe projet met l\'accent sur une **expérience utilisateur fluide**, des **visualisations graphiques claires** et une **persistance fiable des données**. L\'ensemble a été conçu pour être **performant**, **maintenable** et facilement **déployable**.',
      features: [
        'Gestion des pleins :',
        '  • Ajout et suppression de pleins d\'essence',
        '  • Saisie des données (kilométrage, litres, prix)',
        '  • Calcul automatique des kilomètres parcourus',
        '  • Calcul automatique de la consommation (L/100km)',
        '  • Calcul automatique des coûts totaux',
        'Statistiques et visualisations :',
        '  • Graphiques en temps réel des consommations',
        '  • Évolution des coûts sur le temps',
        '  • Moyennes et tendances',
        '  • Cartes visuelles interactives',
        'Estimations de trajet :',
        '  • Calcul des litres estimés pour un trajet donné',
        '  • Estimation du coût basé sur la consommation moyenne',
        '  • Planification économique des déplacements',
        'Authentification et sécurité :',
        '  • Connexion sécurisée via code PIN',
        '  • Protection des données personnelles',
      ],
      technical: [
        {
          title: 'Frontend – Next.js 14',
          items: [
            '**Next.js** avec App Router pour une navigation moderne',
            '**React** pour la construction d\'interfaces dynamiques',
            '**TypeScript** pour la sécurité des types',
            '**Tailwind CSS** pour un design responsive et cohérent',
            'Composants réutilisables et modulaires',
            'Optimisation des performances et du SEO'
          ]
        },
        {
          title: 'Backend – Next.js API Routes',
          items: [
            '**API Routes** de **Next.js** pour les endpoints backend',
            'Architecture RESTful pour les opérations CRUD',
            'Validation des données côté serveur',
            'Gestion des erreurs et logging'
          ]
        },
        {
          title: 'Base de données – Neon PostgreSQL & Prisma ORM',
          items: [
            '**Prisma ORM** pour une gestion type-safe de la base',
            '**Neon PostgreSQL** pour l\'hébergement cloud de la base de données',
            'Schéma relationnel pour les pleins et véhicules',
            'Migrations automatisées et versionnées'
          ]
        },
        {
          title: 'Déploiement – Vercel',
          items: [
            'Déploiement automatique avec **Vercel** pour l\'hébergement full-stack (frontend + API)',
            'Variables d\'environnement sécurisées',
            'Monitoring des performances intégré'
          ]
        }
      ],
      workflow: 'Le projet suit un **workflow de développement simplifié** adapté à une application personnelle :\n\n1. **Développement local** : Next.js en mode développement avec base de données Neon\n2. **Contrôle qualité** : Vérifications TypeScript et tests manuels\n3. **Déploiement automatique** : Push sur GitHub déclenche le déploiement sur Vercel\n\nCette approche garantit **rapidité de développement** et **fiabilité du déploiement** pour un projet personnel.'
    }
  },
  {
    slug: 'recettes',
    title: 'Recettes - Application de recettes',
    description: 'Application web personnelle permettant de gérer, organiser et partager facilement mes recettes de cuisine.\n\n Elle centralise toutes mes préparations en un seul endroit et me permet d’ajouter, modifier ou supprimer des recettes en quelques secondes.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    technologies: ['Angular', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Render', 'Netlify'],
    github: 'https://github.com/TabarBaptiste/recettePerso',
    demo: 'https://recette-perso.netlify.app/',
    demoLabel: 'Voir le site',
    category: 'web',
    screenshots: [
      { name: 'Détails Techniques', path: '/projects/Recettes_Details_techniques.png' },
    ],
    detailedContent: {
      introduction: 'Application web **full-stack** permettant de créer, organiser et consulter mes recettes de cuisine.\n\n Pensée pour un usage personnel, elle offre un parcours simple et rapide : ajout, modification, suppression et consultation des recettes (**CRUD**) grâce à un accès sécurisé par **code PIN à quatre chiffres**.\n\nLe projet met l\'accent sur une **interface épurée**, une **structure claire** et une **logique backend fiable**. L\'ensemble a été conçu pour être facilement **maintenable**, **déployable** et **évolutif**, avec une gestion propre des données et un **hébergement découplé** entre le frontend et le backend',
      technical: [
        {
          title: 'Frontend',
          items: ['Le frontend est conçu avec **Angular** pour sa structure claire et modulable, ainsi qu\'avec **Tailwind CSS**, qui facilite la création d\'une interface sobre et cohérente. L\'utilisation des **standalone components** permet une architecture plus légère et moderne.']
        },
        {
          title: 'Backend',
          items: ['Le backend repose sur **Express**, choisi pour sa simplicité, sa performance et la flexibilité qu\'il offre dans la création d\'**API REST** robustes.']
        },
        {
          title: 'ORM',
          items: ['J\'ai utilisé **Prisma** pour sa rapidité de développement et la clarté de son schéma. Il facilite la gestion des migrations et assure une bonne lisibilité du modèle de données.']
        },
        {
          title: 'Base de données',
          items: ['La base de données est hébergée sur **NeonDB**, un service **PostgreSQL** moderne offrant une intégration simple, du stockage gratuit et un environnement scalable si besoin. Grâce à **Prisma**, une éventuelle migration vers un autre service resterait simple.']
        },
        {
          title: 'Web services',
          items: ['Le backend est déployé sur **Render**, connecté directement à **NeonDB**. Render permet un déploiement automatique via **GitHub** et une gestion intuitive des services.']
        },
        {
          title: 'Déploiement',
          items: ['Le frontend est déployé sur **Netlify**, tandis que le backend est hébergé sur **Render**.\n\nCes deux solutions offrent une mise en ligne rapide, gratuite et parfaitement adaptée aux projets personnels.']
        }
      ]
    }
  },
  {
    slug: 'alydousheure',
    title: 'Aly dous\'heure - Site vitrine',
    description: 'Site vitrine moderne pour une masseuse professionnelle. Système de réservation en ligne, catalogue complet des prestations, visualisation des disponibilités, formulaire de contact et géolocalisation. Interface responsive optimisée pour mobile et desktop.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    technologies: ['Astro', 'CI/CD', 'Tailwind CSS', 'JavaScript', 'Référencement SEO'],
    github: 'https://github.com/TabarBaptiste/alydousheure_vitrine',
    demo: 'https://aly-dousheure.netlify.app/',
    demoLabel: 'Voir le site',
    category: 'web',
    detailedContent: {
      introduction: 'Création d\'un site vitrine moderne pour une masseuse professionnelle indépendante.\n\nLe site présente les prestations, les disponibilités, les informations de contact ainsi qu\'une carte de localisation.\n\nL\'objectif était de proposer une interface claire, chaleureuse et mobile first.\n\nCe projet m\'a également permis de travailler sur un vrai besoin client en intégrant identité visuelle, optimisation du contenu et bonnes pratiques SEO.',
      features: [
        'Catalogue complet des prestations et tarifs',
        'Visualisation des horaires et disponibilités',
        'Liens directs vers appel téléphonique, WhatsApp et Instagram',
        'Géolocalisation intégrée',
        'Interface responsive (mobile-first)',
        'Optimisation SEO pour la visibilité locale'
      ],
      technical: [
        {
          title: 'Technologies',
          items: [
            '**Astro** pour le rendu statique et la structure du site',
            '**Tailwind CSS** pour le design et la mise en page',
            '**Google Analytics** & **Google Search Console** pour le suivi du trafic et l\'optimisation',
            '**@astrojs/sitemap** pour améliorer l\'indexation par les moteurs de recherche'
          ]
        }
      ],
      workflow: 'Un workflow **CI/CD GitHub Actions** est mis en place pour automatiser le process de build.\n\nÀ chaque push sur la branche `master`, le pipeline :\n\n1. Vérifie et récupère le dépôt\n2. Installe les dépendances\n3. Génère la version optimisée du site\n4. Produit un artefact prêt à être déployé\n\nCe système garantit un déploiement rapide, fiable et reproductible à chaque mise à jour du projet.'
    }
  },
  {
    slug: 'rjweb',
    title: 'RjWeb - Plateforme communautaire',
    description: 'Plateforme web développée durant mon stage pour centraliser les activités du quartier Lavalle. Inscription aux évènements, newsletter automatisée, gestion des participants et espace administrateur complet.',
    image: '/projects/preview.png',
    imageLight: '/projects/preview_white.png',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/TabarBaptiste/pyramide',
    demo: null,
    category: 'web',
    screenshots: [
      { name: 'Accueil', path: '/projects/utilisateur.png' },
      { name: 'Connexion', path: '/projects/connexion.png' },
      { name: 'Contact', path: '/projects/contact.png' },
      { name: 'Inscription', path: '/projects/inscription.png' },
      { name: 'Liste inscrits', path: '/projects/inscrit.png' },
      { name: 'Profil', path: '/projects/profil.png' },
      { name: 'À propos', path: '/projects/about.png' }
    ],
    detailedContent: {
      introduction: 'Plateforme web réalisée durant mon stage de BTS pour centraliser et faciliter la gestion des activités du quartier Lavalle. \n\n Le site permettait aux habitants de s’inscrire aux évènements, de recevoir automatiquement les informations importantes par e-mail, et d’accéder à un espace personnel. \n\n Un espace administrateur complet permettait de gérer les évènements, les utilisateurs et les envois de newsletters.',
      features: [
        'Création de compte utilisateur, connexion, modification et suppression du compte.',
        'Inscription et désinscription aux différents évènements.',
        'Envoi automatique d’e-mails (confirmations, rappels, newsletters) avec **PHPMailer**.',
        'Espace administrateur permettant :',
        '  • de créer, modifier et supprimer les évènements,',
        '  • de gérer les participants,',
        '  • d’administrer les comptes utilisateurs.'
      ],
      technical: [
        {
          title: 'Frontend',
          items: ['Développé en **HTML**, **CSS**, **JavaScript**.', 'Interface simple et adaptée à un public non technique.']
        },
        {
          title: 'Backend',
          items: ['Développé en **PHP procédural** avec requêtes SQL directes.', 'Gestion de la base de données via **phpMyAdmin**.', 'Environnement local basé sur **WampServer**.']
        },
        {
          title: 'Outils et bibliothèques',
          items: ['**PHPMailer** pour l’envoi d’e-mails.', '**Sessions PHP** pour l’authentification.']
        }
      ]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
