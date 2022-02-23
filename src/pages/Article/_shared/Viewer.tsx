import { FC } from "react";
import styled from "styled-components";
import { Markdown2Html } from "../../../lib/Markdown2Html";
import { Post } from "../../../models/article";

type ViewerComponentProps = {
  title: Post["title"];
  markdown: Post["markdown"];
};

export const Viewer: FC<ViewerComponentProps> = (props) => {
  const { title, markdown } = props;

  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <Markdown2Html markdown={markdown} />
    </>
  );
};

const StyledTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 8px;
`;
