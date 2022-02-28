import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { useEditorState } from "./hooks/useEditorState";
import { PreView } from "./PreView";
import { Editor } from "./_shared/Editor";
import { Slidable } from "./_shared/Slidable";

type AddComponentProps = PropsWithChildren<{
  className?: string;
}>;

const AddComponent: FC<AddComponentProps> = (props) => {
  const { title, markdown, handleTitleChange, handleMarkdownChange } =
    useEditorState();

  return (
    <div className={props.className}>
      <Slidable
        left={
          <Editor
            title={title}
            markdown={markdown}
            handleTitleChange={handleTitleChange}
            handleMarkdownChange={handleMarkdownChange}
          />
        }
        right={<PreView title={title} markdown={markdown} />}
        slideDirection={``}
      />
    </div>
  );
};

const StyledAddComponent = styled(AddComponent)`
  height: 100%;
`;

export const Add: FC<AddProps> = (props) => {
  return <StyledAddComponent {...props} />;
};

export type AddProps = PropsWithChildren<unknown>;
