import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";

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
    title: "Ziddle",
    imgSrc: "/project-imgs/image7.png", 
    projectLink: "https://beta.ziddle.tech/", 
    tech: ["NextJs", "NodeJs", "Cloudfare", "AWS", "MongoDB"],
    description:
      "Built a travel itinerary platform that generates personalized plans based on user preferences. Implemented seamless frontend-to-backend integration for a smooth user experience. Designed for scalability, high performance, and SEO optimization using Next.js (SSR) and Cloudflare caching.",
    modalContent: (
      <>
  <p>
    A travel itinerary platform that generates personalized plans based on user preferences.
  </p>
  <p>Platform Features</p>
  <p>
    1. <b><u>Personalized Itinerary Generation:</u></b> Built a travel itinerary platform that generates personalized plans based on user preferences.
  </p>
  <p>
    2. <b><u>Seamless Frontend-to-Backend Integration:</u></b> Implemented seamless frontend-to-backend integration for a smooth user experience.
  </p>
  <p>
    3. <b><u>Optimized Performance and SEO:</u></b> Designed for scalability, high performance, and SEO optimization using <b>Next.js (SSR)</b> and <b>Cloudflare caching</b>.
  </p>
</>

    ),
  },
  {
    title: "Integrated Management System",
    imgSrc: "/project-imgs/image9.png",
    projectLink: "https://emp-mgmt-tau.vercel.app/",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Developed a centralized system for the Chief Education Office, Doda, J&K, digitizing employee records, attendance, and administrative workflows across schools. Automated HR processes including transfers, payroll, and leave management, reducing paperwork and improving efficiency. Implemented secure role-based access control and real-time analytics dashboards.",
    modalContent: (
      <>
        <p>
          A centralized system developed to digitize employee records, attendance, and administrative workflows.
        </p>
        <p>Platform Features</p>
        <p>
          1. <b><u>Centralized Data Management:</u></b> Developed a centralized system for digitizing employee records, attendance, and administrative workflows.
        </p>
        <p>
          2. <b><u>Automated HR Processes:</u></b> Automated HR processes including transfers, payroll, and leave management, reducing paperwork and improving efficiency.
        </p>
        <p>
          3. <b><u>Secure Access and Real-Time Analytics:</u></b> Implemented secure role-based access control and real-time analytics dashboards to enhance data management and decision-making.
        </p>
      </>

    ),
  },
  {
    title: "IADR-APR 2025 Conference Website",
    imgSrc: "/project-imgs/image8.png",
    projectLink: "https://iadrapr2025.com/", // Replace with your actual project link if available
    tech: ["Next.js", "Tailwind CSS", "Razorpay API", "MongoDB", "AWS"],
    description:
      "Developed a secure, scalable web portal for the IADR-APR 2025 International Dental Conference. Integrated Razorpay for seamless participant registration and payment processing, with a built-in admin panel to manage registrations, track transactions, and generate reports while enabling custom-tailored confirmation emails.",
    modalContent: (
      <>
        <p>
          A secure, scalable web portal developed for the IADR-APR 2025 International Dental Conference.
        </p>
        <p>Platform Features</p>
        <p>
          1. <b><u>Comprehensive Conference Management:</u></b> Developed a secure, scalable web portal for the IADR-APR 2025 International Dental Conference.
        </p>
        <p>
          2. <b><u>Seamless Payment Integration:</u></b> Integrated Razorpay for seamless participant registration and payment processing, with an admin panel to manage registrations and track transactions.
        </p>
        <p>
          3. <b><u>Custom Confirmation Emails:</u></b> Enabled custom-tailored confirmation emails for a smooth user experience.
        </p>
      </>

    ),
  },
  {
    title: "StamPick",
    imgSrc: "/project-imgs/image10.png", 
    projectLink: "https://stampick.vercel.app/", 
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Three.js", "GSAP", "Polygon", "TensorFlow", "OpenAI API", "Stripe", "Clerk API", "AWS", "Docker"],
    description:
      "Developed StamPick, a blockchain-powered marketplace and digital community for philatelists. Features include an AI-driven stamp scanner, secure auctions, a 3D virtual exhibition, and a blockchain-based authentication system for counterfeit detection.",
    modalContent: (
      <>
  <p>
    StamPick is a centralized web platform connecting philatelists across India, enabling seamless buying, selling, and discovery of rare stamps. It overcomes geographical limitations and enhances accessibility for collectors, enthusiasts, and dealers.
  </p>
  <p><b>Key Features:</b></p>
  <p>
    1. <b><u>AI Stamp Scanner:</u></b> Uses AI to instantly identify stamps, providing historical details, rarity insights, and estimated value.
  </p>
  <p>
    2. <b><u>Secure Auction Platform:</u></b> Enables online auctions for rare stamps with safe, transparent transactions.
  </p>
  <p>
    3. <b><u>3D Virtual Exhibitions:</u></b> Integrated <b>Three.js</b> and <b>Blender</b> to create an immersive exhibition experience, allowing users to explore stamps in 3D.
  </p>
  <p>
    4. <b><u>Blockchain Authentication:</u></b> Utilized <b>Polygon smart contracts</b> for counterfeit stamp detection and secure ownership verification.
  </p>
  <p>
    5. <b><u>Philatelic Resources:</u></b> Provides articles and videos for beginners and experts, fostering a knowledge-driven community.
  </p>
  <p>
    6. <b><u>Seamless Transactions:</u></b> Integrated <b>Stripe</b> for payments and <b>Clerk API</b> for authentication, ensuring a smooth user experience.
  </p>
  <p>
    7. <b><u>Performance & Deployment:</u></b> Built with <b>Next.js</b> and deployed on <b>AWS</b> using <b>Docker</b>, ensuring scalability and high performance.
  </p>
</>
    ),
  },
  {
    title: "Study Fliss",
    imgSrc: "/project-imgs/image6.png",
    code: "https://github.com/axnand/StudyFliss2",
    projectLink: "https://studyfliss.com/",
    tech: ["NextJs", "NodeJs", "SupaBase", "CloudFare R2", "TailwindCSS"],
    description:
      "A website that comprises all the information/ resources a student might need to live his/her college years to the fullest. Through the efficient use of technology, we will transform the access to resources for students.",
    modalContent: (
      <>
        <p>
          A website that comprises all the information/ resources a student might need to live his/her college years to the fullest. Through the efficient use of technology, we will transform the access to resources for students.
        </p>
        <p>Platform Features</p>
        <p>
          1. <b><u>Student Registration and Profile Management:</u></b> Register and manage student profiles with personal and academic details.
        </p>
        <p>
          2. <b><u>Notes Access and Management:</u></b> Access and manage up-to-date, verified notes across all IPU subjects and branches.
        </p>
        <p>
          3. <b><u>Startup Pitching Competitions:</u></b> Submit pitches, receive feedback, and compete for funding in our startup pitching competitions.
        </p>
        <p>
          4. <b><u>IPU Exams Analysis and Preparation:</u></b> Analyze past IPU exam papers and receive potential questions and study tips.
        </p>
      </>
    ),
  },
  
  {
    title: "Iphone Website",
    imgSrc: "/project-imgs/iphone.png",
    code: "https://github.com/axnand/myiphone",
    projectLink: "https://myiphone-alpha.vercel.app/",
    tech: ["Vite", "ReactJs", "ThreeJs", "GSAP"],
    description:
      "This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    modalContent: (
      <>
        <p>
          This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP and Three.js for displaying iPhone 15 Pro models in various colors and shapes.
        </p>
        <p>Platform Features</p>
        <p>
          1. <b><u>Beautiful Subtle Smooth Animations using GSAP:</u></b> Enhanced user experience with seamless and captivating animations powered by GSAP.
        </p>
        <p>
          2. <b><u>3D Model Rendering with Different Colors and Sizes:</u></b> Explore the iPhone 15 Pro from every angle with dynamic 3D rendering, offering various color and size options.
        </p>
        <p>
          3. <b><u>Custom Video Carousel (made with GSAP):</u></b> Engage users with a unique and interactive video carousel developed using GSAP for a personalized browsing experience.
        </p>
        <p>
          4. <b><u>Completely Responsive:</u></b> Consistent access and optimal viewing on any device with a fully responsive design that adapts to different screen sizes.
        </p>
      </>
    ),
  },
  

  {
    title: "SupaBase Assignment",
    imgSrc: "/project-imgs/Supabase.png",
    code: "https://github.com/axnand/SupabaseAssignment",
    projectLink: "https://supabase-assignment.vercel.app/",
    tech: ["ReactJs", "Vite", "Tailwind CSS", "Shadcn", "Acternity"],
    description:
      "This project was an assignment task for an internship interview where I had to redesign the home, pricing and dashboard of Supabase.",
    modalContent: (
      <>
        <p>
          Made this project as an assignment for an interview where I had to implement and redesign the HomePage, PricingPage, and DashboardPage.
        </p>
        <p>
          Added Features like:
          <ul className="list-disc">
            <li>Light and Dark Mode</li>
            <li>Implemented UI libraries like shadcn and Aceternity</li>
            <li>Interactive components</li>
          </ul>
        </p>
      </>
    ),
  },
  {
    title: "SnapsAI",
    imgSrc: "/project-imgs/image4.png",
    code: "https://github.com/axnand/SocioCon",
    projectLink: "https://snaps-ai.vercel.app/",
    tech: ["Microsoft FaceAPI", "ReactJs", "Vite", "NodeJs"],
    description:
      "This project is a personal project for a Hackathon where I came up with SnapsAI. By integrating advanced facial recognition technology, SnapsAI provides a seamless and secure way to handle event photos, ensuring that each attendee can easily find and access their personal images.",
    modalContent: (
      <>
        <p>
          SnapsAI is a cutting-edge solution that enhances the way event photos are managed and accessed. Utilizing Microsoft's FaceAPI, SnapsAI offers
        </p>
        <p>Platform Features</p>
        <p>
          1. <b><u>Face Scanning and Recognition:</u></b> Automatically scans and recognizes faces in event photos uploaded by photographers. This ensures efficient sorting and categorization of images based on individual attendees.
        </p>
        <p>
          2. <b><u>Secure Photo Access:</u></b> Each attendee receives a unique QR code that grants them access to their own photos, enhancing security and simplifying the retrieval process.
        </p>
        <p>
          3. <b><u>Effortless Photo Management:</u></b> Streamlines the process of photo organization and distribution for both photographers and event participants.
        </p>
      </>
    ),
  },
  {
    title: "JetPicture's Website",
    imgSrc: "/project-imgs/image3.png",
    code: "https://github.com/axnand/jetpicture",
    projectLink: "https://jetpicture.vercel.app/",
    tech: ["JavaScript", "HTML5", "BootStrap", "CSS"],
    description:
      "This project was a paid project website for a film production company - JetPictures, showcasing their team and works. It was created while working for a Digital Marketing Company.",
    modalContent: (
      <>
        <a href="https://jetpicturesproduction.com/" style={{ color: "#FF0000" }}>
          <AiOutlineExport /> WordPress Site
        </a>
        <p>
          <b>Jet Pictures</b> was a film and ads production company. Director <b>Arun Jananthana</b> approached Apka Soft Tech for digital marketing services including website creation, so I created a sample website using HTML, CSS, and JavaScript. Later, we decided to use WordPress for the actual site.
        </p>
      </>
    ),
  },
  {
    title: "Mail Template-FRIDAY Intel",
    imgSrc: "/project-imgs/image5.png",
    code: "https://github.com/axnand/Fridayintel-mail-template",
    projectLink: "https://fridayintel-mail-template.vercel.app/",
    tech: ["HTML5", "CSS"],
    description:
      "My very first project which made me switch from cloud to development when we needed a mail template for our company. With merely HTML and CSS, I created this template, and it eventually led me to further opportunities in web development.",
    modalContent: (
      <>
        <p>
          Personal project for a company I was working for—they needed a mail template to send to their client. I started learning development through this project and later helped them with their website.
        </p>
      </>
    ),
  },
  // New Project 1: Ziddle

];

