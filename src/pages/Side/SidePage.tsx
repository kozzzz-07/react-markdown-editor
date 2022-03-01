import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { SideList } from "./SideList";

type SidePageComponentProps = PropsWithChildren<{
  className?: string;
}>;

const SidePageComponent: FC<SidePageComponentProps> = (props) => (
  <div className={props.className}>
    <div className="header">
      <Header />
    </div>
    <div className="sideList">
      <SideList />
    </div>
  </div>
);

const StyledSidePageComponent = styled(SidePageComponent)`
  display: flex;
  flex-direction: column;

  height: 100%;

  & > .header {
    text-align: right;
    padding: 8px;
  }

  & > .sideList {
    flex: 1;
    padding: 8px;
    overflow: scroll;
  }
`;

export const SidePage: FC<SidePageProps> = (props) => <StyledSidePageComponent {...props} />;

export type SidePageProps = PropsWithChildren<unknown>;
