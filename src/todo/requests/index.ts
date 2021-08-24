const URL = "http://localhost:3033/list";

const URL_USER = "http://localhost:3033/user";

export const addTodo = async (todo: string, userId: number) =>
  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo, userId, inactive: false }),
  });

export const updateTodo = async (
  id: number,
  todo: string,
  inactive: boolean,
  userId: number
) => {
  await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo, inactive, userId }),
  });
};

export const deleteTodo = async (id: number) => {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

export const getTodos = async () => {
  const response = await fetch(URL);
  return await response.json();
};

export const getTodosByUser = async (userId?: number) => {
  const response = await fetch(`${URL}/?userId=${userId}`);
  return await response.json();
};

export const getUserByLogin = async (login: string, password: string) => {
  const response = await fetch(
    `${URL_USER}/?login=${login}&password=${password}`
  );
  return await response.json();
};
