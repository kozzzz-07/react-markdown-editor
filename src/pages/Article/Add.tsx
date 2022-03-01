import { FC, PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useArticleStateMutations } from "../../states/articleState";
import { ToggleSwitch } from "../_shared/ToggleSwitch";
import { useEditorState } from "./hooks/useEditorState";
import { useSlideDirection } from "./hooks/useSlideDirection";
import { PreView } from "./PreView";
import { Editor } from "./_shared/Editor";
import { Slidable } from "./_shared/Slidable";

type AddComponentProps = PropsWithChildren<{
  className?: string;
}>;

const AddComponent: FC<AddComponentProps> = (props) => {
  const { title, markdown, handleTitleChange, handleMarkdownChange } =
    useEditorState();
  const [slideDirection, switchDirection] = useSlideDirection();

  const params = useParams<"id">();
  const { setNewArticle } = useArticleStateMutations();

  useEffect(() => {
    setNewArticle({
      id: params.id!,
      createdAt: new Date().toLocaleTimeString(),
      markdown: "",
    });
  }, []);

  return (
    <div className={props.className}>
      <div className="contents">
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
          slideDirection={slideDirection}
        />
      </div>
      <div className="actions">
        <ToggleSwitch
          checkedChildren="📝"
          unCheckedChildren="👁"
          onChange={() => {
            switchDirection();
          }}
        />
      </div>
    </div>
  );
};

const StyledAddComponent = styled(AddComponent)`
  height: 100%;
  display: flex;

  .contents {
    flex: 1;
  }

  .actions {
    /* 諦めの絶対値指定 */
    position: absolute;
    /*  一旦決め打ち、計算で出したい */
    top: 100px;
    right: 30px;
    z-index: 1;
  }
`;

export const Add: FC<AddProps> = (props) => <StyledAddComponent {...props} />;

export type AddProps = PropsWithChildren<unknown>;
