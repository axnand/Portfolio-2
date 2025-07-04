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
            <div>
  <Reveal>
    <div>
      <p className={`${styles.aboutText}`}>
        <span>Hi</span> there! I'm Anand Mohan Jha, an engineering student from Delhi, India, specializing in <b>Artificial Intelligence and Data Science</b> (AIDS).
        I enjoy building full-stack web applications and practice <b>Data Structures and Algorithms</b> for placements.
      </p>
      <p className={`${styles.aboutText}`}>
        I'm well-versed in modern web development technologies including <b>Next.js, React, and Node.js</b>. I also have hands-on experience with <b>Cloud Computing and DevOps</b>, working with tools like <b>AWS, Docker, Jenkins, Azure, and CI/CD pipelines</b>.
      </p>
    </div>
  </Reveal>
</div>

          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
