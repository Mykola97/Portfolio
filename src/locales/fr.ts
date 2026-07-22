export default {
  commands: {
    help: {
      description: `Afficher les commandes disponibles`
    },
    about: {
      description: `Afficher des informations sur moi`,
      imgAlt: `Photo de profil`,
      summary: `Bonjour ! Je suis Mykola, développeur logiciel Full-Stack avec 7 ans d'expérience dans le domaine de la fintech, spécialisé dans les systèmes de paiement. Expertise en JavaScript, Node.js, Python et Java, avec une solide expérience dans le développement front-end et back-end, l'intégration d'API et l'optimisation des systèmes de traitement des transactions et des API bancaires.`,
      firstBlock: `J'aime concevoir des systèmes backend évolutifs, créer des interfaces frontend intuitives et améliorer l'expérience des développeurs.`,
      secondBlock: `Actuellement intéressé par :`,
      skills: {
        frontend: `React et Next.js pour le développement frontend`,
        backend: `Node.js, Java et Python pour le développement backend`,
        distributedSystems: `Systèmes distribués`,
        systemDesign: `Conception de systèmes`,
        tooling: `Outils pour développeurs`,
      },
      hobby: `En dehors du travail, j'aime apprendre le français, lire sur l'architecture logicielle, créer des projets personnels et jouer aux échecs.`
    },
    projects: {
      description: `Afficher mes projets`,
      firstProject: {
        title: `Foree Remittance (Nanopay)`,
        description: `Foree Remittance est une application internationale de transfert d'argent permettant d'envoyer des fonds vers le Pakistan, développée chez Nanopay. J'ai développé les principaux composants front-end et back-end, notamment l'inscription des utilisateurs, le traitement des transactions et le système de notifications par e-mail. La plateforme comptait plus de 2 000 utilisateurs actifs, traitait plus de 10 millions de dollars canadiens de transferts par semaine et permettait de réaliser la majorité des transferts en 1 à 2 minutes.`
      },
      secondProject: {
        title: `Terminal Portfolio (Personnel)`,
        description: `Un portfolio interactif inspiré d'un terminal, développé avec React et Next.js. Il propose une interface basée sur des commandes, une saisie animée dans le terminal, un affichage dynamique basé sur React, des ressources téléchargeables et une architecture modulaire de commandes.`
      },
      thirdProject: {
        title: `Site de réservation de bus (Personnel)`,
        description: `Une application web permettant de réserver des billets de bus, de rechercher des destinations et de consulter les itinéraires disponibles. Développée avec Django, PostgreSQL, JavaScript vanilla, HTML et Tailwind CSS, avec une base de données hébergée sur Neon.`
      }
    },
    cvFrance: {
      description: `Ouvrir mon CV en français`
    },
    cvEnglish: {
      description: `Ouvrir mon CV en anglais`
    }
  }
} as const;