export const formatImagesForGallery = (images, alt) => {
  return images.map((image) => {
    return {
      src: image.src,
      thumbnail: image.thumb,
      thumbnailWidth: 0,
      thumbnailHeight: 0,
      alt,
    };
  });
};
