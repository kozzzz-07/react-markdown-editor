import { PropsWithChildren, FC } from "react";
import styled from "styled-components";
import { Article } from "../../../models/article";
import { ToggleSwitch } from "../../_shared/ToggleSwitch";
import { useSlideDirection } from "../hooks/useSlideDirection";
import { PreView } from "../PreView";
import { Editor, HandleMarkdownChange, HandleTitleChange } from "./Editor";
import { Slidable } from "./Slidable";

type MarkdownEditorComponentProps = PropsWithChildren<{
  className: string;
  title?: Article["title"];
  markdown?: Article["markdown"];
  handleTitleChange: HandleTitleChange;
  handleMarkdownChange: HandleMarkdownChange;
}>;

const MarkdownEditorComponent: FC<MarkdownEditorComponentProps> = (props) => {
  const [slideDirection, switchDirection] = useSlideDirection();

  return (
    <div className={props.className}>
      <div className="contents">
        <Slidable
          left={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Editor
              title={props?.title}
              markdown={props?.markdown}
              handleTitleChange={props.handleTitleChange}
              handleMarkdownChange={props.handleMarkdownChange}
            />
          }
          right={<PreView title={props?.title} markdown={props?.markdown} />}
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

const StyledMarkdownEditorComponent = styled(MarkdownEditorComponent)`
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

export type MarkdownEditorProps = PropsWithChildren<{
  title?: Article["title"];
  markdown?: Article["markdown"];
  handleTitleChange: HandleTitleChange;
  handleMarkdownChange: HandleMarkdownChange;
}>;

export const MarkdownEditor: FC<MarkdownEditorProps> = (props) => (
  <StyledMarkdownEditorComponent {...props} />
);
