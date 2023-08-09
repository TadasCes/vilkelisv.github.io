// gitprofile.config.js

const dataConfig = {
  links: {
    linkedin: 'https://www.linkedin.com/in/vainius-vilkelis/',
  },
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
      Looking for Front-end (React) developer role \n
      Interested in everything between automation and illustration <br>\n 
      Self-learner, curious, team-player with the sense of ownership \n`,
  },
  details: {
    story: `Being incredibly curious person, I've tried myself in a various fields. Graphic design, 
    illustration, UI/UX, front-end, automation, freelance, sales and more. During my "soul searching" 
    I've learned many skills and understood myself better. After years of looking what I truly enjoy doing, 
    I've come to realization, that code is what I enjoy the most. Working on big projects and seeing them
     grow one day at a time, solving complex problems makes me forget to eat, lose track of time and enjoy myself.
      With this new knowledge, I've created a new goal for me: to become the best developer I can be. `,
    github: 'vilkelisv',
    phone: '+37062341300',
    email: 'vilkelis.vainius@gmail.com',
    linkedin: 'vainius-vilkelis',
    location: 'Vilnius',
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
      company: 'Freelance',
      position: 'Google AppsScript Automations',
      from: 'March 2022',
      to: 'Now',
      companyLink: '',
    },
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
      code: 'https://github.com/VilkelisV/vilkelisv.github.io',
      status: 'Live',
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
      description: `I've always wanted to test myself working as a freelancer. After working a various companies, and acquiring program skills, I've decided to take the leap and try myslef.
      Having interest in automation, I've found, that it is possible to automate proccesses for Google apps like Sheets, Docs and others. I've learned AppsScript to automate them 
      and found some clients. Work it self is great, different projects, different problems, having your own schedule is nice. But many things are not nice and I had to learn it the hard way.
      Consistently looking for new clients, managing them, maintaining projects, having no financial security is not fun. Luckily for me, I've quickly realized, that this is not for me.
      `,
      code: 'private',
      status: 'Stopped',
      projects: [
        `BulkFileUpload. The script build for automating file upload for a specific project. User creates a file upload folder. When the file is put inside a that folder, scripts reads file data and by file name put it in a dedicated folder. Folder might be nested deep in a folder tree.`,
        `Image and csv data upload to sheet. A script that prompts user to select a data folder, which must have csv file with a specific project data and an images folder. Then based on specific business logic, data from csv is transferred to sheet. Now based on this new data in sheet, script scans image folder and puts images inside a sheet as an Image object.`,
        `ReportScript. A client used sheet as a CRM and did a lot of manual work. Labeling, copy and pasting data. Script automates these repetetives movements and when client is ready, there is a button that on click takes specific data and puts it Docs file. Docs file is formatted and converted to pdf file, which is moved to a folder based on category. Then this file is send as an attachment to a specific person.`,
      ],
      goal: 'Try myself working as a freelancer.',
    },
    {
      id: 3,
      title: 'Backoffice CRM',
      short:
        'Internal web app to display and manipulate data from the back end.',
      description: `While working at Fundvest, my main object was updating and maintaining backoffice CRM system. I’ve implemented various system for file upload, user registration, authentication, created many various tables for the data from the server, experimented with UI and libraries.
      `,
      code: 'private',
      status: 'Not maintained',
      goal: 'Maintain backoffice React web app and create various screens for new sub-projects.',
      solutions: [
        `Work with back-end and API's.`,
        `Implemented authentication system, file upload system, registration. Many different screens for different data.`,
        'Additionaly had to do some work with AWS, wordpress, Flutter.',
      ],
    },
    {
      id: 4,
      title: 'Youtube API reader',
      short:
        'Small web app to read data from youtube api, store it in mongodb and display in react.',
      description: `One of the interview task projects. The goal was to create a web app that give user the ability to provide youtube video id and see video's comments. When id is provided it is sent to the express server. Server checks the MongoDB database for this id, if it was used previously, saved data is returned, if not, the request to the api is made. Required response data is saved to the server and sent back to the React web app.`,
      code: 'https://github.com/VilkelisV/Youtube-video-comments-provider/tree/master/client',
      status: 'Not maintained',
      goal: 'Create a web app that gets video from youtube by id and displays video comments. This project was a task for one of the job interviews.',
      solutions: [
        `React and MUI for the front-end`,
        `Node.js and express for the back end`,
        ` MongoDB for the database`,
        `UI has a field where user inputs id for the video. The video is fetched from the Google API.`,
        ` Id sent to a server. Server checks if video was searched before. If yes, it pulls the data from the server. If no, it fetches the data from the API and stores new data to the server.`,
        `Ui is provided with video data. Here we can see some video meta data and some comments.`,
      ],
    },
    {
      id: 5,
      title: 'Etsy scrapper',
      short: 'Python web scraper to find best sellers.',
      description: `For personal use I’ve decided to create a bot that scrapes the data from Etsy. The purpose for this bot is to find how many sales of items a shop had and display it in React web app. It was really quick project, so UI was minimalistic, with one input field for the shop name. When the name is provided, it was sent to flask server. Server downloads etsy shop's 'sold' page and goes through paginated data reading what has been sold. When the html section is read, bot find product name and increases the saved value. When scarping is done, the array of projects are sent to web app and it's displayed with a link, image, sold count and product title.`,
      code: 'https://github.com/VilkelisV/vilkelisv.github.io',
      status: 'Not maintained',
      goal: 'Create a simples python scarping script to check which products are best sellers from a certain shop',
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
      description: `For personal use I was creating various Twitch chat widgets. They were used in Streamlabs web app, that had pretty terrible widget code editor, so I’ve decided to create my own platform to create widgets. Whole streamlabs editor is based around api events. When you click an event button, it triggers a Custom event. Chat widget contains event listener for this event, when it's triggered, custom html, css and JS code is embeded to the main widget container.`,
      code: 'https://github.com/VilkelisV/vilkelisv.github.io',
      status: 'Not maintained',
      goal: 'Create a testing enviroment for Twitch widgets.',
      problems: [
        `I wanted to replicate Streamlabs as much as possible, so I had to do a lot of reverse engineering, logging server responses, figuring what kind of events are used to display widget and trigger different kinds of events.`,
        `Whole project is based around events, which is not that often used Javascript concept, so it took me some time to make them work.`,
      ],
      solutions: [
        `Minimalistic UI was created with several buttons to invoke different kinds of events.`,
        `Drop down selection to select which widget I want to see on the screen.`,
        `Library implemented to easily change work screen width, to test widget.`,
      ],
    },
  ],
};

export default dataConfig;
