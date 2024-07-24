import { useState, useRef } from "react";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OutlineButton } from "@/components/buttons/OutlineButton";

export const Contact = () => {
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Service ID:", process.env.NEXT_PUBLIC_SERVICE_ID);
    console.log("Template ID:", process.env.NEXT_PUBLIC_TEMPLATE_ID);
    console.log("Public Key:", process.env.NEXT_PUBLIC_PUBLIC_KEY);


    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current!,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ).then((result) => {
      console.log('Success:', result.text); // Log success response
      toast.success('Message sent!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setMessage('');
      form.current!.reset();
    }, (error) => {
      console.error('Error:', error.text); // Log error response
      toast.error('Something went wrong', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <ToastContainer />
      <section className="section-wrapper" id="contact">
        <div className={styles.contactWrapper}>
          <Reveal width="100%">
            <h4 className={styles.contactTitle}>
              Contact<span>.</span>
            </h4>
          </Reveal>
          <Reveal width="100%">
            <p className={styles.contactCopy}>
              Shoot me an email if you want to connect! You can also find me on{" "}
              <Link
                href="https://www.linkedin.com/in/anand-mohan-jha-788507256/"
                target="_blank"
                rel="nofollow"
              >
                LinkedIn
              </Link>{" "}
              or{" "}
              <Link href="https://www.instagram.com/aanaxnd/" target="_blank" rel="nofollow">
                Instagram
              </Link>{" "}
              if that&apos;s more your speed.
            </p>
          </Reveal>
          <Reveal width="100%">
            <Link href="mailto:anandmohanjha241@gmail.com">
              <div className={styles.contactEmail}>
                <AiFillMail size="2.4rem" />
                <span>anandmohanjha241@gmail.com</span>
              </div>
            </Link>
          </Reveal>
          <Reveal width="100%">
            <form autoComplete="false" className={styles.contantForm} ref={form} onSubmit={sendEmail}>
              <div className={styles.inputBox}>
                <input type="text" placeholder="Full Name" autoComplete="false" name="from_name" required />
                <input type="email" placeholder="Email Address" autoComplete="false" name="reply_to" required />
              </div>
              <textarea placeholder="Your Message"
                autoComplete="false"
                required
                name="message"
                value={message}
                onChange={handleMessageChange}></textarea>
                <br /><br />
              <OutlineButton>
                Send Message
              </OutlineButton>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};
