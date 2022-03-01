export type ArticleId = string;

export type Article = {
  id?: ArticleId;
  title?: string;
  excerpt?: string;
  detail?: string;
  createdAt?: string;
  updatedAt?: string;
  markdown?: string;
};

// 整理したい
export type NewArticle = {
  id: ArticleId;
  title?: string;
  excerpt?: string;
  detail?: string;
  createdAt: string;
  updatedAt?: string;
  markdown: string;
};

// markdown だけのモデルで用意するのも良さそう
// export type PostedMarkdown = {
//   id: PostId;
//   markdown: string;
// };
