import classname from "classnames";
import Body from "./Body";
import { Footer, FooterButton } from "./Footer";
import explorer from "../../assets/images/icons/explorer.png";
import styles from "./Layout.module.scss";

const Layout = ({
  children,
  buttonText,
  onClick,
  showButton = false,
  isActive = false
}) => {
  const classNames = classname(
    styles.footerButton,
    isActive && styles.footerButtonActive
  );
  return (
    <div className={styles.layout}>
      <Body onClick={onClick}>{children}</Body>
      <Footer>
        <FooterButton
          src={explorer}
          buttonText="Find a country"
          className={classNames}
        />
        {showButton && (
          <FooterButton
            src={explorer}
            buttonText={buttonText}
            className={classNames}
          />
        )}
      </Footer>
    </div>
  );
};

export default Layout;
