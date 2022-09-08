import myGithub from "../../../assets/images/icons/myComputer.png";
import myPortfolio from "../../../assets/images/icons/folder.png";
import myLinkedin from "../../../assets/images/icons/network.png";
import myCV from "../../../assets/images/icons/printer.png";
import myCVPDF from "../../../assets/myCV.pdf";
import DesktopIcon from "../../components/DesktopIcon";
import styles from "./Body.module.scss";

const Body = ({ children }) => (
  <div className={styles.body}>
    <div className={styles.content}>{children}</div>
    <div className={styles.desktopIcons}>
      <DesktopIcon
        icon={myGithub}
        link="https://github.com/elisamunoz"
        name="My Github"
      />
      <DesktopIcon
        icon={myPortfolio}
        link="https://elisamunoz.github.io/eli-portfolio/"
        name="My Portfolio"
      />
      <DesktopIcon
        icon={myLinkedin}
        link="https://www.linkedin.com/feed/"
        name="My Linkedin"
      />
      <DesktopIcon icon={myCV} link={myCVPDF} name="My CV" />
    </div>
  </div>
);

export default Body;
