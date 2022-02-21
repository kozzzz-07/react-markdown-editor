import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SideList } from "./SideList";

type PageComponentProps = PropsWithChildren<{
  className?: string;
}>;

const PageComponent: FC<PageComponentProps> = (props) => (
  <div className={props.className}>
    <div className="sidebar">
      <div>side</div>
    </div>
    <main className="content">
      <Outlet />
    </main>
  </div>
);

const StyledPageComponent = styled(PageComponent)`
  display: flex;
  & > .sidebar {
    width: 30%;
    max-width: 300px;
    padding: 24px;
  }

  & > .content {
    flex: 1;
    padding: 24px;
  }
`;

export const PageLayout: FC<PageProps> = (props) => {
  return <StyledPageComponent {...props} />;
};

export type PageProps = PropsWithChildren<unknown>;
