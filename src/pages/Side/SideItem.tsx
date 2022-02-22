import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Posted } from "../../models/article";

type ItemProps = {
  posted: Posted;
};

type SideItemComponentProps = PropsWithChildren<{
  className?: string;
  posted: Posted;
}>;

export const SideItemComponent: FC<SideItemComponentProps> = (props) => {
  const { title, excerpt, createdAt, updatedAt } = props.posted;

  return (
    <div className={props.className}>
      <div className="title">{title}</div>
      <div className="date">{updatedAt || createdAt}</div>
      <div className="excerpt">{excerpt}</div>
    </div>
  );
};

const StyledSideItemComponent = styled(SideItemComponent)`
  padding: 8px;
  border-radius: 4px;

  &:hover {
    background-color: #ccc;
  }

  & > .title {
    font-size: 1.2rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > .date {
    margin-top: 10px;
  }

  & > .excerpt {
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SideItem: FC<SideItemProps> = (props) => {
  return <StyledSideItemComponent {...props} />;
};

export type SideItemProps = PropsWithChildren<ItemProps>;
