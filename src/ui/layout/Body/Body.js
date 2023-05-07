import { DESKTOP_ICON_INFO } from "../../../desktopIcons";
import DesktopIcon from "../../components/DesktopIcon";
import recycleBin from "../../../assets/images/icons/recycleBin.png";
import styles from "./Body.module.scss";

const Body = ({ children, onClickRecycleBin }) => (
  <div className={styles.body}>
    <div className={styles.content}>{children}</div>
    <div className={styles.desktopIcons}>
      <DesktopIcon
          className={styles.deleteIcon}
          name="Delete query"
          onClick={onClickRecycleBin}
          icon={recycleBin}
          alt="Delete query"
        />
      <div className={styles.infoIcons}>
        {DESKTOP_ICON_INFO.map(icon => (
          <DesktopIcon
            key={icon.name}
            name={icon.name}
            icon={icon.icon}
            link={icon.link}
            alt={icon.alt}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Body;
