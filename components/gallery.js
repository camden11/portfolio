import React from "react";
import ReactGallery from "react-grid-gallery";
import { Thumbnail } from "components";
import { formatImagesForGallery } from "util/image";

const Gallery = ({ images, alt }) => {
  const formatted = formatImagesForGallery(images, alt);
  return (
    <ReactGallery
      images={formatted}
      thumbnailImageComponent={Thumbnail}
      backdropClosesModal
    />
  );
};

export default Gallery;
