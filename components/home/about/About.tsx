import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
            <span>Hi</span> there! My name is Anand Mohan Jha, and I&apos;m a Delhi, India based engg student specialisng in AIDS (Artificial Intelligence and Data Science)
            
            And i make websites for fun.
            <br />
            Well versed with modern WebDev technologies like Nextjs, React, Nodejs.  Additionally, I’m skilled in Cloud Computing and DevOps, with experience in tools such as Docker, Jenkins, AWS, Azure, and CI/CD processes.

              
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
