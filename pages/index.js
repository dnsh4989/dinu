import { useEffect, useState } from "react";
import Nav from "../components/nav";
import ImageListPage from "./images/index";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function HomePage() {
  // const [text, setText] = useState();
  // useEffect(() => {
  //   setText("Me Me Me Me....!");
  // }, []);

  return (
    <>
      <Head>
        <title>Dinesh Sanala | Home</title>
        <meta name="keywords" content="dinesh sanala" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <Link href="/images/">
          <a className={styles.btn}>See Images</a>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
