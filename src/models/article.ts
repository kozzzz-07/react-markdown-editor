export type PostId = string;

export type Post = {
  id?: PostId;
  title: string;
  createdAt: string;
  updatedAt: string;
  // detail: string;
  markdown: string;
};

export type Posted = {
  id: PostId;
  title: string;
  excerpt: string;
  createdAt: string;
  updatedAt?: string;
};
