// gitprofile.config.js

const dataConfig = {
  social: {
    linkedin: 'vainius-vilkelis',
    medium: 'itsvaniwill',
    phone: '+37062341300',
    email: 'vilkelis.vainius@gmail.com',
  },
  about: {
    name: 'Vainius Vilkelis',
    bio: 'Full-stack Javascript developer.',
    story: `~3 years of combined programming experience \n 
      Interested in everything between automation and illustration <br>\n 
      Self-learner, curious, team-player with the sense of ownership \n`,
  },
  details: {
    story:
      'I have always been a creative person, interested in art, design, illustration, photography and code.',
    github: 'vilkelisv',
    phone: '+37062341300',
    email: 'vilkelis.vainius@gmail.com',
    linkedin: 'vainius-vilkelis',
    location: 'Vilnius',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    {
      name: 'JavaScript',
      used: '~3 years of combined experience. Both front end and back end, appscript, various niches uses.',
      color: 'bg-yellow-500',
    },
    {
      name: 'React.js',
      used: 'Around a year of work experience.',
      color: 'bg-blue-500',
    },
    {
      name: 'Node.js',
      used: 'Can create CRUD api, but do not understand it in depth.',
      color: 'bg-green-500',
    },
    {
      name: 'Git',
      used: 'Comfortable using it.',
      color: 'bg-indigo-500',
    },
    {
      name: 'AppsScript',
      used: 'Around a year of experience. Used for freelance work.',
      color: 'bg-orange-500',
    },
    {
      name: 'Python',
      used: 'Hobby projects.',
      color: 'bg-cyan-500',
    },
    {
      name: 'CSS',
      used: 'Using it for a long time, but never focued on it.',
      color: 'bg-violet-500',
    },
    {
      name: 'SCSS',
      used: 'Used for hobby projects.',
      color: 'bg-rose-500',
    },
  ],
  experiences: [
    {
      company: 'Surfshark',
      position: 'Full-stack Automation developer',
      from: 'December 2022',
      to: 'February 2023',
      companyLink: 'https://surfshark.com/',
    },
    {
      company: 'Fundvest',
      position: 'React developer',
      from: 'March 2022',
      to: 'December 2022',
      companyLink: 'https://fundvest.eu',
    },
    {
      company: 'Ignitis',
      position: 'RBA and macros developer',
      from: 'March 2021',
      to: 'January 2022',
      companyLink: 'https://ignitis.lt',
    },
  ],
  certifications: [
    {
      name: 'UX/UI WEB design course.',
      body: 'Vilnius Coding School',
      year: 'February 2022',
      link: 'https://drive.google.com/file/d/1u29zvpmm1wUHCGJ6NSJFC03lPcVzf1oI/view?usp=sharing',
    },
  ],
  education: [
    {
      institution: 'Vilnius Tech',
      degree: 'Information systems Bachelor',
      from: '2016',
      to: '2021',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Portfolio site',
      short: "Simple site to display some of the projects I've done.",
      description: `This is the latest project I’ve done. The goal was to create a modular and scalable portfolio site with a simple UI. To save time setting everything from scratch I’ve forked GitProfile project and changed website to my needs.
        At first site was semi-static one page website. Basic tailwind styling and configuration was already set up, so I could focus on adding sub-pages, animations, refactoring code and extracting reusable components. 
        For this project I wanted to focus solely on front-end, so there are no real back-end solution. Simple config file was used to provide UI with required data. 
        `,
      imageUrl: 'https://via.placeholder.com/250x250',
      code: 'https://github.com/VilkelisV/vilkelisv.github.io',
      goal: 'Create a modular and scalable portfolio site with a simple UI with a focus on maintaining clean React code',
      problems: [
        'Project skeleton was forked from Gitprofile. This repository provided with initial setup and some basic code, but lacked functionality.',
        'Code was not reusable, and mostly copy pasted everywhere.',
        'Goal was not to make the website as pretty and impressive, but usable, clear and concise. This made website feel bland and lacking the “wow” effect.',
      ],
      solutions: [
        'Most of the project skeleton code was refactored, extracted reusable components.',
        'To keep website simple, yet interesting, I’ve used framer-motion library for various transitions and effects.',
        'Created sub-pages for projects to showcase what I’ve created so far for job and hobby projects.',
      ],
    },
    {
      id: 2,
      title: 'Freelance',
      short: 'Google Workplace automations with AppsScript.',
      description: `This is the latest project I’ve done. The goal was to create a modular and scalable portfolio site with a simple UI. To save time setting everything from scratch I’ve forked GitProfile project and changed website to my needs.
        At first site was semi-static one page website. Basic tailwind styling and configuration was already set up, so I could focus on adding sub-pages, animations, refactoring code and extracting reusable components. 
        For this project I wanted to focus solely on front-end, so there are no real back-end solution. Simple config file was used to provide UI with required data. 
        `,
      imageUrl: 'https://via.placeholder.com/250x250',
      code: 'private',
      goal: 'Create a modular and scalable portfolio site with a simple UI with a focus on maintaining clean React code',
      problems: [
        'Project skeleton was forked from Gitprofile. This repository provided with initial setup and some basic code, but lacked functionality.',
        'Code was not reusable, and mostly copy pasted everywhere.',
        'Goal was not to make the website as pretty and impressive, but usable, clear and concise. This made website feel bland and lacking the “wow” effect.',
      ],
      solutions: [
        'Most of the project skeleton code was refactored, extracted reusable components.',
        'To keep website simple, yet interesting, I’ve used framer-motion library for various transitions and effects.',
        'Created sub-pages for projects to showcase what I’ve created so far for job and hobby projects.',
      ],
    },
    {
      id: 3,
      title: 'Backoffice CRM',
      short:
        'Internal web app to display and manipulate data from the back end.',
      description: `This is the latest project I’ve done. The goal was to create a modular and scalable portfolio site with a simple UI. To save time setting everything from scratch I’ve forked GitProfile project and changed website to my needs.
        At first site was semi-static one page website. Basic tailwind styling and configuration was already set up, so I could focus on adding sub-pages, animations, refactoring code and extracting reusable components. 
        For this project I wanted to focus solely on front-end, so there are no real back-end solution. Simple config file was used to provide UI with required data. 
        `,
      imageUrl: 'https://via.placeholder.com/250x250',
      code: 'private',
      goal: 'Create a modular and scalable portfolio site with a simple UI with a focus on maintaining clean React code',
      problems: [
        'Project skeleton was forked from Gitprofile. This repository provided with initial setup and some basic code, but lacked functionality.',
        'Code was not reusable, and mostly copy pasted everywhere.',
        'Goal was not to make the website as pretty and impressive, but usable, clear and concise. This made website feel bland and lacking the “wow” effect.',
      ],
      solutions: [
        'Most of the project skeleton code was refactored, extracted reusable components.',
        'To keep website simple, yet interesting, I’ve used framer-motion library for various transitions and effects.',
        'Created sub-pages for projects to showcase what I’ve created so far for job and hobby projects.',
      ],
    },
    {
      id: 4,
      title: 'Youtube api reader',
      short:
        'Small web app to read data from youtube api, store it in mongodb and display in react.',
      description: `This is the latest project I’ve done. The goal was to create a modular and scalable portfolio site with a simple UI. To save time setting everything from scratch I’ve forked GitProfile project and changed website to my needs.
        At first site was semi-static one page website. Basic tailwind styling and configuration was already set up, so I could focus on adding sub-pages, animations, refactoring code and extracting reusable components. 
        For this project I wanted to focus solely on front-end, so there are no real back-end solution. Simple config file was used to provide UI with required data. 
        `,
      imageUrl: 'https://via.placeholder.com/250x250',
      code: 'https://github.com/VilkelisV/vilkelisv.github.io',
      goal: 'Create a web app that gets video from youtube by id and displays video comments. This project was a task for one of the job interviews.',
      problems: [
        'Project skeleton was forked from Gitprofile. This repository provided with initial setup and some basic code, but lacked functionality.',
        'Code was not reusable, and mostly copy pasted everywhere.',
        'Goal was not to make the website as pretty and impressive, but usable, clear and concise. This made website feel bland and lacking the “wow” effect.',
      ],
      solutions: [
        'Most of the project skeleton code was refactored, extracted reusable components.',
        'To keep website simple, yet interesting, I’ve used framer-motion library for various transitions and effects.',
        'Created sub-pages for projects to showcase what I’ve created so far for job and hobby projects.',
      ],
    },
    {
      id: 5,
      title: 'Etsy scrapper',
      short: 'Python web scraper to find best sellers.',
      description: `This is the latest project I’ve done. The goal was to create a modular and scalable portfolio site with a simple UI. To save time setting everything from scratch I’ve forked GitProfile project and changed website to my needs.
        At first site was semi-static one page website. Basic tailwind styling and configuration was already set up, so I could focus on adding sub-pages, animations, refactoring code and extracting reusable components. 
        For this project I wanted to focus solely on front-end, so there are no real back-end solution. Simple config file was used to provide UI with required data. 
        `,
      imageUrl: 'https://via.placeholder.com/250x250',
      code: 'https://github.com/VilkelisV/vilkelisv.github.io',
      goal: 'For personal use I’ve decided to create a bot that scrapes the data from Etsy. The purpose for this bot is to find how many sales of items a shop had and display it in React web app.',
      problems: [
        'No website likes scraping, so I had to come up with some sort of system to avoid api use restrictions to not get timed out from the website.',
        'Not much experience with scrapping and python',
      ],
      solutions: [
        'For scraping I used BeautifulSoup, did all the basic steps for scraping the data, read the html, find elements by class/id, take required values',
        'Put data to json and sent it to client.',
        'To avoid timouts I did request randomizer. That’s the best I could do for my skill level with python and not paying for proxies, because this project had no economic value.',
      ],
    },
    {
      id: 6,
      title: 'Twitch widget editor',
      short: 'Niche project. Testing platform for Twitch chat widgets.',
      description: `This is the latest project I’ve done. The goal was to create a modular and scalable portfolio site with a simple UI. To save time setting everything from scratch I’ve forked GitProfile project and changed website to my needs.
        At first site was semi-static one page website. Basic tailwind styling and configuration was already set up, so I could focus on adding sub-pages, animations, refactoring code and extracting reusable components. 
        For this project I wanted to focus solely on front-end, so there are no real back-end solution. Simple config file was used to provide UI with required data. 
        `,
      imageUrl: 'https://via.placeholder.com/250x250',
      code: 'https://github.com/VilkelisV/vilkelisv.github.io',
      goal: 'For personal use I was creating various Twitch chat widgets. They were used in Streamlabs web app, that had pretty terrible widget code editor, so I’ve decided to create my own platform to create widgets.',
      problems: [
        'I wanted to replicate Streamlabs as much as possible, so I had to do a lot of reverse engineering, logging server responses, figuring what kind of events are used to display widget and trigger different kinds of events.',
        'Whole project is based around events, which is not that often used Javascript concept, so it took me some time to make them work.',
      ],
      solutions: [
        'Minimalistic UI was created with several buttons to invoke different kinds of events. ',
        'Drop down selection to select which widget I want to see on the screen.',
        'Library implemented to easily change work screen width, to test widget.',
      ],
    },
  ],
};

export default dataConfig;
