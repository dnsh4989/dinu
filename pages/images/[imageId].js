import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ImageItemPage() {
  const router = useRouter();
  const [name, setName] = useState();

  useEffect(() => {
    setName("check console..");
  }, []);

  console.log(router.query.imageId);

  return <h1>{name}</h1>;
}

export default ImageItemPage;
