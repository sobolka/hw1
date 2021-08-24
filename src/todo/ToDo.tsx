import { useEffect, useState } from "react";
import { getTodosByUser } from "./requests";
import { TodoList } from "./components/TodoList";
import { AddItem } from "./components/AddItem";
import { Login } from "./components/login/Login";
import { ContextExample } from "./components/ContextExample";

export const ToDo = () => {
  const [list, setList] = useState([]);
  const [detector, setDetector] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateList = async () => {
      // @ts-ignore
      const todos = user && (await getTodosByUser(user.id));
      // @ts-ignore
      setList(todos);
    };

    updateList();
  }, [detector, user]);

  const updateDetector = () => {
    setDetector({});
  };

  return (
    <>
      {user === null ? (
        <Login setUser={setUser} />
      ) : (
        <>
          {" "}
          <ContextExample.Provider value={user}>
            <AddItem updateDetector={updateDetector} user={user} />
            <TodoList
              list={list}
              onUpdate={updateDetector}
              onDelete={updateDetector}
            />
          </ContextExample.Provider>
        </>
      )}
    </>
  );
};
