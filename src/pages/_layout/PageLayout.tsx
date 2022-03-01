import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SidePage } from "../Side/SidePage";
import { Card } from "./Card";

type PageComponentProps = PropsWithChildren<{
  className?: string;
}>;

const PageComponent: FC<PageComponentProps> = (props) => (
  <div className={props.className}>
    <Card className="card">
      <div className="side">
        <SidePage />
      </div>
      <main className="content">
        <Outlet />
      </main>
    </Card>
  </div>
);

const StyledPageComponent = styled(PageComponent)`
  display: flex;

  height: 100%;

  & > .card {
    display: flex;
    margin: 24px;

    .side {
      width: 30%;
      min-width: 200px;
      max-width: 300px;
      border-right: 1px solid gray;
    }

    .content {
      flex: 1;
      padding: 24px;
    }
  }
`;

export const PageLayout: FC<PageProps> = (props) => <StyledPageComponent {...props} />;

export type PageProps = PropsWithChildren<unknown>;
