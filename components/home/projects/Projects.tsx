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
    title: "SupaBase Assignment",
    imgSrc: "/project-imgs/supabase.png",
    code: "https://github.com/axnand/SupabaseAssignment",
    projectLink: "https://supabase-assignment.vercel.app/",
    tech: [ "ReactJs", "Vite",  "Tailwind CSS", "Shadcn", "Acternity"],
    description:
      "This project was a assignment task for an internship interview where i had to redisgn the home, pricing and dashboard of Supabase",
      modalContent: (
      <>
        <p>
        Made this project as an assignment for an interview where i had to implement and rededign the HomePage, PricingPage, DashboardPage
        </p>
       <p>
        Added Features like:
        <ul className="list-disc">
          <li>Light and Dark Mode</li>
          <li>Implented Ui libraries like shadcn and Aceternity</li>
          <li>Interactive components</li>
        </ul>
       </p>
      </>
    ),
  },


  {
    title: "Iphone Website",
    imgSrc: "/project-imgs/iphone.png",
    code: "https://github.com/axnand/myiphone",
    projectLink: "https://myiphone-alpha.vercel.app/",
    tech: ["Vite", "ReactJs",  "ThreeJs" ,'GSAP'],
    description:
      "This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    modalContent: (
      <>
       <p>
       This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP and Three.js for displaying iPhone 15 Pro models in various colors and shapes.</p>
        <p>
        Platform Features</p>
        <p>
1. <b><u >Beautiful Subtle Smooth Animations using GSAP:</u></b> Enhanced user experience with seamless and captivating animations powered by GSAP.</p>


<p>2. <b><u> 3D Model Rendering with Different Colors and Sizes:</u></b> Explore the iPhone 15 Pro from every angle with dynamic 3D rendering, offering various color and size options.</p>

   
<p>3. <b><u>Custom Video Carousel (made with GSAP):</u></b>
Engage users with a unique and interactive video carousel developed using GSAP for a personalized browsing experience.
        </p>
        <p>4. <b><u>Completely Responsive:</u></b>
        Consistent access and optimal viewing on any device with a fully responsive design that adapts to different screen sizes.
        </p>

      </>
    ),
  },

  {
    title: "SnapsAI",
    imgSrc: "/project-imgs/image4.png",
    code: "https://github.com/axnand/SocioCon",
    projectLink: "https://snaps-ai.vercel.app/",
    tech: ["Microsoft FaceAPI", "ReactJs",  "Vite","NodeJs"],
    description:
      "This project is a Personal project for a Hackathon where I came with SnapsAI -By integrating advanced facial recognition technology, SnapsAI provides a seamless and secure way to handle event photos, ensuring that each attendee can easily find and access their personal images.",
      modalContent: (
        <>
        <p>
        SnapsAI is a cutting-edge solution that enhances the way event photos are managed and accessed. Utilizing Microsoft's FaceAPI, SnapsAI offers </p>
         <p>Platform Features</p>
         <p>
 1. <b><u >Face Scanning and Recognition:</u></b> Automatically scans and recognizes faces in event photos uploaded by photographers. This ensures efficient sorting and categorization of images based on individual attendees.</p>
 
 
 <p>2. <b><u> Secure Photo Access:</u></b> Each attendee receives a unique QR code that grants them access to their own photos. This approach not only enhances security by restricting photo access to rightful owners but also simplifies the retrieval process for attendees.</p>
 
    
 <p>3. <b><u>Effortless Photo Management: </u></b>
 Streamlines the process of photo organization and distribution, making it easier for both photographers and event participants to manage and enjoy their photos.
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
      "This project was a paid project Website for a film production comany -JetPictures showcasing their team and works, given to me while working for a Digital Marketing Company.",
      modalContent: (
      <>
      <a href="https://jetpicturesproduction.com/" style={{color:"#FF0000"}}><AiOutlineExport />WordPress Site</a>
        <p><b>Jet Pictures</b> was a Film and Ads Production and making company. Director <b>Arun Jananthana</b> came to Apka Soft Tech for his Digital Marketing including Website creation so i made a sample Website according to his needs with HTML, CSS and Javascript but later we decided to use WordPress for developing the site</p>
        <br></br>
        
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
      "My very first project which made  me switch from cloud to development when we needed a mail template for our company, with merely html and css I created this and now here I am",
      modalContent: (
      <>
        <p>
        Personal Project for a company I was working for, they needed a mail template to send to their client so i started learning development and made this for them and after that helped them making their website and learn a lot.
        </p>
       
      </>
    ),
  },

];
