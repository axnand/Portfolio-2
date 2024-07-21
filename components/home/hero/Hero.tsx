import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { OutlineButton } from "../../buttons/OutlineButton";
import ReactTypingEffect from 'react-typing-effect';
export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Anand<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m  <span><ReactTypingEffect
              text={["MERN Stack Developer.","Next.js Developer.", "AI and Data Science enthusiast."]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
          "Website creation is no longer just plain old text on your screen"💻
            <br />
            Let&apos;s connect and bring your vision to life!
          </p>
        </Reveal>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
  <Reveal>
    <OutlineButton
      onClick={() => document.getElementById("contact")?.scrollIntoView()}
      className="flex-1"
    >
      Contact me
    </OutlineButton>
  </Reveal>
  <Reveal>
    <OutlineButton
      onClick={() => document.getElementById("contact")?.scrollIntoView()}
      className="flex-1"
    >
      View Resume
    </OutlineButton>
  </Reveal>
</div>
      </div>
      <DotGrid />
    </section>
  );
};
