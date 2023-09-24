type WorkImage = {
  image: string;
  description: string;
};

type WorkItem = {
  name: string;
  slug: string;
  images: WorkImage[];
  cover_image: WorkImage;
  description: string;
};

declare module "*.yml" {
  const workItems: WorkItem[];
  export default workItems;
}
