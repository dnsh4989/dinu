import styles from "./imageCard.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const ImageCard = (props) => {
  useEffect(async () => {
    console.log(props.image);
  }, []);

  return (
    <div className={styles.imgCol}>
      <div className={styles.imageBlocker}></div>
      <div className={styles.downloadButton}>SAVE</div>
      <div className={styles.moreIcon}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
      <img className={styles.imgs} src={props.image.url} alt="WallZ" />
    </div>
  );
};

export default ImageCard;
