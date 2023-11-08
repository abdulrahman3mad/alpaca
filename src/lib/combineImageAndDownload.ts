const combineImagesAndDownload = (): void => {
  const images = document.getElementsByTagName('img');

  // Create a canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d')!;

  // Set canvas dimensions based on the total width and height of images
  canvas.width = 720
  canvas.height = 709;

  // Draw each image onto the canvas
  Array.from(images).forEach(img => {
    if(img.className === "logo") return;
    context?.drawImage(img, 0, 0)
  });

  // Convert the canvas content to a data URL
  const dataURL = canvas.toDataURL('image/png');

  // Create a link element and trigger the download
  const downloadLink = document.createElement('a');
  downloadLink.href = dataURL;
  downloadLink.download = 'combined_image.png';
  downloadLink.click();
}


export default combineImagesAndDownload;