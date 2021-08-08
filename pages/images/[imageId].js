import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ImageItemPage() {
  const router = useRouter();
  const [nameFromUrl, setNameFromUrl] = useState();

  useEffect(() => {
    setNameFromUrl(router.query.imageId);
  }, []);

  return <h1>{nameFromUrl}</h1>;
}

export default ImageItemPage;
