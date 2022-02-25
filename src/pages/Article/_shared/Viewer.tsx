import { FC } from "react";
import styled from "styled-components";
import { Markdown2Html } from "../../../lib/Markdown2Html";
import { Article } from "../../../models/article";

type ViewerComponentProps = {
  title: Article["title"];
  markdown: Article["markdown"];
};

export const Viewer: FC<ViewerComponentProps> = (props) => {
  const { title, markdown } = props;

  return (
    <StyledViewer>
      <StyledTitle>{title}</StyledTitle>
      <Markdown2Html markdown={markdown} />
    </StyledViewer>
  );
};

const StyledViewer = styled.div`
  padding: 16px; /** 他コンポーネントでの見た目を揃えるだけに必要な指定をいい感じに共通かする方法を知りたい */
`;

// スタイルを共通化したい
const StyledTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 8px;
`;
