import styles from "./MenuSelector.module.scss";

const MenuSelector = ({ onChange, label, name, children }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <select name={name} id={name} onChange={onChange} defaultValue={"DEFAULT"}>
      <option disabled value="DEFAULT">
        -- select an option --
      </option>
      {children}
    </select>
    {/* <label htmlFor={name}>{label}</label>
    <div className={styles.MenuSelector}>
      <Option value="-- select an option --" />
    </div> */}
  </>
);

const Option = ({ value }) => (
  <option className={styles.option} value={value}>
    {value}
  </option>
);

export { MenuSelector, Option };
