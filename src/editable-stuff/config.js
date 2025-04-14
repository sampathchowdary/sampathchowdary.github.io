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
  imageLink: require("../assets/img/IMG_2153.jpg"),
  imageSize: 425,
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
    { name: "C"},
    { name: "C++"},
    { name: "Node JS"},
    { name: "SpringBoot"},
    { name: "SQL"},
    { name: "NoSQL"},
    { name: "PostgreSQL"},
    { name: "MySQL"},
    { name: "MongoDB"},
    { name: "Aurora"},
    { name: "Big Query"},
    { name: "DynamoDB"},
    { name: "Redis"},
    { name: "Elastic Search"},
    { name: "OOPS"},
    { name: "ReactJS"},
    { name: "Redux"},
    { name: "Saga"},
    { name: "Thunk"},
    { name: "MobX"},
    { name: "VueJS"},
    { name: "Vuex"},
    { name: "Angular"},
    { name: "HTML"},
    { name: "CSS"},
    { name: "TypeScript"},
    { name: "JavaScript"},
    { name: "React Native"},
    { name: "Next.js"},
    { name: "Material-UI"},
    { name: "PHP"},
    { name: "Webpack"},
    { name: "Babel"},
    { name: "Parcel"},
    { name: "Jest"},
    { name: "Jasmine"},
    { name: "Junit"},
    { name: "Cypress"},
    { name: "Mocha"},
    { name: "Yarn"},
    { name: "Git"},
    { name: "GitLab"},
    { name: "GraphQL"},
    { name: "Swagger"},
    { name: "Jenkins"},
    { name: "CircleCI"},
    { name: "Docker"},
    { name: "Kubernates"},
    { name: "Kubernetes"},
    { name: "Terraform"},
    { name: "SonarQube"},
    { name: "Postman"},
    { name: "Dataflow"},
    { name: "Databricks"},
    { name: "Kafka"},
    { name: "Hadoop"},
    { name: "MVC"},
    { name: "Prometheus"},
    { name: "Grafana"},
    { name: "Kibana"},
    { name: "Slack"},
    { name: "Jira"},
    { name: "Scrum"},
    { name: "Agile"},
    { name: "REST"},
    { name: "HTTP"},
    { name: "YAML"},
    { name: "JSON"},
    { name: "Nginx"},
    { name: "Argo CD"},
    { name: "Datadog"},
    { name: "Algorithms"},
    { name: "Data Structures"},
    { name: "CloudWatch"},
    { name: "EKS"},
    { name: "Pub/Sub"},
    { name: "ELB"},
    { name: "AWS"},
    { name: "GCP"},
    { name: "Microsoft Azure"},
    { name: "Linux"},
    { name: "SQLC"},
    { name: "Design"},
    { name: "Airtable"},
    { name: "Ring Central"},
    { name: "Field Routes"},
    { name: "Zapier"},
    { name: "Webhook"},
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
