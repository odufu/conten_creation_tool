import { useState, useEffect } from "react";


// Define the shape of the image editor settings

interface ImageEditorSettings {
  width: number;
  height: number;
  greyscale: boolean;
  blur: number;
}



// Default settings for the image editor

const defaultSettings: ImageEditorSettings = {
  width: 500,
  height: 500,
  greyscale: false,
  blur: 0,
};


// Custom hook to manage image editor state and local storage operations

export const useImageEditor = () => {
  const [settings, setSettings] =
    useState<ImageEditorSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);

    
    
 // Load settings from local storage on component mount
  useEffect(() => {
    const savedSettings = JSON.parse(
      localStorage.getItem("imageEditorSettings") || "{}"
    );
    setSettings({ ...defaultSettings, ...savedSettings });
    setLoading(false);
  }, []);


    // Save settings to local storage whenever they change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("imageEditorSettings", JSON.stringify(settings));
    }
  }, [settings, loading]);

    
 // Function to update settings
  const updateSettings = (newSettings: Partial<ImageEditorSettings>) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
  };

 // Function to build the image URL based on the current settings
  const buildImageUrl = (imageUrl: string) => {
    let url = `${imageUrl}/${settings.width}/${settings.height}`;
    if (!settings.greyscale && settings.blur > 0)
      url += `?blur=${settings.blur}`;
    if (settings.greyscale) url += "?grayscale";
    if (settings.greyscale && settings.blur > 0) url += "&grayscale";
    if (settings.blur > 0) url += `&blur=${settings.blur}`;
    return url;
  };

  return { settings, loading, updateSettings, buildImageUrl };
};
