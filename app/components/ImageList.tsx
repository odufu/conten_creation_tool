"use client";

import { useImageList } from "../hooks/useImageList";
import { useRouter } from "next/navigation";
import styles from "../styles/ImageList.module.css";

const ImageList = () => {
  // Use the custom hook to manage image list state and pagination
  const { images, page, loading, nextPage, prevPage } = useImageList();
  const router = useRouter();

  // Show a loading spinner while images are being fetched
  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  // Render the image grid and pagination buttons
  return (
    <div>
      <div className={styles.pagination}>
        <button
          className={styles.button}
          onClick={prevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button className={styles.button} onClick={nextPage}>
          Next
        </button>
      </div>
      <div className={styles.imageGrid}>
        {images.map((image) => (
          <div
            key={image.id}
            className={styles.imageItem}
            onClick={() => router.push(`/edit/${image.id}`)}
          >
            <img src={image.download_url} alt={image.author} />
            <p>{image.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
