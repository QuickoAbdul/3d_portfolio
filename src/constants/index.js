import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    agencebigmoustache,
    ekidenskateshop,
    hdmnetwork,
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
      title: "Backend Dévelopeur",
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
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
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
      title: "Développeur Full Stack",
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
      image: "",
    },
    {
      testimonial:
        "Le projet a été bien mené dans l’ensemble, le travail était bon.",
      name: "Ahmed",
      designation: "Chef de projet WEB",
      company: "SkateShop",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Après que Abdul Rahman ait optimisé notre site Web, notre trafic a augmenté. Nous ne les remercierons jamais assez !",
      name: "Anonyme",
      designation: "CEO",
      company: "O Pain Soleil",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Boutique E-commerce permettant aux utilisateur de parcourir des produits, s'inscrire et passer des commandes. Intégration d'une gestion des produits, de la livraison et des commandes grâce à EasyAdmin.",
      tags: [
        {
          name: "Symfony",
          color: 'pink-text-gradient',
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "EasyAdmin",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/QuickoAbdul/Shop-TechGalaxy-Symfony",
    },
    {
      name: "Job IT",
      description:
        "Projet Gantt permettant d'utiliser un diagramme de Gantt pour la gestion de projet. Intégration d'une gestion des tâches, des projets. Possibilité de créer, de les modifier et de les supprimer",
      tags: [
        {
          name: "Js",
          color: "blue-text-gradient",
        },
        {
          name: "Php",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };