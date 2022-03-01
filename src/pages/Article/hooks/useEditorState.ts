import { ChangeEvent, useCallback, useState } from "react";
import { Article } from "../../../models/article";

export const useEditorState = () => {
  const [title, setTitle] = useState<Article["title"]>("");
  const [markdown, setMarkdown] = useState<Article["markdown"]>("");

  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    [title]
  );

  const handleMarkdownChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setMarkdown(e.target.value),
    [markdown]
  );

  return {
    title,
    markdown,
    handleTitleChange,
    handleMarkdownChange,
  };
};
