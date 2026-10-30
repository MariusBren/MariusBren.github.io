// ajouter les projets ici
export const projects = [
  {
    name: "ERP de gestion logistique",
    category: "pro",
    tech: "React / React Router",
    year: 2025,
    keywords: ["Web App", "Front-End", "Responsive", "Git Flow", "En équipe"],
    description: [
        "Dans le cadre de mon stage de troisième année de BUT MMI, j'ai eu l'occasion de travailler sur la réalisation d'un ERP de gestion logistique pour une entreprise de montage d'échaffaudage.",
        "L'objectif de cet ERP était de permettre aux différents employés de l'entreprise cliente de gérer les mouvement de matériels entre les agences et chantiers.",
        "Mon rôle dans la réalisation de ce projet à été de développer la partie front-end de l'ERP. Pour ce faire j'ai principalement eu recours à la technologie React ainsi que le framework React Router.",
        "Par ailleurs, une part importante de mon travail a été réalisée de paire avec mon collègue responsable du back-end, pour concevoir les fonctionnalités et synchroniser les logiques front-end et back-end de ces fonctionnalités."
    ],
    resources: [
        { label: "React", url: "https://react.dev" },
        { label: "React Router", url: "https://reactrouter.com/" },
        { label: "Tailwind", url: "https://tailwindcss.com/" },
        { label: "Figma", url: "https://www.figma.com/fr-fr/" },
        { label: "Jira", url: "https://www.atlassian.com/fr/software/jira" },
        { label: "Postman", url: "https://www.postman.com/" },
        { label: "Docker", url: "https://www.docker.com/" },
        { label: "PostgreSQL", url: "https://www.postgresql.org/" },
        { label: "GitLab", url: "https://about.gitlab.com/" },
    ],
    image: { src: "images/erp1.jpg", alt: "Image d'illustration / échaffaudage" },
  },

  {
    name: "Moteur de jeu éducatif sur navigateur",
    category: "pro",
    tech: "PHP / JavaScript",
    year: 2024,
    keywords: ["Front-End", "Back-End", "Site Internet", "MVC", "En équipe"],
    description: [
        "Au cours du stage de seconde annéee de mon BUT MMI, mon objectif a été travailler sur le développement d'un moteur permettant de réaliser des jeux éducatifs de type point & click sur navigateur ainsi que d'y jouer.",
        "L'essentiel de mon travail a été portée sur l'ajout de nouvelles fonctionnalités à ce moteur, telles que la prise en charge de contenu vidéo ou encore l'ajout d'effet visuels.",
        "J'ai aussi été chargé d'optimiser de nombreux aspect du moteur jeu tant d'un point de vue technique (correction de bug, amélioration des performance, optimisation du code) que d'un point de vue utilisateur (amélioration des interface et parcours utilisateurs).",
        "Enfin, j'ai aussi eu l'occasion de travailler en équipe sur l'intégration du service d'intelligence artificielle Groq au site pour permettre une création automatisée de jeu à partir d'un simple prompt."
    ],
    resources: [
        { label: "PHP", url: "https://www.php.net/" },
        { label: "JavaScript", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
        { label: "Bootstrap", url: "https://getbootstrap.com/" },
        { label: "Laragon", url: "https://laragon.org/" },
        { label: "MySQL", url: "https://www.mysql.com/fr/" },
        { label: "Groq", url: "https://groq.com/" },
        { label: "GitLab", url: "https://about.gitlab.com/" },
    ],
    image: { src: "images/moteur1.jpg", alt: "Image d'illustration / cours d'informatique" },
  },
];