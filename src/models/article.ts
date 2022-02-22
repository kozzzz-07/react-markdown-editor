export type PostId = string;

export type Post = {
  id?: PostId;
  title: string;
  createdAt: string;
  updatedAt: string;
  detail: string;
  detailHtml: string;
};

export type Posted = {
  id: PostId;
  title: string;
  excerpt: string;
  createdAt: string;
  updatedAt?: string;
};
