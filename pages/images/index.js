import { useEffect, useState } from "react";
import ImageList from "../../components/image-list/imageList";

function ImageListPage() {
  useEffect(() => {
    console.log("Hi from list...");
  }, []);

  return (
    <div>
      <ImageList />
    </div>
  );
}

export default ImageListPage;
