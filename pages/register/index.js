import Head from "next/head";
import { useEffect, useState } from "react";
import ImageList from "../../components/image-list/imageList";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Utils from "../../lib/utils";
import Axios from "axios";

function RegisterPage() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Hi from list...");
  }, []);

  const register = () => {
    Utils.setBlockUi(true);
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "https://dinu-node.herokuapp.com/register/",
    }).then(
      (res) => {
        Utils.setBlockUi(false);
        console.log(res);
      },
      (err) => {
        Utils.setBlockUi(false);
        console.log(err);
      }
    );
  };

  return (
    <div>
      <div id="login-box" className="auth">
        <div className="left">
          <h1>Sign up</h1>

          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />

          <input
            type="submit"
            name="signup_submit"
            value="Sign me up"
            onClick={register}
          />
        </div>

        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button className="social-signin facebook">
            Log in with facebook
          </button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>
    </div>
  );
}

export default RegisterPage;
