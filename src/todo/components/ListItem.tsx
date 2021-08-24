import { deleteTodo, updateTodo } from "../requests";
import { useState } from "react";
import { Input } from "./input/Input";
import { Button } from "./button/Button";
import styles from "./listItem.module.css";

// @ts-ignore
export const ListItem = (props) => {
  const [item, setItem] = useState(props.listItem.todo);
  const [checked, setChecked] = useState(props.listItem.inactive);

  const handleEdit = async () => {
    await updateTodo(
      props.listItem.id,
      item,
      props.listItem.inactive,
      props.listItem.userId
    );
    props.onUpdate();
  };

  const handleDelete = async () => {
    await deleteTodo(props.listItem.id);
    props.onDelete();
  };

  // @ts-ignore
  const eventValue = (event) => {
    setItem(event.target.value);
  };

  // @ts-ignore
  const eventChecked = (event) => {
    setChecked(event.target.checked);
    handleEdit();
  };

  return (
    <div className={styles.content}>
      <Input
        type={"checkbox"}
        checked={checked}
        handleChange={eventChecked}
        className={""}
      />
      <Input
        type={"text"}
        value={item}
        handleChange={eventValue}
        className={checked ? "list-checked" : "list"}
      />
      <Button title={"Update"} className={""} handleClick={handleEdit} />
      <Button title={"Delete"} className={""} handleClick={handleDelete} />
    </div>
  );
};
