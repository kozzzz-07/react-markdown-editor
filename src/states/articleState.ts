import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { Article, NewArticle } from "../models/article";

const articleState = atom<Article[]>({
  key: "states/articleState",
  default: [],
});

export const useArticleState = () => {
  return useRecoilValue(articleState);
};

export const useArticleStateMutations = () => {
  const setState = useSetRecoilState(articleState);

  const setNewArticle = useCallback(
    (newArticle: NewArticle) => {
      const articles = useArticleState();
      setState([newArticle, ...articles]);
    },
    [setState]
  );

  const updateArticle = useCallback(
    (article: Article) => {
      const articles = useArticleState();
      setState([article, ...articles]);
    },
    [setState]
  );

  return { setNewArticle };
};
