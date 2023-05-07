import classname from "classnames";
import styles from "./MenuSelector.module.scss";

const MenuSelector = ({ children, isVisible, className }) => (
  <div
    className={classname(
      styles.menuSelector,
      isVisible && styles.isVisible,
      className
    )}
  >
    <div className={styles.MenuSelector}>
      <div className={styles.moreOptionsWrapper}>{children}</div>
    </div>
  </div>
);

const Option = ({
  value,
  onClick,
  hasMoreOptions = true,
  classNameOption,
  classNameTextOption
}) => (
  <div
    className={classname(styles.option, classNameOption)}
    value={value}
    onClick={() => onClick(value)}
  >
    <span className={classname(classNameTextOption, styles.optionText)}>
      {value}
    </span>
    {hasMoreOptions && <MoreOptions />}
  </div>
);

const MoreOptions = () => <div className={styles.moreOptions} />;

export { MenuSelector, Option };
