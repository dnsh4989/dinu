import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/AddImage.module.css";

function AddImagePage() {
  const [id, setId] = useState("");
  const [tags, setTags] = useState([]);
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log("Hi from Add Page...");
  }, []);

  const addImage = (newImage) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newImage),
    };
    fetch("https://dinu-node.herokuapp.com/image/", requestOptions)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newImage = {
      id,
      tags,
      date,
      url,
    };

    console.log(newImage);

    addImage(newImage);
  };

  return (
    <div>
      <Head>
        <title>Dinesh Sanala | Add Image</title>
        <meta name="keywords" content="dinesh sanala" />
      </Head>

      <h3>Add Image</h3>

      <div className={styles.container}>
        <form>
          <label htmlFor="fname">Id No.</label>
          <input
            type="text"
            className={styles.inptText}
            onChange={(e) => setId(e.target.value)}
            value={id}
            id="fname"
            name="firstname"
            placeholder="Enter id.."
          />

          <label htmlFor="lname">Tags</label>
          <input
            type="text"
            className={styles.inptText}
            id="lname"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            name="lastname"
            placeholder="Enter tags.."
          />

          <label htmlFor="lname">Date</label>
          <input
            type="text"
            className={styles.inptText}
            id="dateinpt"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            name="lastname"
            placeholder="Enter Date.."
          />

          <label htmlFor="subject">URL</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Paste url.."
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            className={styles.inptText}
            style={{ height: "200px" }}
          ></textarea>

          {/* <input
            type="file"
            className={styles.inptText}
            id="limage"
            name="lastname"
            placeholder="upload image"
          /> */}

          <input
            className={styles.submitBtn}
            onClick={submitHandler}
            type="submit"
            value="Upload"
          />
        </form>
      </div>
    </div>
  );
}

export default AddImagePage;
