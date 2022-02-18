export default {
    skills: [
        {
            skillName: "JavaScript, C++",
            color: "1",
            percentage: "70"
        },
        {
            skillName: "Angular, Reactjs",
            color: "6",
            percentage: "50"
        },
        {
            skillName: "Nodejs, MongoDB",
            color: "2",
            percentage: "40"
        },
        {
            skillName: "AWS(EC2, S3), Heroku, Netlify",
            color: "3",
            percentage: "30"
        },
        {
            skillName: "HTML, Bootstrap, SCSS",
            color: "4",
            percentage: "70"
        },
        {
            skillName: "GitHub, JIRA, Trello",
            color: "7",
            percentage: "70"
        },
        {
            skillName: "Postman, Chrome DevTools",
            color: "3",
            percentage: "80"
        },
        {
            skillName: "CleverTap, FreshDesk",
            color: "5",
            percentage: "50"
        },
        {
            skillName: "VS Code",
            color: "6",
            percentage: "70"
        }
    ],
    projects: {
        web: [
            {
                projectName: "Programming Diaries",
                image: "images/programmingdiaries.png",
                summary:
                    "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
                preview: "https://programmingdiaries.herokuapp.com/",
                techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
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
            }
        ],
        software: [
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
            }
        ],
        android: [
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
            }
        ],
        freelance: [
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
                summary:
                    "Android Application to display website in android devices.",
                preview: "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
                techStack: ["Android", "JAVA", "Play Store"],
            }
        ]
    },
    experience: [
        {
            title: "Novopay Solutions Pvt. Ltd.",
            duration: "June 2020 - Present",
            subtitle: "Software Engineer, SDE Intern",
            details: [
                "Supporting both frontend & backend teams for AEPS, DMT transaction, CMS Service, gateways.",
                "Working on biometric eKYCs, CDM card and onboarding retailers flows."
            ],
            tags: [
                "JavaScript",
                "Angular",
                "React",
                "Bootstrap",
                "Nodejs",
                "Jenkins"
            ],
            icon: "qrcode"
        },
        {
            title: "ThinkPedia LLP",
            duration: "May 2019 - June 2019",
            subtitle: "SDE Intern",
            details: [
                "Worked as a full stack developer to support tech team.",
                "Developed a customer Web Application from scratch for social media management."
            ],
            tags: [
                "JavaScript",
                "Angular",
                "Bootstrap",
                "Java",
                "Spring Boot"
            ],
            icon: "group"
        }
    ],
    education: [
        {
            title: "Bachelors in Computer Science and Engineering",
            duration: "",
            subtitle: "National Institute of Technology, Warangal",
            details: [
                "Qualified GATE-2020."
            ],
            tags: [
                "Data Structures & Algorithms",
                "Operating Systems",
                "Database Management System",
                "Computer Networks",
                "Compiler Designing",
                "Cloud Computing"
            ],
            icon: "graduation-cap"
        },
        {
            title: "Class 11-12th in Science and Mathematics",
            duration: "",
            subtitle: "Board of Secondary Education, Rajasthan",
            details: [
                "Qualified JEE Advanced, Main & BITSAT.",
                "Secured 99.5 percentile in Class 12th Boards Examinations."
            ],
            tags: [
                "Physics",
                "Chemistry",
                "Mathematics"
            ],
            icon: "book"
        }
    ],
    links: [
        {
            text: "StackOverflow",
            color: "darkorange",
            style: 'width: 80%',
            alt: 'stackoverflow profile',
            imgLink: 'https://i.stack.imgur.com/BDie5.png',
            link: "https://stackoverflow.com/users/8461233/vinay-somawat"
        },
        {
            text: "GitHub",
            color: "black",
            style: 'width: 80%',
            alt: 'GitHub Profile',
            imgLink: 'https://pngimg.com/uploads/github/github_PNG15.png',
            link: "https://github.com/vinaysomawat"
        },
        {
            text: "LeetCode",
            color: "black",
            style: 'width: 80%',
            alt: 'Leetcode Profile',
            imgLink: 'https://cdn-images-1.medium.com/max/1600/0*GePc7lo4CF4A3guP.png',
            link: "https://leetcode.com/somawatvinay/"
        },
        {
            text: "Linkdin",
            color: "black",
            style: 'width: 80%',
            alt: 'Linkedin Profile',
            imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png',
            link: "https://www.linkedin.com/in/vinaysomawat/"
        }
    ]
}