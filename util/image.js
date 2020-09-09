export const formatImagesForGallery = (images, alt) => {
  return images.map((image) => {
    return {
      src: image,
      thumbnail: "",
      thumbnailWidth: 0,
      thumbnailHeight: 0,
      alt,
    };
  });
};
