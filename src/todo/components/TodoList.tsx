import { ListItem } from "./ListItem";
import { useContext } from "react";
import { ContextExample } from "./ContextExample";

// @ts-ignore
export const TodoList = ({ list, onUpdate, onDelete }) => {
  if (!list) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contextValue = useContext(ContextExample);
  // @ts-ignore
  const login = contextValue.login;
  return (
    <div>
      <div>{login}</div>
      {list.map((listItem: any) => (
        <ListItem
          key={listItem.id}
          listItem={listItem}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
