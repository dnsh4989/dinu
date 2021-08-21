import styles from "./uiBlocker.module.css";
import { useEffect, useState } from "react";

const UiBlocker = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const list = await getData();
    // setImages(list);
  }, []);

  const start = () => {
    setIsLoading(true);
  };

  const stop = () => {
    setIsLoading(false);
  };

  const res = (
    <div className={styles.blockUiContainer} id="blockUi">
      <img src="loader.gif" />
    </div>
  );

  return res;
};

export default UiBlocker;
