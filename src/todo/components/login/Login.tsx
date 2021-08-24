import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { useState } from "react";
import { getUserByLogin } from "../../requests";
import styles from "./login.module.css";

// @ts-ignore
export const Login = ({ setUser }) => {
  const [login, setValueLogin] = useState("");
  const [password, setValuePassword] = useState("");

  const handleLogin = (e: any) => {
    setValueLogin(e.target.value);
  };
  const handlePassword = (e: any) => {
    setValuePassword(e.target.value);
  };

  const handleAuth = async () => {
    const userList = await getUserByLogin(login, password);
    if (userList.length > 0) {
      setUser(userList[0]);
    }
  };
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.content}>
          <Input
            type={"text"}
            handleChange={handleLogin}
            className={"loginInput"}
            value={login}
          />
          <Input
            type={"password"}
            handleChange={handlePassword}
            className={"loginInput"}
            value={password}
          />
          <Button
            title={"Login"}
            handleClick={handleAuth}
            className={"loginButton"}
          />
        </div>
      </div>
    </>
  );
};
