import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { generateId } from "../../mock/services/generateId";
import { Button } from "../_shared/Button";

export const Header: FC = (props) => {
  const navigate = useNavigate();

  const onAdd = useCallback(() => {
    const id = generateId();
    navigate(`/articles/${id}/add`);
  }, []);

  return (
    <div>
      <Button onClick={onAdd}>追加</Button>
      {/* <Button>削除</Button> */}
    </div>
  );
};
