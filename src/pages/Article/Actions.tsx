import { FC, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../_shared/Button";

export const Actions: FC = (props) => {
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
    <StyledNavigator>
      <Button onClick={onEdit}>プレビュー</Button>
      <Button onClick={onPreview}>編集</Button>
    </StyledNavigator>
  ) : null;
};

const StyledNavigator = styled.div`
  display: flex;
  flex-direction: column;
`;
