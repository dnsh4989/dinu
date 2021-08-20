import Head from "next/head";
import { useEffect, useState } from "react";
import ImageList from "../../components/image-list/imageList";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Axios from "axios";

function LoginPage() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Hi from list...");
  }, []);

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "https://dinu-node.herokuapp.com/signin/",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <div id="login-box" className="auth">
        <div className="left">
          <h1>Sign In</h1>

          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <input
            type="submit"
            name="signup_submit"
            value="Sign in"
            onClick={login}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
