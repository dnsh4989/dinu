import { useEffect, useState } from "react";
import Nav from "../components/nav";
import ImageListPage from "./images/index";

function HomePage() {
  const [text, setText] = useState();
  useEffect(() => {
    setText("Me Me Me Me....!");
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      <Nav />
      <ImageListPage />
    </div>
  );
}

export default HomePage;
