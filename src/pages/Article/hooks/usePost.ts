import { useCallback } from "react";
import { Article, ArticleId, NewArticle } from "../../../models/article";
import { useArticleStateMutations } from "../../../states/articleState";

type UsePostProps = {
  id: ArticleId;
  title: Article["title"];
  markdown: Article["markdown"];
};

export const usePost = () => {
  // setNewArticle or idに依存させる？ usePostの引数にId
  const post = useCallback((props: UsePostProps) => {
    const { id, title, markdown } = props;
    const newArticle: NewArticle = {
      id,
      createdAt: new Date().toLocaleTimeString(),
      title,
      markdown,
    };

    const { setNewArticle } = useArticleStateMutations();
    setNewArticle(newArticle);
  }, []);

  return { post };
};
