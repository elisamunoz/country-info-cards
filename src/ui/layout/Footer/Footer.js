import { useState, useEffect } from "react";
import windows95Sound from "../../../assets/Windows-95-startup-sound.wav";
import speakerIcon from "../../../assets/images/icons/speaker.png";
import styles from "./Footer.module.scss";

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    <div className={styles.content}>{children}</div>
    <Clock />
  </footer>
);

const Button = () => <button className={styles.button}></button>;

const Clock = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  const playSound = sound => new Audio(sound).play();

  return (
    <div className={styles.clockDiv}>
      <img
        onClick={() => playSound(windows95Sound)}
        alt="clock icon"
        src={speakerIcon}
        className={styles.icon}
      />
      <span className={styles.clock}>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        })}
      </span>
    </div>
  );
};
export default Footer;
