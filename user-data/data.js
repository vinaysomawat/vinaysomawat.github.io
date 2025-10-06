export const bio = [
  "Hello, I'm <strong>Deepak</strong>!",
  `<ul class="custom-bullet">
      <li>Product Security Lead with over <strong>13 years</strong> of experience in  
   securing scalable SaaS platforms, incorporating 
  <strong>Trust by Design</strong> 
  principles and a <strong>Shift Left Security</strong> mindset throughout the SSDLC. 
      </li>

    <li>
  My leadership skills complemented with my expertise as an Offensive Security Pentester and 
  Developer in startups and large corporations puts me in a unique position to assess 
  org’s security posture, identify gaps early and implement proactive strategies  
    </li>
    <li>
  Led projects in threat modeling, aligning with compliance 
  frameworks and led teams to drive 
  secure-by-default solutions to establish and maintain trust across stakeholders
    </li>
  </ul>
  `,
  `Beyond coding, I enjoy hiking through the serene 
    <strong>Washington mountains</strong> and experimenting with new 
    recipes in the <strong>kitchen</strong>. Whenever I can, 
    I love to write my thoughts and experiences in InfoSec in my 
    <a href="https://sekurity.hashnode.dev/"> <strong> Blog</strong> </a>`,
];

export const skills = [
  "Product Security, Offensive Security, Web/API Penetration Testing",
  "Arnica, Wiz, Security Champions program, SOC 2 Compliance",  
  "OWASP Threat Dragon, BurpSuite, SAST/DAST - checkov, semgrep, gitleaks",
  "GCP, AWS, Azure, Kubernetes, Container Security, Prompt Injection",
  "Golang, Python, Bash, Java, JavaScript, SQL", 
];

export const experience = [
  {
    title: "Qualtrics, Provo",
    duration: "May 2025 - Present​",
    subtitle: "Senior Product Security Engineer",
    details: [
      "Led full-stack product security ownership by embedding security across the SDLC — \
      from threat modeling and secure architecture design to code reviews, \
      automated security testing, and production hardening.",
      "Championed enterprise-wide security initiatives by building security frameworks, \
      defining secure coding standards, training 250+ security champions, and \
      partnering with product and platform teams to ensure compliance with global \
      security and privacy standards.",
    ],
    tags: [ "Threat Modeling", "Red Teaming", "STRIDE",  
      "SOC 2", "AI pipelines",  
    ],
    icon: "shield",
  },  
  {
    title: "sekurity.ai, Remote",
    duration: "June 2024 - April 2025",
    subtitle: "Founder & CTO",
    details: [
      "Designed an AI-driven Attack Surface Management and Pentesting SaaS \
       platform leveraging OpenAI to automate security assessments. \
       It discovers, catalogues and continuously monitors a company’s \
       digital assets - domains, SSL certificates, OSINT -wayback \
       archives etc., infra (on prem and cloud) to proactively identify \
       vulnerabilities, misconfigurations and potential threats"],
    tags: ["Golang", "OpenAI", "RAG",
      "Threat Modeling", "Red Teaming", "STRIDE",  
      "SOC 2", "AI pipelines",  
    ],
    icon: "shield",
  },
  {
    title: "Striim.com, Palo Alto",
    duration: "Dec 2015 - Mar 2024​ (8 years, 3 months)",
    subtitle: "Senior Software Engineer",
    details: [
      "Designed and secured the SaaS control and data plane with 200+ microservices \
      deployed in AWS, Azure and GCP",
    ],
    tags: ["Golang", 
      "Threat Modeling", "Red Teaming", "STRIDE",  
      "SOC 2", "PIA", "Web Application Pentesting", "AI pipelines",  
    ],
    icon: "asterisk",
  },
  {
    title: "Apptio, Seattle",
    duration: "April 2013 - December 2015 (2 years, 7 months)",
    subtitle: "Software Development Engineer 2",
    details: [
      `Led Application Security in Service-Oriented Architecture Migration – 
      Decomposed a monolithic application into secure, modular libraries 
      and microservices, embedding security-by-design principles. 
      Implemented least privilege access controls, secure API communication, 
      and encryption mechanisms to protect sensitive data.`,
      `Pentesting a RESTful Authentication & Authorization Service – 
      Conducted a security assessment of a RESTful authentication and
       authorization service, identifying critical vulnerabilities 
       such as Broken Object Level Authorization (BOLA), 
       Broken Function Level Authorization (BFLA), Mass Assignment
        and Auth Bypass. Exploited flaws in API access controls 
        and session management to demonstrate privilege escalation, 
        unauthorized data access and account takeovers. Tested for 
        excessive data exposure, rate-limiting weaknesses and insecure 
        direct object references (IDOR)`,
    ],
    tags: [
      "Python", 
      "Burpsuite", 
      "Postman",
      "Java",
      "Bash",
      "python",
    ],
    icon: "database",
  },
  {
    title: "Amazon, Seattle",
    duration: "October 2012 - April 2013 (6 months)",
    subtitle: "Software Development Engineer",
    details: [
      `Designed Secure Content Management Service – Architected a versioning 
      system for data and content, ensuring auditability, integrity and
       rollback capabilities. Implemented cryptographic signing and
        hashing (SHA-256, HMAC) to prevent tampering and ensure data integrity`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "amazon",
  },
  {
    title: "Citrix R&D, Bengaluru",
    duration: "June 2011 - OCT 2012 (1 year, 5 months)",
    subtitle: "Software Development Engineer",
    details: [
      `Implemented Auto-Scaling & LBaaS in Apache CloudStack with NetScaler`, 
      `Openstack Nova Iptables drivers to enable Security Groups 
        and Provider Firewall for Xen Cloud Platform `,
    ],
    tags: ["Python", "Django", "Scripting", "Java", "Netscaler"],
    icon: "group",
  },
];


export const openSourcePRs = [
    {
        name: "OpenStack PRs - Nova, Neutron, DevStack, Keystone",
        url:  "https://review.opendev.org/q/deepakgarg.iitg%2540gmail.com",
    },
    {
        name: "Apache CloudStack",
        url: "https://reviews.apache.org/users/deepak/",
    },
    {
        name: "XenaPI Provider Firewall Blueprint",
        url: "https://blueprints.launchpad.net/nova/+spec/xenapi-provider-firewall",
    },
    {
        name: "Apache CloudStack Autoscaling Blueprint",
        url: "https://cwiki.apache.org/confluence/display/CLOUDSTACK/Autoscaling",
    },
    {
        name: "Go-IPFS",
        url: "https://github.com/ipfs/go-ipfs-cmds/pulls?q=is%3Apr+author%3Agargdeepak+is%3Aclosed",
    },
    {
        name: "IPFS Cluster",
        url: "https://github.com/ipfs-cluster/ipfs-cluster/pulls?q=is%3Apr+author%3Agargdeepak+is%3Aclosed"
    },
];


export const trekking = [
  '<strong>Kheerganga Trek</strong>, Himachal Pradesh (9,711 feet)',
  '<strong>Triund Trek</strong>, Himachal Pradesh (9,350 feet)',
];

export const education = [
  {
    title: "B.Tech. in Electronics & Communication Engineering",
    duration: "2007 - 2011",
    subtitle: "Indian Institute of Technology Guwahati",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
  //   {
  //     label: "Resources",
  //     data: [
  //       {
  //         text: "Enable Dark/Light Mode",
  //         func: "enableDarkMode()",
  //       },
  //       {
  //         text: "Print this page",
  //         func: "window.print()",
  //       },
  //     ],
  //   },

  {
    label: "copyright-text",
    data: ["Made with &hearts; by Deepak"],
  },
];
