import { useCallback } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { Article, NewArticle } from "../models/article";

const articleState = atom<Article[]>({
  key: "states/articleState",
  default: [],
});

export const useArticleState = () => useRecoilValue(articleState);

export const useArticleStateMutations = () => {
  const [articles, setState] = useRecoilState(articleState);

  const setNewArticle = useCallback(
    (newArticle: NewArticle) => {
      setState([newArticle, ...articles]);
    },
    [articles]
  );

  const updateArticle = useCallback(
    (article: Article) => {
      const orgArticle = articles.find((a) => a.id === article.id);

      const filteredArticles = articles.filter((a) => a.id !== article.id);

      setState([{ ...orgArticle, ...article }, ...filteredArticles]);
    },
    [articles]
  );

  return { setNewArticle, updateArticle };
};
