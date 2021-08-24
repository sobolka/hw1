import { addTodo, getUserByLogin } from "../requests";
import { useState } from "react";
import { Input } from "./input/Input";
import { Button } from "./button/Button";
import styles from "./addItem.module.css";

// @ts-ignore
export const AddItem = ({ updateDetector, user }) => {
  const [item, setItem] = useState("");
  const handleAdd = async () => {
    await addTodo(item, user.id);
    updateDetector();
    setItem("");
  };

  const handleAddEnter = (e: any) => {
    if (e.key === "Enter") {
      getUserByLogin("sobolka", "123");
      handleAdd();
    }
  };

  const handleInput = (e: any) => {
    setItem(e.target.value);
  };

  return (
    <div className={styles.content}>
      <Input
        type={"text"}
        value={item}
        handleChange={handleInput}
        handleKeyPress={handleAddEnter}
        className={"add"}
      />
      <Button title={"Add"} className={""} handleClick={handleAdd} />
    </div>
  );
};
