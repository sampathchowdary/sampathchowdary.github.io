// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sampath",
  middleName: "",
  lastName: "Gundapuneni",
  message: " Passionate about Technology, Committed to Innovation, and Dedicated to Advancing the Digital Frontier. ",
  icons: [
    {
      image: require("../assets/img/GitHub_logo.png"),
      url: "https://github.com/sampathchowdary",
    },
    {
      image: require("../assets/img/Logo-LinkedIn.jpg"),
      url: "https://www.linkedin.com/in/sampath-chowdary-sam/",
    },
    {
      image: require("../assets/img/LeetCode_logo.png"),
      url: "https://leetcode.com/sampath1512/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/profile.jpg"),
  imageSize: 375,
  message:
    "My name is Sampath chowdary Gundapuneni. Experienced full stack developer with a passion for learning, focused on creating scalable solutions that align with company goals. Dedicated to contributing to team success and enhancing user experiences through innovative and collaborative efforts.",
  resume: "https://docs.google.com/document/d/1l9d1jFfqLEWZSdClMeqzzzCIUKcVruep/edit?usp=sharing&ouid=109741263001238961501&rtpof=true&sd=true",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sampathchowdary",
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Awards",
  message:
    "In recognition of outstanding contributions to Eagleview's organizational capability, including the development of Engineering Role's Learning Maps to enhance technical learning and self-sufficiency. Additionally, for tackling and successfully overcoming complex challenges in building the gallery page, demonstrating relentless dedication and innovation.",
  images: [
    { 
      img: require("../assets/img/A&BAward 1.png"), 
      label: " Above and Beyond Award - Presented by Salim", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/EVINInnovathon.jpeg"), 
      label: "Innovathon award - For Innovation", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/A&BAward 2.png"), 
      label: "Above and Beyond Award - Presented by Tripp Cox", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"715",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Go"},
    { name: "Java"},
    { name: "Python"},
    { name: "Node JS"},
    { name: "SpringBoot"},
    { name: "SQL"},
    { name: "NoSQL"},
    { name: "OOPS"},
    { name: "PostgreSQL"},
    { name: "ReactJS"},
    { name: "Redux"},
    { name: "Saga"},
    { name: "VueJS"},
    { name: "Vuex"},
    { name: "Angular"},
    { name: "HTML"},
    { name: "CSS"},
    { name: "TypeScript"},
    { name: "JavaScript"},
    { name: "React Native"},
    { name: "Jest"},
    { name: "Jasmine"},
    { name: "Git"},
    { name: "GraphQL"},
    { name: "Machine Learning"},
    { name: "Swagger"},
    { name: "Jenkins"},
    { name: "Kafka"},
    { name: "Redis"},
    { name: "Docker"},
    { name: "Kubernates"},
    { name: "SonarQube"},
    { name: "Splunk"},
    { name: "Elastic Search"},
    { name: "Micro Services"},
    { name: "Jira"},
    { name: "Scrum"},
    { name: "Agile"},
    { name: "AWS"},
    { name: "GCP"},
    { name: "Microsoft Azure"},
    { name: "SQLC"},
    { name: "REST"},
    { name: "Linux"},
    { name: "Design"},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering/Developer roles. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "sampathgundapuneni@gmail.com",
  Mobile: "+1 281 935 6054"
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Full Stack Software Engineer',
      companylogo: require('../assets/img/kindred.png'),
      companyName: 'Kindred pest control',
      companyUrl: 'https://kindredpest.com/',
      date: 'Mar 2024 – '+`Till Today`,
    },
    {
      role: 'Teaching Assistant',
      companylogo: require('../assets/img/UHCLLogo'),
      companyName: 'University of Houston - Clear lake',
      companyUrl: 'https://www.uhcl.edu/',
      date: 'Aug 2022 – Dec 2023',
    },
    {
      role: 'Research Assistant',
      companylogo: require('../assets/img/UHCLLogo'),
      companyName: 'University of Houston - Clear lake',
      companyUrl: 'https://www.uhcl.edu/',
      date: 'Jan 2022 – Aug 2022',
    },
    {
      role: 'Software Engineer 2',
      companylogo: require('../assets/img/eagleview_logo.png'),
      companyName: 'EagleView',
      companyUrl: 'https://www.eagleview.com/',
      date: 'Aug 2018 – Dec 2021',
    },
    {
      role: 'Assistant System Engineer',
      companylogo: require('../assets/img/tcs-color.png'),
      companyName: 'Tata Consultancy Services',
      companyUrl: 'https://www.tcs.com/',
      date: 'Jun 2018 – Aug 2019',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
