import { FC, PropsWithChildren, useState } from "react";
import styled from "styled-components";
import { useEditorState } from "./hooks/useEditorState";
import { PreView } from "./PreView";
import { Editor } from "./_shared/Editor";

type AddComponentProps = PropsWithChildren<{
  className?: string;
}>;

const AddComponent: FC<AddComponentProps> = (props) => {
  const { title, markdown, handleTitleChange, handleMarkdownChange } =
    useEditorState();

  return (
    <div className={props.className}>
      <div className="inner">
        <div className={`adjuster slideIn`}>
          <div className="editor">
            <Editor
              title={title}
              markdown={markdown}
              handleTitleChange={handleTitleChange}
              handleMarkdownChange={handleMarkdownChange}
            />
          </div>
          <div className="preview">
            <PreView title={title} markdown={markdown} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledAddComponent = styled(AddComponent)`
  height: 100%;
  overflow: hidden;

  & > .inner {
    display: flex;
    width: 200%;
    height: 100%;

    transition: 5.3s ease-in-out;

    /* スライドイン/スライドアウトの調整用要素 */
    & > .adjuster {
      position: relative;
      width: 100%;
      /* transform: translateX(-50%); */

      & > .editor {
        width: 50%;
        height: 100%;
      }

      & > .preview {
        width: 50%;
        height: 100%;

        /* エディタの右側へ要素を配置する */
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

  @keyframes SlideIn_SlideOut {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      transform: translateX(-50%);
    }
  }

  .slideIn {
    animation: SlideIn_SlideOut 0.4s ease-in forwards;
  }

  .slideOut {
    animation: SlideIn_SlideOut 0.4s ease-in;
    animation-direction: reverse;
  }
`;

export const Add: FC<AddProps> = (props) => {
  return <StyledAddComponent {...props} />;
};

export type AddProps = PropsWithChildren<unknown>;
