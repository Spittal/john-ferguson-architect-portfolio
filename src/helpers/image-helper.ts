export type WorkImage = {
  image: string;
  description: string;
};

export type WorkImageWithSrc = WorkImage & {
  src: string;
};

export function formatImageWithSrc (image: WorkImage) {
  return {
    src: new URL('../assets/images/' + image.image, import.meta.url).href,
    ...image,
  }
}

export function formatImagesWithSrc (images: WorkImage[]) {
  return images.map(image => formatImageWithSrc(image));
}

