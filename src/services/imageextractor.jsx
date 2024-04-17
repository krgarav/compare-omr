import JSZip from "jszip";

// Function to extract images from a zip file
const extractImagesFromZip = async (zipFile) => {
  const zip = await JSZip.loadAsync(zipFile);
  const images = [];

  // Iterate over each file in the zip
  zip.forEach((relativePath, file) => {
    if (!file.dir && /\.(jpg|jpeg|png|gif)$/i.test(relativePath)) {
      // If the file is not a directory and has a supported image extension
      // Convert the file to a data URL and add it to the images array
      file.async("blob").then((blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          images.push({ src: reader.result });
        };
        reader.readAsDataURL(blob);
      });
    }
  });

  return images;
};

export default extractImagesFromZip;
