export const homeObjOne = {
    lightBg: false,
    primary: true,
    imgStart:'', 
    lightTopLine: true, 
    lightTextDesc: true,
    buttonLabel: 'Get Started',
    description: 'Welcome to my page. I am Paulina an up and coming Web Developer with a focus on front-end code ',
    headline: 'Fearless\nStrong \n Ready',
    lightText: true,
    topLine: 'Front-End Developer {}', 
    img: require('../../images/me.svg').default,
    alt: 'Image', 
    start: ''
};

export const homeObjTwo = {
    lightBg: true,
    primary: false,
    imgStart:'start', 
    lightTopLine: false, 
    lightTextDesc: false,
    buttonLabel: 'Get Started',
    description: 'My name is Paulina Alejandra Sarquis Muñoz. I was born in Tijuana, Mexico but moved to San Diego,California as a baby. I am half Lebanese and half Mexican. I am a Daca recipient. Before Daca I was not sure if I was going to have a purpose in this world. I am grateful for the opportunity I have been given to be able to finish school at University of California, San Diego and pursue a career in web development. Do NOT hesitate lets communicate!!',
    headline: 'Live.Learn.Lead.',
    lightText: false,
    topLine: 'About Me', 
    img: require('../../images/life.png').default,
    alt: 'Image', 
    start: 'true'
};

export const homeObjThree = {
    lightBg: false,
    primary: true,
    imgStart:'start', 
    lightTopLine: true, 
    lightTextDesc: true,
    buttonLabel: 'Get Started',
    description: 'My photography is my way to be everywhere, without being seen. I love being behind the camera not in front of it. I do believe we all can see the same photograph in many different ways.',
    headline: 'Focus.Grow.Inspire',
    lightText: true,
    topLine: 'Photography', 
    img: require('../../images/me.svg').default,
    alt: 'Image', 
    start: ''
};

export const homeObjFour = {
    lightBg: true,
    primary: false,
    imgStart:'start', 
    lightTopLine: false, 
    lightTextDesc: false,
    buttonLabel: 'Get Started',
    description: 'Here are some projects I have had the privelege to create with great teams.',
    headline: 'Together Listen Create' ,
    lightText: false,
    topLine: 'Projects', 
    img: require('../../images/me.svg').default,
    alt: 'Image', 
    start: ''
};

export const homeObjFive = {
    lightBg: false,
    primary: true,
    imgStart:'start', 
    lightTopLine: true, 
    lightTextDesc: true,
    buttonLabel: 'Get Started',
    description: 'Welcome to my page. I am Paulina an up and coming Web Developer with a focus on front-end code ',
    headline: 'Together Listen Create' ,
    lightText: true,
    topLine: 'Case Study', 
    img: require('../../images/me.svg').default,
    alt: 'Image', 
    start: ''
};

// Project cards shown on the Projects page.
// Set inProgress: false once a project is finished and has a write-up or link.
export const projects = [
    {
        featured: true,
        tag: 'In progress',
        title: 'Dash: e-bike safety for kids & parents',
        summary: 'A mobile app that lets parents see how their kids ride e-bikes on real roads. It flags safety moments like rolling through a stop sign, skipping a yield, or running a red light, so families can talk through what happened and build safer habits together.',
        features: [
            'Live ride map for parents, with alerts as they happen',
            'Flags missed stop signs and speeding, with time and location',
            'Parent-set speed limit and safety zones',
            'One family account: a kid view and a PIN-protected parent view',
            'Next up: camera-based sign detection',
        ],
        skills: ['Mobile app', 'UX design', 'Location & maps', 'Real-time alerts', 'Road safety'],
        images: [
            { src: '/projects/dash-ride-v2.jpg', alt: 'Dash kid view: ready to ride screen with a 15 mph limit' },
            { src: '/projects/dash-parent-v2.jpg', alt: 'Dash parent dashboard: live ride map with a missed sign alert' },
            { src: '/projects/dash-alerts-v2.jpg', alt: 'Dash alerts list: missed stop sign and speeding alerts' },
        ],
        inProgress: true,
    },
    {
        tag: 'IT Case Study',
        title: 'Keeping a middle school connected',
        summary: 'How I support the network, devices, and classroom AV at DePortola Middle School: triaging requests, isolating hardware vs. software vs. connection issues, and training staff so problems do not come back.',
        skills: ['LAN support', 'Troubleshooting', 'AV/TV', 'Staff training', 'Inventory'],
        internalLink: '/casestudy',
        inProgress: false,
    },
    {
        tag: 'Front-End',
        title: 'This portfolio site',
        summary: 'Designed and built from scratch in React with styled-components and React Router, deployed on GitHub Pages.',
        skills: ['React', 'JavaScript', 'CSS', 'GitHub Pages'],
        externalLink: 'https://github.com/psarks/my.pages',
        inProgress: false,
    },
    {
        tag: 'In progress',
        title: 'Home lab: Windows Server + Active Directory',
        summary: 'Building a small virtual network with a domain controller, user accounts, group policy, and backups, documented step by step.',
        skills: ['Windows Server', 'Active Directory', 'Group Policy', 'Virtualization'],
        inProgress: true,
    },
    {
        tag: 'In progress',
        title: 'Redesigning a tech help request form',
        summary: 'A UX redesign of a clunky school tech request form: user interviews, Figma wireframes, and a working prototype.',
        skills: ['UX research', 'Figma', 'Prototyping'],
        inProgress: true,
    },
];
