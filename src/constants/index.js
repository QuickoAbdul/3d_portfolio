import {
    //Services
    mobile,
    backend,
    creator,
    web,
    //technologies
    html,
    reactjs,
    tailwind,
    nodejs,
    figma,
    docker,
    csharp,
    bootstrap,
    mysql,
    python,
    symfony,
    nuxtjs, 
    wordpress,
    //experience
    agencebigmoustache,
    ekidenskateshop,
    hdmnetwork,
    //projects
    techgalaxy,
    gantt,
    pythonpng,
    ecoprohabitat,
    eldenring,
    spaceinvaders,
    aframe,
    projetmvc,
    newsmobile,
    ekidenpng,
    gregoire,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Développeur",
      icon: web,
    },
    {
      title: "Mobile Développeur",
      icon: mobile,
    },
    {
      title: "Backend Développeur",
      icon: backend,
    },
    {
      title: "Créateur de contenu",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Symfony",
      icon: symfony,
    },
    {
      name: "Nuxt JS",
      icon: nuxtjs,
    },
    {
      name: "WordPress",
      icon: wordpress,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    
  ];
  
  const experiences = [
    {
      title: "Stage - Développeur Web",
      company_name: "Agence Big Moustache",
      icon: agencebigmoustache,
      iconBg: "#383E56",
      date: "Mai 2021 - Juin 2021",
      techs: ["WordPress", "PHP", "SEO", "FileZilla"],
      points: [
        "Développement de site web avec WordPress.",
        "Gestion des sauvegardes et de la maintenance des sites sur FTP.",
        "Maintenance de sites web en PHP, débogages des mises à jour et des plugins.",
        "SEO et référencement des sites webs pour une meilleur visibilité.",
      ],
    },
    {
      title: "Stage - Développeur Full Stack",
      company_name: "EKIDEN skateshop",
      icon: ekidenskateshop,
      iconBg: "#383E56",
      date: "Janvier 2022 - Mars 2022",
      techs: ["Symfony", "Bootstrap", "SEO"],
      points: [
        "Développement d'un site web en Symfony avec une gestion d'administration.",
        "Optimisation SEO et référencement du site pour une meilleur visibilité sur les moteurs de recherche.",
        "Implémentation de la conception réactive Bootstrap et pour garantie la compatibilité entre les navigateurs.",
        "Développement d'une gestion d'administration, des produits et des affiches mis en avant.",
      ],
    },
    {
      title: "Stage - Développeur Full Stack",
      company_name: "HDM Network",
      icon: hdmnetwork,
      iconBg: "#383E56",
      date: "Mars 2023 - Juin 2023",
      techs: ["Symfony", "React", "Aframe", "VueJS", "Bootstrap"],
      points: [
        "Développement de site Webs en scratch, React, VueJS, Aframe.",
        "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des SEO pour créer des sites de hautes qualités.",
        "Mise en place des conceptions webs réactives et compatible entre les navigateurs.",
        "Participation aux revues de code, à des CodinGames et fournir des commentaires constructifs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Dans chacune de ses missions Abdul Rahman a effectué son travail avec professionnalisme, rigueur et de manière organisée.",
      name: "Mousset Quentin",
      designation: "CEO",
      company: "HDM Network",
      image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    {
      testimonial:
        "Le projet a été bien mené dans l’ensemble, le travail était bon. Abdul Rahman a su s’adapter à nos besoins et a été force de proposition.",
      name: "Anonyme",
      designation: "Chef de projet WEB",
      company: "SkateShop",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Après que Abdul Rahman ait optimisé notre site Web, notre trafic a augmenté. Nous ne le remercierons jamais assez !",
      name: "Anonyme",
      designation: "CEO",
      company: "O Pain Soleil",
      image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tech Galaxy",
      description:
        "Boutique E-commerce permettant aux utilisateur de parcourir des produits, s'inscrire et passer des commandes. Intégration d'une gestion des produits, de la livraison et des commandes grâce à EasyAdmin.",
      tags: [
        {
          name: "Symfony",
          color: 'violet-text-gradient',
        },
        {
          name: "Bootstrap",
          color: "violet-text-gradient",
        },
        {
          name: "EasyAdmin",
          color: "pink-text-gradient",
        },
      ],
      image: techgalaxy,
      source_code_link: "https://github.com/QuickoAbdul/Shop-TechGalaxy-Symfony",
    },
    {
      name: "Projet Gantt",
      description:
        "Projet Gantt pour utiliser un diagramme de Gantt pour la gestion de projet pour un service RH. Intégration d'une gestion des tâches, des projets. Possibilité de créer, de les modifier et de les supprimer. Développement pour une intégration dans un DashBoard",
      tags: [
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "Html",
          color: "orange-text-gradient",
        },
        {
          name: "PHP",
          color: "violet-text-gradient",
        },
      ],
      image: gantt,
      source_code_link: "https://github.com/QuickoAbdul/Project-Gantt-Dashboard",
    },
    {
      name: "Python Script",
      description:
        "Python est l'un de mes langages de programmation préférés. Je développe souvent des scripts pour automatiser des tâches. Vous retrouverez ici tout mes scripts que j'ai pu développé et d'autres que je trouve très intéressant.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Bash-Shell",
          color: "green-text-gradient",
        },
        {
          name: "Git",
          color: "pink-text-gradient",
        },
      ],
      image: pythonpng,
      source_code_link: "https://github.com/QuickoAbdul/All-Python-Script",
    },
    {
      name: "EcoProHabitat",
      description:
        "Site sur WordPress à l'aide de différent plugins, NinjaForm, SEO, page contact et présentations des services. Gestion des sauvegardes et mise à jour des plugins.",
      tags: [
        {
          name: "WordPress",
          color: 'white',
        },
        {
          name: "FileZilla",
          color:'text-red-500',
        },
      ],
      image: ecoprohabitat,
      source_code_link: "https://github.com/QuickoAbdul/Shop-TechGalaxy-Symfony",
    },
    {
      name: "Ekiden SkateShop",
      description:
        "Développement d'un site vitrine/boutiqeu en Symfony. Fonctionalités implémenter ajout modifier supprimer des produits, filtrer, page contact, dernier post réseaux sociaux.",
      tags: [
        {
          name: "Symfony",
          color: 'violet-text-gradient',
        },
        {
          name: "GitHub",
          color:'grey-text-gradient',
        },
      ],
      image: ekidenpng,
      source_code_link: "https://ekidenskateshop.com/",
    },
    {
      name: "Grégoire Agencement",
      description:
        "Développement d'un site WordPress pour présenter les services d'une entreprise de décoration. Gestion des utilisateurs et des droits d'accès. Gestion des sauvegardes et des mises à jour des plugins.",
      tags: [
        {
          name: "WordPress",
          color: 'white-text-gradient',
        },
        {
          name: "FileZilla",
          color:'text-red-500',
        },
      ],
      image: gregoire,
      source_code_link: "https://github.com/QuickoAbdul",
    },
    {
      name: "Aframe ZombieShooter",
      description:
        "Développement d'un jeu de tir chronométré avec la bibliotèque AFrame en javascript. Le joueur doit éliminer le + rapidement les ennemis avant la fin du temps.Développement en JavaScript et HTML/CSS",
      tags: [
        {
          name: "JavaScript",
          color: 'yellow-text-gradient',
        },
        {
          name: "HTML/CSS",
          color:'blue-text-gradient',
        },
      ],
      image: aframe,
      source_code_link: "https://github.com/QuickoAbdul/aframe-zombieshooter",
    },
    {
      name: "Projet MVC Boutique",
      description:
        "Simulation d'une boutique développer en PHP en MVC afin de faciliter le BackEnd et le FrontEnd de la boutique. Fonctionalités implémenter filtrage, affichage, Ajout, Modifier et supprimeribliotèque",
      tags: [
        {
          name: "PHP",
          color: 'violet-text-gradient',
        },
        {
          name: "HTML/CSS",
          color:'blue-text-gradient',
        },
      ],
      image: projetmvc,
      source_code_link: "https://github.com/QuickoAbdul/ProjetMVC",
    },
    {
      name: "Projet NewsMobile React-Native ",
      description:
        "Application Live qui affiche les dernières actualités par rapport à la position exacte de l'utilisateur. Fonctionalités implémenter recherche des actualités par langue, par pays, par mots. Futur ajout : Enregistrement des actualités en favoris, partage des actualités, notifications, etc...",
      tags: [
        {
          name: "React-Native",
          color: 'blue-text-gradient',
        },
        {
          name: "Android Studio",
          color:'green-text-gradient',
        },
      ],
      image: newsmobile,
      source_code_link: "https://github.com/QuickoAbdul/ProjetReact",
    },
    {
      name: "API EldenRing",
      description:
        "Découverte d'une API sur un jeux-vidéo EldenRing, découverte de l'utilisation et l'exploitation d'une API en Scratch avec JavaScript et BootStrap. Fontionalité de pouvoir rechercher, trier et afficher les informations par rapport à la recherche.",
      tags: [
        {
          name: "JavaScript",
          color: 'yellow-text-gradient',
        },
        {
          name: "BootStrap",
          color:'violet-text-gradient',
        },
      ],
      image: eldenring,
      source_code_link: "https://github.com/QuickoAbdul/API-Projet",
    },
    {
      name: "SpaceInvader Custom",
      description:
        "Développement d'un jeu arcade SpaceInvader version customiser pour un projet d'école. Développement en JavaScript et HTML/CSS.",
      tags: [
        {
          name: "JavaScript",
          color: 'yellow-text-gradient',
        },
        {
          name: "HTML/CSS",
          color:'blue-text-gradient',
        },
      ],
      image: spaceinvaders,
      source_code_link: "https://github.com/QuickoAbdul/Custom_Spaceinvader",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };