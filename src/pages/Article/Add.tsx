import { FC, PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEditorState } from "./hooks/useEditorState";
import { useArticleMutations } from "./hooks/useArticleMutations";
import { MarkdownEditor } from "./_shared/MarkdownEditor";

type AddComponentProps = PropsWithChildren<{
  className: string;
}>;

const AddComponent: FC<AddComponentProps> = (props) => {
  const { title, markdown, handleTitleChange, handleMarkdownChange } =
    useEditorState();

  const params = useParams<"id">();
  const { post, update } = useArticleMutations();

  useEffect(() => {
    post({
      id: params.id!,
      markdown: "",
      title: "",
    });
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

const StyledAddComponent = styled(AddComponent)`
  height: 100%;
`;

export const Add: FC<AddProps> = (props) => <StyledAddComponent {...props} />;

export type AddProps = PropsWithChildren<unknown>;
