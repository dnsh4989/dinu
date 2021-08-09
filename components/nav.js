import { useEffect, useState } from "react";

function Nav() {
  const [text, setText] = useState();
  useEffect(() => {
    setText("this is Nav.. ... .!");
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default Nav;
