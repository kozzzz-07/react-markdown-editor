import { FC } from "react";
import styled from "styled-components";
import { Button } from "../../_shared/Button";

export const Widget: FC = (props) => {
  return (
    <StyledWidget>
      <Button>プレビュー</Button>
      <Button>編集</Button>
      {/* <Button>投稿</Button> */}
    </StyledWidget>
  );
};

const StyledWidget = styled.div`
  display: flex;
  flex-direction: column;
`;
