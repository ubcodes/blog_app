interface NodeData {
  slug: string;
  title: string;
  featuredImage: {
    url: string;
  };
}

export interface Post{
  node: NodeData;
}

