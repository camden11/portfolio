export const formatImagesForGallery = (images, alt) => {
  return images.map((image) => {
    return {
      src: image,
      alt,
    };
  });
};
