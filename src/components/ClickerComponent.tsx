import { Button } from "./ButtonComponent";
import styles from "../style.module.css";

// @ts-ignore
export const ClickerComponent = (props) => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.counter}>{props.count}</div>
      <div className={styles.toolbar}>
        <Button
          title="+"
          className={styles.buttonPlus}
          handleClick={() => props.setCount(props.count + 1)}
        />
        <Button
          title="()"
          className={styles.buttonRefresh}
          handleClick={() => props.setCount(props.initialCount)}
        />
        <Button
          title="-"
          className={styles.buttonMinus}
          handleClick={() => props.setCount(props.count - 1)}
        />
      </div>
    </div>
  );
};
