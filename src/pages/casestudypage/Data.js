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

// Content for the Case Study page.
// Tip: add one specific story (a problem you solved, what you tried, what fixed it)
// and any numbers you can share (devices supported, tickets per week).
export const caseStudy = {
    title: 'Keeping a middle school connected',
    lede: 'Since 2020 I have been the on-site technology lead at DePortola Middle School (San Diego Unified). When a projector dies five minutes before class or a printer drops off the network, I am the person who gets it working again, and who makes sure it stays that way.',
    facts: [
        { label: 'Role', value: 'Network Support Media Technician' },
        { label: 'Since', value: 'August 2020' },
        { label: 'Users', value: 'Students, teachers & staff' },
        { label: 'Scope', value: 'Network, devices, AV/TV' },
    ],
    sections: [
        {
            heading: 'The challenge',
            text: 'A school runs on technology that has to work every period of every day. Teachers need their microphones, projectors, printers, and computers ready the moment class starts, and the local area network behind them has to keep up with constant changes and additions.',
        },
        {
            heading: 'My approach',
            points: [
                'Triage first: isolate whether a problem is hardware, software, or connection before touching anything, so fixes are fast and targeted.',
                'Own the follow-up: track maintenance and service requests for network changes and additions through to completion.',
                'Support the LAN: help coordinate the implementation and maintenance of the school site\'s local area network.',
                'Keep AV/TV running: provide audiovisual and television support for classrooms and school events.',
                'Know what we have: maintain the technology inventory so equipment is accounted for and ready to deploy.',
            ],
        },
        {
            heading: 'Teaching, not just fixing',
            text: 'The best fix is the one people do not need to call me for again. I provide training and technical assistance to staff so they can handle common issues confidently. My background in interaction design (UCSD) shapes how I explain technology: start from what the user is trying to do, not from the technical details.',
        },
        {
            heading: 'What I took from it',
            text: 'Supporting a live school environment taught me to stay calm under time pressure, communicate clearly with non-technical users, and document what I do. These are the same skills I bring to systems administration and ed-tech implementation work.',
        },
    ],
};

// Second case study: the Prospector agents (route: /casestudy/prospector)
export const prospectorStudy = {
    title: 'Prospector FC: a team of AI agents that finds my clients',
    lede: 'I am starting a business that makes AI-made Meta ads for local businesses. Finding the right businesses by hand was slow, so I learned Python and built a small team of agents that does most of the scouting for me. The stadium below replays a real run.',
    facts: [
        { label: 'Role', value: 'Designer & developer' },
        { label: 'Built', value: 'November 2026' },
        { label: 'Stack', value: 'Python, Google Places API, Three.js' },
        { label: 'Latest run', value: '47 strict leads from 76 checked businesses' },
    ],
    embed: {
        file: 'stadium.html',
        title: 'Prospector Stadium: a 3D replay of the agents at work',
        caption: 'Press "Watch the replay" to see each agent do its job. Counts and business types only; names stay private.',
    },
    sections: [
        {
            heading: 'The challenge',
            text: 'The businesses that need me most have great reviews but run few or no Meta ads. Finding them meant searching maps, checking each business in the Meta Ad Library, and keeping notes by hand, for hours.',
        },
        {
            heading: 'My approach',
            points: [
                'A scout searches Google Places and keeps one logbook, with no duplicates (same name at a different address is a different store).',
                'An ad checker opens the Meta Ad Library one tab at a time and I type the count. Meta does not allow bots, so this step stays human.',
                'Three coaches with different rules pick the leads and write a personal pitch for each, in Spanish for Tijuana.',
                'A manager runs everything with one command, with a search limit and a backlog brake so work never piles up.',
                'A secretary emails me a summary, and a match report feeds the stadium on this page.',
            ],
        },
        {
            heading: 'Built with care',
            text: 'API keys and passwords live in Windows environment variables, never in the code. Business names never leave my computer: the public match report holds only counts and business types.',
        },
        {
            heading: 'What I took from it',
            text: 'I learned Python by building something I actually use: classes, CSV files, APIs, JSON, and reading error messages to fix my own bugs. Treating each agent as a player with one job made a complicated system easy to build and easy to explain.',
        },
    ],
};

// The Case Studies page (route: /casestudies): one horizontal band per study, newest FIRST.
// accent = the band's stripe color. study = the full study object (title and facts come from it).
export const caseStudies = [
    {
        to: '/casestudy/prospector',
        tag: 'AI agents & data',
        accent: '#F5C518',   // stadium yellow
        study: prospectorStudy,
        summary: 'A Python team of agents that finds local businesses with great reviews and few Meta ads, with a 3D stadium that replays each run.',
    },
    {
        to: '/casestudy',
        tag: 'IT support',
        accent: '#4b59f7',   // site blue
        study: caseStudy,
        summary: 'How I support the network, devices, and classroom AV at DePortola Middle School, and train staff so problems do not come back.',
    },
];
