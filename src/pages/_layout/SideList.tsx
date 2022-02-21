import { FC, PropsWithChildren } from "react";

type SideListComponentProps = PropsWithChildren<{
  className?: string;
}>;

export const SideList: FC<SideListComponentProps> = (props) => {
  return <div>side</div>;
};
