import { FC, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../_shared/Button";

export const Widget: FC = (props) => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();

  const onPreview = useCallback(() => {
    navigate(`/articles/${id}`);
  }, [id]);
  const onEdit = useCallback(() => {
    navigate(`/articles/${id}/edit`);
  }, [id]);

  // TODO: postしたものがあるかどうかで判定する
  // children を受け取って、渡した側である程度制御できるようにする？
  return id ? (
    <StyledWidget>
      <Button onClick={onEdit}>編集</Button>
    </StyledWidget>
  ) : null;
};

const StyledWidget = styled.div`
  display: flex;
  flex-direction: column;
`;
