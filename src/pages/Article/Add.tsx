import { FC, PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ToggleSwitch } from "../_shared/ToggleSwitch";
import { useEditorState } from "./hooks/useEditorState";
import { useArticleMutations } from "./hooks/useArticleMutations";
import { useSlideDirection } from "./hooks/useSlideDirection";
import { PreView } from "./PreView";
import { Editor } from "./_shared/Editor";
import { Slidable } from "./_shared/Slidable";
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
      title: "No Title.",
    });
  }, [params.id]);

  useEffect(() => {
    update({
      id: params.id!,
      title: title || "No Title.",
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
