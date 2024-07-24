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
            <span>My Arsenal </span>
          </h4>
          <div className={styles.statGrid}>

            
            <span className="chip">Next.js</span>
            <span className="chip">React.js</span>
            <span className="chip">JavaScript</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Java</span>
            <span className="chip">Node.js</span>
            <span className="chip">Python</span>
            <span className="chip">Three.js</span>
            <span className="chip">Mysql</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">CSS3</span>
            <span className="chip">Tailwind</span>
            
            

          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <MdDevicesOther size="2.4rem" color="var(--brand)" />
            <span>Others</span>
          </h4>
          <div className={styles.statGrid}>
          <span className="chip">AWS</span>
          <span className="chip">Azure</span>
          <span className="chip">GSAP</span>
            <span className="chip">Linux</span>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">Vercel</span>
            
            <span className="chip">Postman</span>
            <span className="chip">Figma</span>
            <span className="chip">Ms Office</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
