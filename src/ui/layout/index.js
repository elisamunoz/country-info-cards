import classname from "classnames";
import Body from "./Body";
import { Footer, FooterButton } from "./Footer";
import explorer from "../../assets/images/icons/explorer.png";
import styles from "./Layout.module.scss";

const Layout = ({
  children,
  footerButtonText,
  onClickRecycleBin,
  startButtonOnClick,
  showFooterButton = false,
  footerButtonActive = false,
  isActiveStart = false
}) => {
  const classNames = classname(
    styles.footerButton,
    footerButtonActive && styles.footerButtonActive
  );
  return (
    <div className={styles.layout}>
      <Body onClick={onClickRecycleBin}>{children}</Body>
      <Footer
        isActiveStart={isActiveStart}
        startButtonOnClick={startButtonOnClick}
      >
        <FooterButton
          src={explorer}
          footerButtonText="Find a country"
          className={classNames}
        />
        {showFooterButton && (
          <FooterButton
            src={explorer}
            footerButtonText={footerButtonText}
            className={classNames}
          />
        )}
      </Footer>
    </div>
  );
};

export default Layout;
