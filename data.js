export const bio = [
    "Kiele (Ki) Sacco is an American harpsichordist based in London.",
    "She is currently a masters student at the Guildhall School of Music and Drama,",
    "studying harpsichord with James Johnstone and Nicholas Parle."
];

/*export const skills = [
    {
        title: "Harpsichord",
        skillName: "JavaScript, TypeScript",
        color: "1",
        percentage: "80",
    },
    {
        title: "Keyboard Continuo",
        skillName: "Angular, RxJS, NGXS",
        color: "6",
        percentage: "70",
    },
    {
        title: "Harpsichord Tuning",
        skillName: "HTML, Bootstrap, Tailwind",
        color: "4",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub, JIRA, Bitbucket",
        color: "7",
        percentage: "70",
    },
    {
        title: "Tools",
        skillName: "Postman, Chrome DevTools",
        color: "3",
        percentage: "80",
    },
    {
        title: "Analytics",
        skillName: "CleverTap, Countly",
        color: "5",
        percentage: "50",
    },
    {
        title: "IDE",
        skillName: "VS Code",
        color: "6",
        percentage: "70",
    },
];*/

export const projects = {
    webProjects: [
        {
            projectName: "Dartington Summer School - Baroque Orchestra 2023",
            image: "images-ki/Dartington-23.jpeg",
            summary:
                "I was selected as the keyboard continuo player for a week long program at the Dartington Summer School.",
                "The Baroque Orchestra presenting a programme of orchestral music, and another programme of Bach's B minor Mass.",
                "The orchestra was directed by Rachel Podger, and the B minor Mass was conducted by John Butt.",
                "The Lever Hulme Foundation generously provided a bursary for me to attend this course."
            //preview: "https://programmingdiaries.herokuapp.com/",
            //techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
        },
        {
            projectName: "Find Your Bank",
            image: "images/findyourbank.png",
            summary:
                "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
            preview: "https://clever-fermi-0d5d76.netlify.app",
            techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
        },
        {
            projectName: "Web Portfolio",
            image: "images/portfolio.png",
            summary:
                "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
            preview: "https://github.com/vinaysomawat/Travographer-Portal",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
        {
            projectName: "Resume Builder",
            image: "images/resume-builder.png",
            summary:
                "Browser based editor to build and download Resumes in a customizable templates.",
            preview: "https://vinaysomawat.github.io/Resume-Builder",
            techStack: ["HTML", "Bootstrap", "JavaScript"],
        },
    ],
    softwareProjects: [
        {
            projectName: "Pizza Ordering ChatBot",
            image: "images/pizzaorderchatbot.png",
            summary:
                "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["Dailogflow", "Firebase"],
        },
        {
            projectName: "WhatsApp-Bot",
            image: "images/whatsappbot.jpg",
            summary:
                "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
            preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
            techStack: ["Selenium", "Chrome Webdriver", "Python"],
        },
        {
            projectName: "Bill Generator",
            image: "images/billgenerator.png",
            summary:
                "GUI to transfer data to excel sheets and generate bills on the local shops.",
            preview: "https://github.com/vinaysomawat/Bill-Generator",
            techStack: ["Tkinter", "Openxlpy", "Python"],
        },
    ],
    androidProjects: [
        {
            projectName: "NITW-CSE",
            image: "images/nitwcse.jpg",
            summary:
                "The Application display details of Department courses, reference books, research, publication and faculty profile.",
            preview: "https://github.com/vinaysomawat/NITW-CSE",
            techStack: ["JAVA", "XML", "Android"],
        },
        {
            projectName: "CareerHigh-App",
            image: "images/carrerhigh.png",
            summary:
                "The Application display the webpages of website careerhigh.in in android devices.",
            preview: "https://github.com/vinaysomawat/CareerHigh-Android",
            techStack: ["JAVA", "XML", "Android"],
        },
    ],
    freelanceProjects: [
        {
            projectName: "SnylloAir.com",
            image: "images/snylloair.png",
            summary:
                "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
            preview: "https://www.snylloair.com/",
            techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        },
        {
            projectName: "Delivery+",
            image: "images/AM-Logo-.png",
            summary: "Android Application to display website in android devices.",
            preview:
                "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
            techStack: ["Android", "JAVA", "Play Store"],
        },
    ],
};

export const experience = [
    {
        title: "Shiprocket (Bigfoot Solution Private Limited)",
        duration: "September 2022 - Present",
        subtitle: "Software Engineer",
        details: [
            "Working in support and escalation team."
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "truck ",
    },
    {
        title: "Biofourmis India Private Limited",
        duration: "April 2022 - Jul 2023",
        subtitle: "Software Engineer",
        details: [
            `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
            `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
            `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
            `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
            `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
            `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
            `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
            `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
            `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
        ],
        tags: ["JavaScript", "Angular", "RxJS", "NGXS", "TypeScript", "RxState", "Webpack", "Optimization"],
        icon: "heartbeat",
    },
    {
        title: "Novopay Solutions Private Limited",
        duration: "June 2020 - April 2022",
        subtitle: "Software Engineer",
        details: [
            `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
            `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
            `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
            `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "qrcode",
    },
    {
        title: "ThinkPedia LLP",
        duration: "May 2019 - June 2019",
        subtitle: "SDE Intern",
        details: [
            `Developed a customer web application for social media management, supporting the advertisement domain.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
        icon: "group",
    },
];

export const education = [
    {
        title: "Masters Candidate",
        duration: "2021-2024",
        subtitle: "Guildhall School of Music and Drama",
        details: [
            "Current masters student studying with James Johnstone and Nicholas Parle."
        ],
        tags: [
            "Historical Performance",
            "Harpsichord",
            "Continuo",
            "HP Opera Scenes",
            "Historical Gesture",
            "Ornamentation",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Graduate Certificate",
        duration: "2022-2023",
        subtitle: "Guildhall School of Music and Drama",
        details: [ ],
        tags: [
            "Historical Performance",
            "Harpsichord",
            "Continuo",
            "HP Opera Scenes",
            "Historical Gesture",
            "Ornamentation",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Masters of Music Candidate",
        duration: "2021-2022",
        subtitle: "University of North Texas",
        details: [
            "Harpsichord major studying with Dr. Bradley Bennight, and Vox Aquilae fellow, with Dr. Alan Hightower."
        ],
        tags: [
            "Historical Performance",
            "Harpsichord",
            "Continuo",
            "Keyboard Improvisation",
            "Jazz Piano",
            "Organ",
            "Baroque Orchestra",
            "Vox Aquilae",
            "Fellow",
        ],
        icon: "book",
    },
    {
        title: "Bachelor of Music",
        duration: "2019-2021",
        subtitle: "Indiana University, Jacobs School of Music",
        details: [
            "Major: Historical Performance - Instrumental (harpsichord)"
        ],
        tags: [
            "Historical Performance",
            "Harpsichord",
            "Continuo",
            "Viola da gamba",
            "Recorder",
            "Organ",
            "Carillon",
            "Music Theory",
            "Aural Skills",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Bachelor of Science in Music and an Outside Field",
        duration: "2019-2021",
        subtitle: "Indiana University, Jacobs School of Music",
        details: [
            "Major: Historical Performance - Instrumental (harpsichord) with an outside field: Computer Science, specialising in Programming languages."
        ],
        tags: [
            "Historical Performance",
            "Harpsichord",
            "Continuo",
            "Computer Science",
            "Progarmming Languages",
            "Compilers",
            "Music Theory",
            "Aural Skills",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Bachelor of Musical Arts Candidate",
        duration: "2015-2019",
        subtitle: "DePauw University",
        details: [
            "Piano and Computer Science double major, studying with Dr. May Phang."
        ],
        tags: [
            "Piano",
            "Voice",
            "Choir",
            "Computer Science",
            "Data Structures",
            "Music Theory",
            "Aural Skills",
        ],
        icon: "book",
    },
    /*{
        title: "Class 12th in Science and Mathematics",
        duration: "",
        subtitle: "Board of Secondary Education, Rajasthan",
        details: [],
        tags: ["Physics", "Chemistry", "Mathematics"],
        icon: "book",
    },*/
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/8461233/vinay-somawat",
            },
            {
                text: "GitHub",
                link: "https://github.com/vinaysomawat",
            },
            {
                text: "LeetCode",
                link: "https://leetcode.com/somawatvinay/",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Clone this page",
                link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/kielesacco/",
            },
            {
                text: "YouTube",
                link: "www.youtube.com/@Saccoki",
            },
            {
                text: "Instagram",
                link: "https://www.instagram.com/kielesacco.hpd",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Vinay Somawat, edited by Ki.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];