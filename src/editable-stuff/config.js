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
      image: "fa-github",
      url: "https://github.com/sampathchowdary",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sampath-chowdary-sam/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../logo.svg"),
  imageSize: 375,
  message:
    "My name is Sampath chowdary Gundapuneni. Experienced full stack developer with a passion for learning, focused on creating scalable solutions that align with company goals. Dedicated to contributing to team success and enhancing user experiences through innovative and collaborative efforts.",
  resume: "https://drive.google.com/file/d/1qofX_4gGt4SOuKYGmqJIuxroGZ2-2mz3/view?usp=drive_link",
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
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../logo.svg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../logo.svg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
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
    { name: "OOPS"},
    { name: "PostgreSQL"},
    { name: "ReactJS"},
    { name: "Redux"},
    { name: "Saga"},
    { name: "VueJS"},
    { name: "Vuex"},
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
    { name: "Docker"},
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
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Teaching Assistant',
      companylogo: require('../assets/img/UHCLLogo'),
      date: 'Aug 2022 – Dec 2023',
    },
    {
      role: 'Research Assistant',
      companylogo: require('../assets/img/UHCLLogo'),
      date: 'Jan 2022 – Aug 2022',
    },
    {
      role: 'Software Engineer 2',
      companylogo: require('../assets/img/eagleview_logo.png'),
      date: 'Aug 2018 – Dec 2021',
    },
    {
      role: 'Assistant System Engineer Trainee',
      companylogo: require('../assets/img/tcs-color.png'),
      date: 'Jun 2018 – Aug 2019',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
