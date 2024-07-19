import { useState, useEffect } from "react";
import { getImages } from "../services/imageService";

// Define the shape of an Image object
interface Image {
  id: string;
  download_url: string;
  author: string;
}

// Custom hook to manage image list state and pagination
export const useImageList = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch images from the API whenever the page number changes
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const images = await getImages(page, 10);
      setImages(images);
      setLoading(false);
    };
    fetchImages();
  }, [page]);

  // Function to go to the next page
  const nextPage = () => setPage((prevPage) => prevPage + 1);

  // Function to go to the previous page
  const prevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return { images, page, loading, nextPage, prevPage };
};
