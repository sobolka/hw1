import styles from "./button.module.css";
// @ts-ignore
export const Button = ({ title, handleClick = () => {}, className }) => (
  <button className={styles[className]} onClick={handleClick}>
    {title}
  </button>
);
