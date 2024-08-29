import lending_club from "../assets/projects/lending_club.png";
import bike_sharing from "../assets/projects/bike_sharing.png";
import eda_kit from "../assets/projects/eda_kit.png";
import itr_2024 from "../assets/projects/itr_2024.png";
import iiitb_logo from "../assets/education/iiitb_logo.png";
import iitb_logo from "../assets/education/IIT_Bombay_Logo.svg";

export const HERO_CONTENT = `I am an enthusiastic Machine Learning Engineer and Full-Stack Python Developer with expertise in Python-based ML frameworks like TensorFlow and Scikit-Learn, and full-stack development using Flask, Django, React.js, and PostgreSQL. I build intelligent systems and dynamic web applications, focusing on innovation and enhancing user experiences while continually expanding my knowledge to tackle complex challenges.`;

export const ABOUT_TEXT = [`I am a Full-Stack Python Developer with expertise in building and deploying scalable web applications, now expanding into AI, Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), MLOps, and Generative AI (GenAI). I bring a strong background in Python, Django, PostgreSQL, and React, with a current focus on leveraging AI technologies to drive innovative solutions.`,

`In previous roles, I have developed robust applications, integrated APIs, and enhanced both user experiences and operational efficiency. My recent work includes designing and implementing machine learning models using TensorFlow, PyTorch, and scikit-learn, as well as employing NLP techniques for text analysis and data insights. I also excel at deploying and managing ML models in production environments, utilizing MLOps tools to ensure smooth operations.`,

`I am currently pursuing an AI/ML Executive Postgraduate program at IIIT Bangalore, specializing in Deep Learning (DL) and Natural Language Processing (NLP). My focus is on exploring Generative AI models such as GPT and GANs to drive innovation and develop impactful solutions. I am excited about opportunities that align with my Full-Stack Python development skills and growing expertise in AI/ML.`];

export const EDUCATION = [
    {
        year: `2025 (pursuing)`,
        logo: iiitb_logo,
        degree: `Executive Postgraduate Programme in AI and ML`,
        institute: `International Institute of Information Technology, Bangalore`,
        technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn","Plotly", "MySQL", "Scikit-learn", "Statsmodels", "OpenCV", "MLFlow", "AirFlow", "TensorFlow", "SpaCy", "NLTK", "Keras", "REST:API", "Docker", "Flask", "AWS"],
    },
    {
        year: `2017`,
        logo: iitb_logo,
        degree: `5 Years Integrated M.Sc. in Chemistry`,
        institute: `Indian Institute of Technology, Bombay`,
        technologies: ["C++", "MySQL", "HTML", "CSS", "Javascript", "PHP", "Fortran", "MATLAB", "R", "Oracle", "Molden", "Avogadro", "ChemTube3D"],
    },
];

export const EXPERIENCES = [
    {
        year: `March 2024 - present`,
        role: `ML Engineer, Full Stack Python Developer`,
        company: `Arhaa Infotech Pvt. Ltd.`,
        description: [
            `Developed scalable web applications using Python, Django, PostgreSQL, and React, enhancing user experience and efficiency. Designed and implemented machine learning models with TensorFlow, PyTorch, and scikit-learn, improving predictive accuracy. Applied NLP techniques for text and sentiment analysis, driving actionable business insights. Integrated RESTful APIs to enhance functionality and ensure seamless communication. Automated deployment of machine learning models using MLOps tools for continuous integration and reliability. Led transition to Generative AI technologies, exploring GPT and GANs for impactful AI solutions. Collaborated with cross-functional teams to ensure smooth execution and timely delivery, improving product quality.`,
        ],        
        technologies: [
            "Python", "Django", "Django REST Framework", "React.js", "PostgreSQL", "Pandas", "scikit-learn", "TensorFlow", "PyTorch", 
        ]
        ,
    },
    {
        year: `Aug, 2022 - Jan 2024`,
        role: `Founder`,
        company: `JEE 360`,
        description: [
            `Developed a Homework Helper app using JavaScript, React, and Node.js, aiding students in solving academic problems with accessible resources. Designed responsive interfaces with HTML5, CSS3, and Bootstrap, ensuring seamless navigation on web and mobile. Created automated grading systems with Python and Flask, enabling instant feedback for improved learning. Collaborated with educators to integrate educational materials using RESTful APIs, including quizzes and tutorials. Optimized performance and scalability using AWS and MongoDB, ensuring reliability during high traffic periods. Implemented progress tracking and analytics with SQL and data visualization libraries to monitor student performance.`,
        ],
        technologies: [
            "JavaScript", "React", "Node.js", "HTML5", "CSS3", "Bootstrap", "Python", "Flask", "RESTful APIs", "AWS", "MongoDB", "SQL", "Chart.js", "OAuth",
        ]
        ,
    },
];

export const PROJECTS = [
    {
        title: "Lending Club Case Study",
        image: lending_club,
        description: `The Lending Club Case Study involves analyzing loan data to identify factors influencing loan default and risk. It leverages exploratory data analysis (EDA) to uncover insights and predict defaults, enhancing risk management and lending strategies.`,
        technologies: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
    },
    {
        title: "Bike Sharing - Demand Regression",
        image: bike_sharing,
        description: `The Bike Sharing Demand Regression study focuses on predicting bike rental demand using historical data, weather conditions, and other relevant factors. The analysis employs regression techniques to forecast future demand, aiding in efficient resource allocation and operational planning for bike-sharing services.`,
        technologies: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Scipy", "Scikit-learn", "Statsmodels"],
    },
    {
        title: "Exploratory Data Analysis Library",
        image: eda_kit,
        description: `The Exploratory Data Analysis (EDA) Library is a Python-based tool designed to streamline data exploration, offering automated visualizations and statistical summaries. It simplifies the process of uncovering patterns, correlations, and insights within datasets, aiding in more efficient data analysis and decision-making.`,
        technologies: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Scipy", "Scikit-learn", "Statsmodels"],
    },
    {
      title: "India's ITR Dashboard, 2024",
      image: itr_2024,
      description: `The India’s ITR Dashboard of 2024, built in Power BI, visualizes income tax returns data to provide insights into tax trends, compliance, and revenue collection. The interactive dashboard enables detailed analysis and reporting on individual and corporate tax submissions across various sectors.`,
      technologies: ["MS Excel", "Power BI"],
    },
  ];
  
  export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/svenkatlata",
    github: "https://www.github.com/svenkatlata",
    twitter: "https://x.com/svenkatlata_",
    tableau: "https://public.tableau.com/app/profile/svenkatlata",
  };