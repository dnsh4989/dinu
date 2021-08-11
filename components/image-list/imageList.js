import styles from "./imageList.module.css";
import { useEffect, useState } from "react";

// export async function getStaticProps() {
//   const res = await fetch("https://dinu-node.herokuapp.com/images/");
//   const data = await res.json();

//   return {
//     props: { images: data },
//   };
// }

const ImageList = () => {
  let res;
  const [images, setImages] = useState();

  const getData = async () => {
    const res = await fetch("https://dinu-node.herokuapp.com/images/");
    const data = await res.json();

    return data;
  };

  useEffect(async () => {
    const list = await getData();
    setImages(list);
  }, []);

  console.log(images);

  if (images) {
    res = (
      <div className={styles.imageContainer}>
        {images.map((item) => {
          return (
            <div key={item.id} className={styles.imgCol}>
              <img className={styles.imgs} src={item.url} alt="WallZ" />
            </div>
          );
        })}
      </div>
    );
  } else {
    res = <div className={styles.imageContainer}>No Images Found...</div>;
  }
  return res;
};

export default ImageList;
