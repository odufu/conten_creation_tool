"use client";

import { useImageEditor } from "../hooks/useImageEditor";
import styles from "../styles/ImageEditor.module.css";

const ImageEditor = ({ imageUrl }: { imageUrl: string }) => {
  // Use the custom hook to manage state and local storage operations
  const { settings, loading, updateSettings, buildImageUrl } = useImageEditor();

  // Function to handle image download
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = buildImageUrl(imageUrl);
    link.download = "edited-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show a loading spinner while the settings are being loaded
  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  // Render the image editor UI

  return (
    <div className={styles.container}>
      <div>
        <label className={styles.label}>Width:</label>
        <input
          type="number"
          className={styles.inputNumber}
          value={settings.width}
          onChange={(e) => updateSettings({ width: Number(e.target.value) })}
        />
      </div>
      <div>
        <label className={styles.label}>Height:</label>
        <input
          type="number"
          className={styles.inputNumber}
          value={settings.height}
          onChange={(e) => updateSettings({ height: Number(e.target.value) })}
        />
      </div>
      <div>
        <label className={styles.label}>Greyscale:</label>
        <input
          type="checkbox"
          className={styles.inputCheckbox}
          checked={settings.greyscale}
          onChange={(e) => updateSettings({ greyscale: e.target.checked })}
        />
      </div>
      <div>
        <label className={styles.label}>Blur:</label>
        <input
          type="range"
          min="0"
          max="10"
          className={styles.inputRange}
          value={settings.blur}
          onChange={(e) => updateSettings({ blur: Number(e.target.value) })}
        />
      </div>
      <div>
        <img
          src={buildImageUrl(imageUrl)}
          className={styles.imgPreview}
          alt="Dimension Value too Larg: Reduce It"
        />
      </div>
      <button className={styles.button} onClick={downloadImage}>
        Download
      </button>
    </div>
  );
};

export default ImageEditor;
