import styles from "./MenuSelector.module.scss";

const MenuSelector = ({ label, name, children }) => (
  <div className={styles.menuSelector}>
    {/* <label htmlFor={name}>{label}</label>
    <select name={name} id={name} onChange={onChange} defaultValue={"DEFAULT"}>
      <option disabled value="DEFAULT">
        select an option
      </option>
      {children}
    </select> */}
    <label htmlFor={name}>{label}</label>
    <div className={styles.MenuSelector}>
      <Option value="select an option" hasMoreOptions={false} />
      <div>{children}</div>
    </div>
  </div>
);

const Option = ({ value, onClick, hasMoreOptions = true }) => (
  <div className={styles.option} value={value} onClick={() => onClick(value)}>
    {value}
    {hasMoreOptions && <MoreOptions />}
  </div>
);

const MoreOptions = () => <div className={styles.moreOptions} />;

export { MenuSelector, Option };
