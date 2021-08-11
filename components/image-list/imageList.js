import styles from "./imageList.module.css";

export async function getStaticProps(context) {
  const res = await fetch("https://dinu-node.herokuapp.com/images/");
  const data = await res.json();

  console.log(data);

  return {
    props: { images: data },
  };
}

// const testData = async () => {
//   const res = await fetch("https://dinu-node.herokuapp.com/images/");
//   const data = await res.json();

//   console.log(data);

//   return data;
// };

const ImageList = ({ images }) => {
  let res;
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
    res = <div className={styles.imageContainer}></div>;
  }
  return res;
};

export default ImageList;
