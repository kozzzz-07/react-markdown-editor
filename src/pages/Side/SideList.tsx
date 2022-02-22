import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Posted } from "../../models/article";
import { SideItem } from "./SideItem";

const items: Posted[] = [
  {
    id: "a",
    title: "title",
    excerpt: "excerpt",
    createdAt: new Date().toLocaleTimeString(),
    updatedAt: new Date().toLocaleTimeString(),
  },
  {
    id: "2",
    title: "title2",
    excerpt: "excerpt2",
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: "cas",
    title: "title3",
    excerpt: "excerptexcerptexcerptexcerptexcerpt3",
    createdAt: new Date().toLocaleTimeString(),
    updatedAt: new Date().toLocaleTimeString(),
  },
];

type SideListComponentProps = PropsWithChildren<{
  className?: string;
}>;

export const SideListComponent: FC<SideListComponentProps> = (props) => {
  return (
    <div className={props.className}>
      {items.map((item) => (
        <div className="item-wrapper" key={item.id}>
          <SideItem posted={item} />
        </div>
      ))}
    </div>
  );
};

const StyledSideListComponent = styled(SideListComponent)`
  .item-wrapper:not(:first-child) {
    border-top: 1px solid gray;
  }
`;

export const SideList: FC<SideListProps> = (props) => {
  return <StyledSideListComponent {...props} />;
};

export type SideListProps = PropsWithChildren<unknown>;
