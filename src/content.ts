// Personal details and all Dutch/English copy live here.
export const profile = {
  name: 'Louise Monte',
  age: 23,
  portrait: '/louise-monte.jpg',
  employer: 'Amac',
  email: 'Louisemonte03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/louise-monte-928485221',
  github: 'https://github.com/Louisemonte03',
  cvPath: ''
};

export type Language = 'nl' | 'en';

export const content = {
  nl: {
    pageTitle: 'Louise Monte — UX/UI designer & frontend developer',
    pageDescription: 'Louise Monte is UX/UI designer en frontend developer met kennis van Magento, design, AI en code.',
    skip: 'Ga naar inhoud',
    nav: { about: 'Over mij', experience: 'Ervaring', projects: 'Projecten', contact: 'Contact' },
    menuOpen: 'Open menu', menuClose: 'Sluit menu', languageLabel: 'Schakel naar Engels',
    eyebrow: 'UX/UI DESIGNER · FRONTEND DEVELOPER',
    hero: ['Ik maak digitaal', 'werk eenvoudiger', 'en beter.'],
    introduction: 'Ik ben UX/UI designer en frontend developer. Ik studeer aan de Hogeschool van Amsterdam en maak digitale ervaringen graag duidelijker, eenvoudiger en prettiger om te gebruiken.',
    exploreWork: 'Bekijk mijn werk', getInTouch: 'Neem contact op', location: 'Nederland', scroll: 'Scroll verder',
    aboutLabel: 'INTRODUCTIE', aboutTitle: 'Een beetje over mij.',
    aboutLead: ['Structuur maakt ruimte voor', 'betere ideeën.'],
    about: [
      'Ik vind het interessant om ingewikkelde dingen terug te brengen tot iets dat logisch en prettig werkt. Daarom kijk ik eerst naar de structuur: wat heeft iemand nodig, wat kan eenvoudiger en waar gaat het nu mis?',
      'Ik werk graag op het snijvlak van ontwerp en techniek. AI en code maken me nieuwsgierig omdat ze nieuwe manieren bieden om ideeën te onderzoeken, werk slimmer te maken en digitale ervaringen stap voor stap te verbeteren.'
    ],
    exploringLabel: 'Wat mij bezighoudt', exploring: 'AI, code, UX/UI design en het eenvoudiger maken van digitale processen.',
    experienceLabel: 'ERVARING', experienceTitle: 'Mijn ervaring.',
    experienceIntro: 'Van april tot juni 2025 liep ik stage bij Amac. Sinds augustus 2025 werk ik daar als UX/UI designer en frontend developer.',
    experience: [
      { role: 'UX/UI designer & frontend developer', employer: 'Amac', team: 'Communicatie- en conversieteam', period: 'aug 2025 — heden', description: 'Ik ontwerp en verbeter digitale ervaringen en werk mee aan de frontend van de Amac-website.', focus: ['UX/UI design', 'Frontend', 'Websiteverbetering'] },
      { role: 'Stagiair UX/UI designer', employer: 'Amac', team: 'Communicatie- en conversieteam', period: 'apr — jun 2025', description: 'Tijdens mijn stage werkte ik aan het ontwerpen en verbeteren van digitale ervaringen.', focus: ['UX/UI design', 'Samenwerken'] },
      { role: 'Stagiair zendercommunicatie', employer: 'RTL en Videoland', team: 'Communicatieteam', period: 'jan — mei 2022', description: 'Ik werkte aan de communicatie rond programma’s zoals Expeditie Robinson en De Verraders.', focus: [] },
      { role: 'Stagiair media', employer: 'Brandwebbing', team: 'Marketingteam', period: 'sep 2021 — jan 2022', description: 'Ik werkte aan digitale marketing en advertenties voor campagnes van grote bedrijven.', focus: [] }
    ],
    team: 'Communicatie- en conversieteam',
    projectsLabel: 'PROJECTEN', projectsTitle: 'Mijn werk.',
    featuredProject: {
      label: 'UITGELICHT PROJECT · AMAC',
      title: 'Amac-website: oud en nieuw',
      description: 'Ik werkte mee aan de nieuwe huisstijl voor de Amac-website.',
      comparisonIntro: 'Sleep de lijn om de oude en nieuwe pagina’s te vergelijken.',
      homeTitle: 'Homepage',
      homeOldLabel: 'Oud ontwerp',
      homeNewLabel: 'Nieuw ontwerp',
      homeOldLink: 'Bekijk de homepage in het archief',
      homeNewLink: 'Bekijk de huidige homepage',
      homeNote: 'De screenshots tonen verschillende delen van de homepage.',
      ipadTitle: 'iPad-pagina',
      oldLabel: 'Oud · 23 juli 2024',
      newLabel: 'Nieuw · 16 oktober 2026',
      oldLink: 'Bekijk de archiefpagina',
      newLink: 'Bekijk de huidige pagina',
      visualNote: 'De screenshots tonen verschillende delen van de iPad-pagina.',
      supportTitle: 'Supportpagina',
      supportOldLink: 'Bekijk Support in het archief',
      supportNewLink: 'Bekijk de huidige Support-pagina',
      supportNote: 'De screenshots tonen verschillende delen van de supportpagina.'
    },
    tradeInProject: {
      label: 'ZELF ONTWORPEN · AMAC',
      title: 'Inruilwaarde op de productpagina',
      description: 'Ik ontwierp een nieuwe module voor de iPhone-productpagina. Je kiest je oude toestel, beantwoordt vragen over de staat en ziet de geschatte inruilwaarde én wat je nog betaalt. Deze functie stond eerst niet op de pagina.',
      steps: ['Start op de productpagina', 'Kies je oude iPhone', 'Beoordeel de staat', 'Vervolg de vragen', 'Bekijk de schatting', 'Zie de nieuwe prijs', 'Lees hoe inruilen werkt'],
      previous: 'Vorige stap', next: 'Volgende stap', step: 'Stap', imageAlt: 'Amac inruilmodule: '
    },
    demoTitle: 'Interactieve voorbeelden',
    projectsIntro: 'Sleep de lijn in elk prototype om een oud en nieuw ontwerp te vergelijken. Deze demo’s tonen hoe ik ontwerpverbeteringen wil presenteren.',
    projects: [
      { number: '01', title: 'Digitale reiservaring', type: 'VOORBEELD', description: 'Visueel voorbeeld voor een toekomstige UX/UI case.', skills: ['UX', 'UI', 'Prototype'], visual: 'travel' },
      { number: '02', title: 'Boekingsinterface', type: 'VOORBEELD', description: 'Visueel voorbeeld voor een toekomstige interfacecase.', skills: ['Interactie', 'Responsive', 'Figma'], visual: 'booking' },
      { number: '03', title: 'Portfolio', type: 'VOORBEELD', description: 'Visueel voorbeeld voor een toekomstige persoonlijke case.', skills: ['Typografie', 'Webdesign'], visual: 'portfolio' }
    ],
    projectsNote: 'Dit zijn demo’s en geen echte cases. De ontwerpen kunnen later worden vervangen door screenshots van mijn eigen werk.',
    educationLabel: 'OPLEIDING', educationTitle: 'Wat ik leer.',
    educationDegree: 'Student', educationSchool: 'Hogeschool van Amsterdam',
    educationDescription: 'Ik ontwikkel mijn kennis van ontwerp, digitale producten en de samenwerking tussen creativiteit en techniek.',
    skillsLabel: 'VAARDIGHEDEN & TOOLS', skillsTitle: 'Mijn toolkit.',
    skills: [
      { category: 'Focus', items: ['UX/UI design', 'Interacties ontwerpen', 'Prototyping', 'Structuur aanbrengen', 'Conversie verbeteren'] },
      { category: 'Code', items: ['HTML', 'SCSS', 'JavaScript (basis)'] },
      { category: 'Tools', items: ['Figma', 'Magento', 'GitHub', 'VS Code'] }
    ],
    magentoTitle: 'Wat is Magento?',
    magentoDescription: 'Magento is een e-commerceplatform voor het bouwen en beheren van webshops. Bedrijven gebruiken het bijvoorbeeld om producten, content en bestellingen te beheren. Ik heb kennis van dit platform.',
    contactLabel: 'CONTACT', contactStatus: 'OPEN VOOR IDEEËN', contactTitle: ['Iets in', 'gedachten?'],
    contactDescription: 'Ik kom graag in contact met mensen die nadenken over betere digitale ervaringen, design en nieuwe mogelijkheden met AI.',
    emailAction: 'Stuur me een e-mail', contactPending: 'Contactgegevens volgen',
    backTop: 'Terug naar boven', footerNote: 'UX/UI designer & frontend developer', linkPending: 'link volgt'
  },
  en: {
    pageTitle: 'Louise Monte — UX/UI designer & frontend developer',
    pageDescription: 'Louise Monte is a UX/UI designer and frontend developer with knowledge of Magento, design, AI and code.',
    skip: 'Skip to content',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    menuOpen: 'Open menu', menuClose: 'Close menu', languageLabel: 'Switch to Dutch',
    eyebrow: 'UX/UI DESIGNER · FRONTEND DEVELOPER',
    hero: ['Simpler digital', 'experiences,', 'better by design.'],
    introduction: "I'm a UX/UI designer and frontend developer. I study at the Amsterdam University of Applied Sciences and enjoy making digital experiences clearer, simpler and easier to use.",
    exploreWork: 'Explore my work', getInTouch: 'Get in touch', location: 'The Netherlands', scroll: 'Scroll to explore',
    aboutLabel: 'INTRODUCTION', aboutTitle: 'A little about me.',
    aboutLead: ['Structure makes room for', 'better ideas.'],
    about: [
      'I enjoy turning complicated things into something that feels logical and easy to use. I start with structure: what does someone need, what could be simpler and where is the current experience getting in the way?',
      'I like working where design and technology meet. AI and code interest me because they offer new ways to explore ideas, work more efficiently and keep improving digital experiences.'
    ],
    exploringLabel: 'What I’m exploring', exploring: 'AI, code, UX/UI design and simpler digital processes.',
    experienceLabel: 'EXPERIENCE', experienceTitle: 'My experience.',
    experienceIntro: 'I interned at Amac from April to June 2025. Since August 2025, I have worked there as a UX/UI designer and frontend developer.',
    experience: [
      { role: 'UX/UI designer & frontend developer', employer: 'Amac', team: 'Communications and conversion team', period: 'Aug 2025 — present', description: 'I design and improve digital experiences and contribute to the frontend of the Amac website.', focus: ['UX/UI design', 'Frontend', 'Website improvement'] },
      { role: 'UX/UI designer intern', employer: 'Amac', team: 'Communications and conversion team', period: 'Apr — Jun 2025', description: 'During my internship, I helped design and improve digital experiences.', focus: ['UX/UI design', 'Collaboration'] },
      { role: 'Broadcast communications intern', employer: 'RTL and Videoland', team: 'Communications team', period: 'Jan — May 2022', description: 'I worked on communications for programmes such as Expeditie Robinson and De Verraders.', focus: [] },
      { role: 'Media intern', employer: 'Brandwebbing', team: 'Marketing team', period: 'Sep 2021 — Jan 2022', description: 'I worked on digital marketing and advertising for campaigns by large companies.', focus: [] }
    ],
    team: 'Communications and conversion team',
    projectsLabel: 'PROJECTS', projectsTitle: 'My work.',
    featuredProject: {
      label: 'FEATURED PROJECT · AMAC',
      title: 'Amac website: before and after',
      description: 'I helped create the new visual style for the Amac website.',
      comparisonIntro: 'Drag the line to compare the old and new pages.',
      homeTitle: 'Homepage',
      homeOldLabel: 'Before',
      homeNewLabel: 'After',
      homeOldLink: 'View archived homepage',
      homeNewLink: 'View current homepage',
      homeNote: 'The screenshots show different parts of the homepage.',
      ipadTitle: 'iPad page',
      oldLabel: 'Before · 23 July 2024',
      newLabel: 'After · 16 October 2026',
      oldLink: 'View archived page',
      newLink: 'View current page',
      visualNote: 'The screenshots show different parts of the iPad page.',
      supportTitle: 'Support page',
      supportOldLink: 'View archived Support page',
      supportNewLink: 'View current Support page',
      supportNote: 'The screenshots show different parts of the support page.'
    },
    tradeInProject: {
      label: 'DESIGNED BY ME · AMAC',
      title: 'Trade-in value on the product page',
      description: 'I designed a new module for the iPhone product page. You choose your old phone, answer questions about its condition, and see the estimated trade-in value and how much is left to pay. This feature was not on the page before.',
      steps: ['Start on the product page', 'Choose your old iPhone', 'Check its condition', 'Continue the questions', 'See the estimate', 'See the new price', 'How trade-in works'],
      previous: 'Previous step', next: 'Next step', step: 'Step', imageAlt: 'Amac trade-in module: '
    },
    demoTitle: 'Interactive examples',
    projectsIntro: 'Drag the line in each prototype to compare a before and after design. These demos show how I want to present design improvements.',
    projects: [
      { number: '01', title: 'Digital travel experience', type: 'EXAMPLE', description: 'Visual example for a future UX/UI case study.', skills: ['UX', 'UI', 'Prototype'], visual: 'travel' },
      { number: '02', title: 'Booking interface', type: 'EXAMPLE', description: 'Visual example for a future interface case study.', skills: ['Interaction', 'Responsive', 'Figma'], visual: 'booking' },
      { number: '03', title: 'Portfolio', type: 'EXAMPLE', description: 'Visual example for a future personal case study.', skills: ['Typography', 'Web design'], visual: 'portfolio' }
    ],
    projectsNote: 'These are demos, not real case studies. The designs can later be replaced with screenshots of my own work.',
    educationLabel: 'EDUCATION', educationTitle: 'What I’m learning.',
    educationDegree: 'Student', educationSchool: 'Amsterdam University of Applied Sciences',
    educationDescription: 'I’m developing my understanding of design, digital products and the relationship between creativity and technology.',
    skillsLabel: 'SKILLS & TOOLS', skillsTitle: 'My toolkit.',
    skills: [
      { category: 'Focus', items: ['UX/UI design', 'Interaction design', 'Prototyping', 'Creating structure', 'Improving conversion'] },
      { category: 'Code', items: ['HTML', 'SCSS', 'JavaScript (basic)'] },
      { category: 'Tools', items: ['Figma', 'Magento', 'GitHub', 'VS Code'] }
    ],
    magentoTitle: 'What is Magento?',
    magentoDescription: 'Magento is an e-commerce platform for building and managing online stores. Businesses use it to manage things like products, content and orders. I have knowledge of this platform.',
    contactLabel: 'CONTACT', contactStatus: 'OPEN TO IDEAS', contactTitle: ['Have something', 'in mind?'],
    contactDescription: 'I enjoy connecting with people who care about better digital experiences, design and new possibilities with AI.',
    emailAction: 'Send me an email', contactPending: 'Contact details coming soon',
    backTop: 'Back to top', footerNote: 'UX/UI designer & frontend developer', linkPending: 'link coming soon'
  }
} as const;
