import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <span>
        <a
          className={styles.text}
          href="https://github.com/elisamunoz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </span>
      <span>
        <a
          className={styles.text}
          href="https://elisamunoz.github.io/eli-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
