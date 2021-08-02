import { useState } from "react";
import { ClickerComponent } from "./ClickerComponent";
import styles from "../style.module.css";

export const CounterGroupComponent = () => {
  const initialCount = 0;
  const [firstCount, setFirstCount] = useState(initialCount);
  const [secondCount, setSecondCount] = useState(initialCount);
  return (
    <div className={styles.clickerLine}>
      <ClickerComponent
        initialCount={initialCount}
        count={firstCount}
        setCount={setFirstCount}
      />
      <ClickerComponent
        initialCount={initialCount}
        count={secondCount}
        setCount={setSecondCount}
      />
    </div>
  );
};
