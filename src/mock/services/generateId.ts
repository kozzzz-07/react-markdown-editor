import { ArticleId } from "../../models/article";

export const generateId: () => ArticleId = () =>
  new Date().getTime().toString(36);
