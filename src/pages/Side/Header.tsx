import { FC } from "react";
import { Button } from "../_shared/Button";

export const Header: FC = (props) => {
  return (
    <div>
      <Button>追加</Button>
      <Button>削除</Button>
    </div>
  );
};
