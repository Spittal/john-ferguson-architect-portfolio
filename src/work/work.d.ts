type WorkItem = {
  name: string;
  slug: string;
  images: import('../helpers/image-helper').WorkImage[];
  description: string;
};

declare module "*.yml" {
  const workItems: WorkItem[];
  export default workItems;
}
