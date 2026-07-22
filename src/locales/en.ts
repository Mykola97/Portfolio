export default {
  commands: {
    help: {
      description: `Show available commands`
    },
    about: {
      description: `Show information about me`,
      imgAlt: `Profile Picture`,
      summary: `Hello! I'm Mykola, Full-Stack Software Developer with 7 years of
                experience in the fintech industry, specializing in payment systems.
                Expertise in JavaScript, Node.js, Python and Java, with strong
                experience in front-end and back-end development, API integration,
                and optimization of transaction processing systems and banking APIs.`,
      firstBlock: `I enjoy designing scalable backend systems, building intuitive frontends
                  and improving developer experience.`,
      secondBlock: `Currently interested in:`,
      skills: {
        frontend: `React & Next.js for frontend development`,
        backend: `Node.js, Java, Python for backend development`,
        distributedSystems: `Distributed systems`,
        systemDesign: `System design`,
        tooling: `Developer tooling`,
      },
      hobby: `Outside of work I enjoy learning French, reading about software architecture, building side projects and playing chess.`
    },
    projects: {
      description: `Show my projects`,
      firstProject: {
        title: `Foree Remittance (Nanopay)`,
        description: `Foree Remittance is an international money transfer application for sending funds to Pakistan,
                      developed at Nanopay. I developed the core front-end and back-end components,
                      including user onboarding, transaction processing, and the email notification system.
                      The platform had over 2,000 active users, processed more than CAD 10 million in transfers per week,
                      and enabled the majority of transfers to be completed within 1–2 minutes.`
      },
      secondProject: {
        title: `Terminal Portfolio (Personal)`,
        description: `An interactive terminal-inspired portfolio built with React and Next.js.
                      Features a command-based interface, animated terminal input, dynamic React-powered output,
                      downloadable assets, and a modular command architecture.`
      },
      thirdProject: {
        title: `Bus Booking website (Personal)`,
        description: ` A web application for booking bus tickets, searching destinations,
          and viewing connected routes. Built with Django, PostgreSQL, vanilla JavaScript, HTML,
          and Tailwind CSS, with the database hosted on Neon.`
      }
    },
    cvFrance: {
      description: `Open my CV in French`
    },
    cvEnglish: {
      description: `Open my CV in English`
    }
  }
} as const;