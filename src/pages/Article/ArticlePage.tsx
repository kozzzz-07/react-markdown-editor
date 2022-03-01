import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navigator } from "./Navigator";

type ArticlePageComponentProps = PropsWithChildren<{
  className?: string;
}>;

const ArticlePageComponent: FC<ArticlePageComponentProps> = (props) => (
  <div className={props.className}>
    <div className="markdown">
      <Outlet />
    </div>
    <div className="navigator">
      <Navigator />
    </div>
  </div>
);

const StyledArticlePageComponent = styled(ArticlePageComponent)`
  display: flex;
  justify-content: space-between;

  overflow: scroll;
  height: 100%;

  & > .markdown {
    flex: 1;
  }

  & > .navigator {
    position: sticky;
    top: 0;
  }
`;

export const ArticlePage: FC<ArticlePageProps> = (props) => (
  <StyledArticlePageComponent {...props} />
);

export type ArticlePageProps = PropsWithChildren<unknown>;
