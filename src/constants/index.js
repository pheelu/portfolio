import project1 from "../assets/projects/image-1.jpg";
import project2 from "../assets/projects/image-4.jpg";

export const HERO_CONTENT = `I am a 23-year-old Italian student pursuing a Master's in Computer Science in France, specializing in Cybersecurity and E-Payment systems.`;

export const ABOUT_TEXT = `My studies have equipped me with strong technical and problem-solving skills, preparing me to tackle real-world challenges. Passionate about data, I am drawn to fields such as data science, data engineering, and machine learning. I am fascinated by how data drives innovation and decision-making across industries, and I strive to deepen my expertise in this area.

As a sports enthusiast, I aim to combine my passion for data and technology with the sports industry, contributing to areas like sports analytics and performance optimization.`;

export const EDUCATION = [
  {
    year: "2024 - Present",
    at: "ENSI CAEN",
    country : "France",
    subject: "MSc in Computer Engineering", 
    description: `I am pursuing an MSc in Computer Engineering, specializing in E-Payment Systems and Cybersecurity. I take pride in studying the innovative domain of E-Payments, focusing on secure and efficient digital transaction systems. This path has allowed me to explore technologies like blockchain, cryptographic protocols and tokenization, preparing me to address modern challenges in secure payment solutions.`,
    technologies: ["JavaCard", "Apple Pay", "SEPA"],
    link : "https://www.ensicaen.fr/",
  },
  {
    year: "2023 - Present",
    at: "Uninsubria",
    country : "Italy",
    subject: "MSc Computer Science",
    description: `I have started a Master's in Computer Science to deepen my knowledge in advanced topics and enhance my technical skills for real-world applications.`,
    technologies: ["NuSMV", "Prolog", "mongoDB", "Node-RED"],
    link : "https://www.uninsubria.it/",
  },
  {
    year: "2021 - 2022",
    at: "Universidad de León",
    country : "Spain",
    subject: "Computer Engineering",
    description: `I participated in an Erasmus program in Spain, where I studied Engineering and completed courses in Project Management, Marketing, Electronics, and Recommendation Systems. This experience enriched my academic knowledge and cultural perspective, enhancing my adaptability and global outlook.`,
    technologies: ["Neo4j", "Pandas", "NumPy", "Scikit-learn"],
    link : "https://www.unileon.es/",
  },
  {
    year: "2020 - 2023",
    at: "Uninsubria",
    country : "Italy",
    subject: "Computer Science",
    description: `I earned a Bachelor's in Computer Science, gaining skills in programming, software engineering, and technologies like Python, Java, and SQL, with a focus on cybersecurity and big data.`,
    technologies: ["Python", "C", "C++", "Java", "SQL"],
    link : "https://www.uninsubria.it/",
  },
];

export const PROJECTS = [
  {
    title: "MoneyBall in Football",
    image: project1,
    description:"This project explores data analysis in soccer to predict match outcomes, using web scraping to collect team, player, and match data. The process involves cleaning data, selecting relevant variables, and building a predictive model using machine learning. The model’s accuracy is tested with historical data, identifying challenges and proposing improvements for future prediction applications.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "BeautifulSoup"],
  },
  {
    title: "WeDoFootball!",
    image: project2,
    description:"This project focuses on the development of a simulation system to track soccer players' movements, pressure, body temperature, heart rate, and calories using sensors integrated with digital devices. A GUI displays real-time match info and a heat map, helping to understand tactics and strategies. An integrated database system provides data storage, extraction, and analytics to generate insights for coaches, players, and fans. MQTT is used for communication between the sensors and Node-RED.",
    technologies: ["Python", "JavaScript", "mongoDB", "Node-RED"],
  },
];

export const CONTACT = {
  phoneNo: "+39 342 589 5077 ",
  email: "filippoprivata@gmail.com",
};
