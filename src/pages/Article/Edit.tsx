import { FC } from "react";
import { Editor } from "./_shared/Editor";

export const Edit: FC = () => {
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
