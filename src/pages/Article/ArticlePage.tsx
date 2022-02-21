import { FC } from "react";
import { Outlet } from "react-router-dom";

export const ArticlePage: FC = (props) => {
  return (
    <>
      <div>article page</div>
      <Outlet />
    </>
  );
};
