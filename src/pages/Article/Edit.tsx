import { FC, PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEditorState } from "./hooks/useEditorState";
import { useArticleMutations } from "./hooks/useArticleMutations";
import { MarkdownEditor } from "./_shared/MarkdownEditor";
import { useArticleState } from "../../states/articleState";

type EditComponentProps = PropsWithChildren<{
  className: string;
}>;

const EditComponent: FC<EditComponentProps> = (props) => {
  const {
    title,
    markdown,
    setTitle,
    setMarkdown,
    handleTitleChange,
    handleMarkdownChange,
  } = useEditorState();

  const params = useParams<"id">();
  const { update } = useArticleMutations();
  const articles = useArticleState();

  useEffect(() => {
    const article = articles.find((a) => a.id === params.id);

    setTitle(article?.title);
    setMarkdown(article?.markdown);
  }, [params.id]);

  useEffect(() => {
    update({
      id: params.id!,
      title,
      markdown,
    });
  }, [title, markdown]);

  return (
    <div className={props.className}>
      <MarkdownEditor
        title={title}
        markdown={markdown}
        handleTitleChange={handleTitleChange}
        handleMarkdownChange={handleMarkdownChange}
      />
    </div>
  );
};

const StyledEditComponent = styled(EditComponent)`
  height: 100%;
`;

export const Edit: FC<EditProps> = (props) => (
  <StyledEditComponent {...props} />
);

export type EditProps = PropsWithChildren<unknown>;
