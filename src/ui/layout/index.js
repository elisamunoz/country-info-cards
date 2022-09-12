import classname from "classnames";
import Body from "./Body";
import { Footer, FooterButton } from "./Footer";
import explorer from "../../assets/images/icons/explorer.png";
import styles from "./Layout.module.scss";

const Layout = ({
  children,
  footerButtonText,
  onClickRecycleBin,
  showFooterButton = false,
  isActiveFooterButton = false
}) => {
  const classNames = classname(
    styles.footerButton,
    isActiveFooterButton && styles.footerButtonActive
  );
  return (
    <div className={styles.layout}>
      <Body onClick={onClickRecycleBin}>{children}</Body>
      <Footer>
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
