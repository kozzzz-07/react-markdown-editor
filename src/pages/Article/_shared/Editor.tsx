import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Article } from "../../../models/article";

type EditorComponentProps = {
  title?: Article["title"];
  markdown?: Article["markdown"];
  handleTitleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMarkdownChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Editor: FC<EditorComponentProps> = (props) => {
  const {
    title = "",
    markdown = "",
    handleTitleChange = () => {},
    handleMarkdownChange = () => {},
  } = props;

  return (
    <StyledEditor>
      <StyledTitle
        type="text"
        defaultValue={title}
        placeholder="Title"
        onChange={handleTitleChange}
      />
      <StyledMarkdown
        defaultValue={markdown}
        placeholder="Write in Markdown"
        onChange={handleMarkdownChange}
      ></StyledMarkdown>
    </StyledEditor>
  );
};

const StyledEditor = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px; /** Viewerと合わせる */
`;

const StyledTitle = styled.input`
  font-size: 2rem;
  margin-bottom: 8px;

  border: none;
  outline: 0px;
`;

const StyledMarkdown = styled.textarea`
  height: 100%;
  font-size: 1.5rem;

  resize: none;
  border: none;
  outline: 0px;
  overflow-anchor: none;

  &:focus {
    border-left: solid 1px #ededed;
  }
`;
