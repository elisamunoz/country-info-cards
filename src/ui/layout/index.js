import Body from "./Body";
import { Footer, FooterButton } from "./Footer";
import computerIcon from "../../assets/images/icons/myPC.png";
// import FooterButtonBG from "../../assets/images/footerButtonBackground.png";
import styles from "./Layout.module.scss";

const Layout = ({ children, buttonText }) => (
  <div className={styles.layout}>
    <Body>{children}</Body>
    <Footer>
      <FooterButton
        src={computerIcon}
        buttonText={buttonText}
        buttonText="Trinidad and Tobago"
        className={styles.footerButtonActive}
      />
    </Footer>
  </div>
);

export default Layout;
