import { useState, useEffect } from "react";
import classnames from "classnames";
import { playWindowsStartSound } from "../../../functions/helpers";
import startIcon from "../../../assets/images/icons/start.png";
import speakerIcon from "../../../assets/images/icons/speaker.png";
import styles from "./Footer.module.scss";

const Footer = ({ children, startButtonOnClick, isActiveStart }) => (
  <footer className={styles.footer}>
    <FooterButton
      onClick={startButtonOnClick}
      src={startIcon}
      footerButtonText="Search"
      alt="start icon"
      className={isActiveStart && styles.startButtonActive}
    />
    <div className={styles.content}>{children}</div>
    <Clock />
  </footer>
);

const FooterButton = ({ src, footerButtonText, className, onClick }) => (
  <div
    className={classnames(styles.button, className)}
    onClick={onClick}
    role="button"
  >
    <img src={src} alt="window icon" />
    <span className={styles.buttonText}>{footerButtonText}</span>
  </div>
);

const Clock = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className={styles.clockDiv}>
      <img
        onClick={playWindowsStartSound}
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
export { Footer, FooterButton };
