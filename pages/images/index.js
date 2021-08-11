import Head from "next/head";
import { useEffect, useState } from "react";
import ImageList from "../../components/image-list/imageList";

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
      <ImageList />
    </div>
  );
}

export default ImageListPage;
