import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Study Fliss",
    imgSrc: "/project-imgs/image.png",
    code: "https://github.com/axnand/StudyFliss2",
    projectLink: "https://studyfliss.com/",
    tech: ["NextJs", "NodeJs", "SupaBase","CloudFare R2", "TailwindCSS"],
    description:
      "A website that comprises all the information/ resources a student might need to live his/her college years to the fullest. Through the efficient use of technology, we will transform the access to resources for students.",
    modalContent: (
      <>
        <p>
        A website that comprises all the information/ resources a student might need to live his/her college years to the fullest. Through the efficient use of technology, we will transform the access to resources for students.        </p>
        <p>
        Platform Features</p>
        <p>
1. <b><u >Student Registration and Profile Management:</u></b> Register and manage student profiles with personal and academic details.</p>


<p>2. <b><u>Notes Access and Management:</u></b> Access and manage up-to-date, verified notes across all IPU subjects and branches.</p>

   
<p>3. <b><u>Startup Pitching Competitions:</u></b>
Submit pitches, receive feedback, and compete for funding in our startup pitching competitions.
        </p>
        <p>4. <b><u>IPU Exams Analysis and Preparation:</u></b>
Analyze past IPU exam papers and receive potential questions and study tips.
        </p>

      </>
    ),
  },


  {
    title: "Insightify",
    imgSrc: "/project-imgs/project3.jpg",
    code: "https://github.com/dhawalbisht/Insightify",
    projectLink: "https://github.com/dhawalbisht/Insightify",
    tech: ["Fask", "ReactJs",  "CSS"],
    description:
      "This project provides a web-based PDF summarizer application with two main features: text summarization and question answering. The backend is powered by Flask, while the frontend is built using React.js.",
    modalContent: (
      <>
        <p>
        Our app simplifies complex PDFs, offering quick summaries and answering questions to boost productivity.
        Leveraging Flask on the backend, the app seamlessly processes PDF documents uploaded by users, extracting key information for summarization and question answering.
        </p>
        <p>
       Built with React on the frontend, the app features an intuitive and interactive user interface that allows users to upload PDFs, customize summary lengths, ask questions, and receive instant answers.
        </p>
        <p>
        The app is designed for continuous improvement, with plans for incorporating additional features such as language translation, sentiment analysis, and document clustering to further enhance its capabilities.
        </p>
      </>
    ),
  },
  
  {
    title: "Expense Tracker",
    imgSrc: "/project-imgs/project2.jpg",
    code: "https://github.com/axnand/expenseTracker",
    projectLink: "https://expense-tracker-pgs87u00m-anands-projects-eb4bd129.vercel.app/",
    tech: ["JavaScript", "ReactJs", "Vite",  "CSS"],
    description:
      "This project is a simple transaction management system where users can add new transactions by entering a text description and the corresponding amount. Transactions are categorized as either expenses (negative amounts) or income (positive amounts).",
      modalContent: (
      <>
        <p>
        Personal Finance Management: Individuals can use this application to track their personal expenses, income sources, and overall financial health. It serves as a digital ledger for managing budgets and analyzing spending patterns.
        </p>
        <p>
        Small Business Accounting: Small businesses or freelancers can utilize the application to record business transactions, monitor cash flows, and maintain accurate financial records. The categorization feature aids in separating business expenses from personal ones.
        </p>
        <p>
        Budget Tracking and Analysis: Users can leverage the total balance display and categorized transactions to create budgets, track expenses against income, identify areas for cost-cutting, and make informed financial decisions.
        </p>
      </>
    ),
  },

  {
    title: "Credit Card Fraud Detection",
    imgSrc: "/project-imgs/project4.png",
    code: "https://github.com/dhawalbisht/CreditCardFraudDetection.git",
    projectLink: "https://github.com/dhawalbisht/CreditCardFraudDetection.git",
    tech: ["TensorFlow", "Seaborn", "Python prediction libraries"],
    description:
      "Credit Card Fraud Detection project successfully addressed the pressing need for an intelligent and scalable solution to combat electronic transaction fraud.",
    modalContent: (
      <>
        <p>
        Deep Learning Model with TensorFlow
Developed a robust deep learning model capable of autonomously learning intricate patterns indicative of fraudulent transactions.
        </p>
        <p>
        Exploratory Data Analysis with Seaborn
Utilized Seaborn integration for comprehensive exploratory data analysis, providing valuable insights into transaction patterns, outliers, and key features influencing fraud detection.
        </p>
        <p>
        Python Prediction Libraries
Incorporated diverse Python prediction libraries such as Scikit-learn and XGBoost for model evaluation, fine-tuning, and prediction accuracy.
        </p>
      </>
    ),
  },
];
