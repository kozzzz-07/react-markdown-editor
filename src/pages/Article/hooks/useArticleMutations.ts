import { useCallback } from "react";
import { Article, ArticleId, NewArticle } from "../../../models/article";
import { useArticleStateMutations } from "../../../states/articleState";

type UsePostProps = {
  id: ArticleId;
  title: Article["title"];
  markdown: Article["markdown"];
};

export const useArticleMutations = () => {
  const { setNewArticle, updateArticle } = useArticleStateMutations();
  // setNewArticle or idに依存させる？ usePostの引数にId
  const post = useCallback(
    (props: UsePostProps) => {
      const { id, title, markdown } = props;
      const newArticle: NewArticle = {
        id,
        createdAt: new Date().toLocaleTimeString(),
        title,
        markdown,
      };

      setNewArticle(newArticle);
    },
    [setNewArticle]
  );

  const update = useCallback(
    (props: UsePostProps) => {
      const { id, title, markdown } = props;
      const article: Article = {
        id,
        updatedAt: new Date().toLocaleTimeString(),
        title,
        markdown,
      };

      updateArticle(article);
    },
    [updateArticle]
  );

  return { post, update };
};
