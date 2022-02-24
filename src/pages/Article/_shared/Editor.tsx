import { FC } from "react";
import styled from "styled-components";
import { Post } from "../../../models/article";

type EditorComponentProps = {
  title?: Post["title"];
  markdown?: Post["markdown"];
};

export const Editor: FC<EditorComponentProps> = (props) => {
  const { title, markdown } = props;

  return (
    <StyledEditor>
      <StyledTitle type="text" name="" id="" placeholder="Title" />
      <StyledMarkdown
        name=""
        id=""
        placeholder="Write in Markdown"
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