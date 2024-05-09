const createImageSet = (url, extensions = ["", "@2x", "@3x"]) => {
  const imageSet = extensions
    .map((ext, index) => {
      return `"${url}${ext}.webp" ${index + 1}x`;
    })
    .join(", ");

  return imageSet;
};

export default createImageSet;
