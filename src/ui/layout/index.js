import Body from "./Body";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Body>{children}</Body>
    <Footer>olakase</Footer>
  </div>
);

export default Layout;
