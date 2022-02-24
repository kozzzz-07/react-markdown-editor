import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SideItem } from "./SideItem";

import { items } from "../../mock/data/posted";

type SideListComponentProps = PropsWithChildren<{
  className?: string;
}>;

export const SideListComponent: FC<SideListComponentProps> = (props) => {
  return (
    <div className={props.className}>
      {items.map((item) => (
        <div className="item-wrapper" key={item.id}>
          <Link to={`/articles/${item.id}`}>
            <SideItem posted={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

const StyledSideListComponent = styled(SideListComponent)`
  & > .item-wrapper:not(:first-child) {
    border-top: 1px solid gray;
  }

  /* a tag スタイル打ち消し */
  & > .item-wrapper > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const SideList: FC<SideListProps> = (props) => {
  return <StyledSideListComponent {...props} />;
};

export type SideListProps = PropsWithChildren<unknown>;
