import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useArticleState } from "../../states/articleState";
import { useEditorState } from "./hooks/useEditorState";
import { Viewer } from "./_shared/Viewer";

export const View: FC = () => {
  const params = useParams<"id">();
  const articles = useArticleState();
  const { title, markdown, setTitle, setMarkdown } = useEditorState();

  useEffect(() => {
    const article = articles.find((a) => a.id === params.id);

    setTitle(article?.title);
    setMarkdown(article?.markdown);
  }, [params.id]);

  return <Viewer title={title} markdown={markdown} />;
};
