import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { MdDevicesOther } from "react-icons/md"
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
  <Reveal>
    <div className={styles.statColumn}>
      <h4>
        <AiFillCode size="2.4rem" color="var(--brand)" />
        <span>Tech Stack</span>
      </h4>
      <div className={styles.statGrid}>
        <span className="chip">Next.js</span>
        <span className="chip">React.js</span>
        <span className="chip">Node.js</span>
        <span className="chip">Express.js</span>
        <span className="chip">TypeScript</span>
        <span className="chip">JavaScript</span>
        <span className="chip">Python</span>
        <span className="chip">Java</span>
        <span className="chip">MongoDB</span>
        <span className="chip">MySQL</span>
        <span className="chip">Three.js</span>
        <span className="chip">Tailwind CSS</span>
        <span className="chip">CSS3</span>
      </div>
    </div>
  </Reveal>

  <Reveal>
    <div className={styles.statColumn}>
      <h4>
        <MdDevicesOther size="2.4rem" color="var(--brand)" />
        <span>Tools & Platforms</span>
      </h4>
      <div className={styles.statGrid}>
        <span className="chip">AWS</span>
        <span className="chip">Azure</span>
        <span className="chip">Docker</span>
        <span className="chip">Git</span>
        <span className="chip">GitHub</span>
        <span className="chip">Vercel</span>
        <span className="chip">Postman</span>
        <span className="chip">Figma</span>
        <span className="chip">GSAP</span>
        <span className="chip">Linux</span>
        <span className="chip">MS Office</span>
      </div>
    </div>
  </Reveal>
</div>

  );
};
