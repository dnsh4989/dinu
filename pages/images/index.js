import Head from "next/head";
import { useEffect, useState } from "react";
import ImageList from "../../components/image-list/imageList";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function ImageListPage() {
  useEffect(() => {
    console.log("Hi from list...");
  }, []);

  return (
    <div>
      <Head>
        <title>Dinesh Sanala | Images</title>
        <meta name="keywords" content="dinesh sanala" />
      </Head>
      {/* <Link href="/add-image/">
        <a className={styles.btn}>Add Image</a>
      </Link> */}
      <ImageList />
    </div>
  );
}

export default ImageListPage;
