import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

type CardComponentProps = PropsWithChildren<{
  className?: string;
}>;

const GlassCardComponent: FC<CardComponentProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);

const StyledCardComponent = styled(GlassCardComponent)`
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  height: auto;
`;

export type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card: FC<CardProps> = (props) => <StyledCardComponent {...props} />;
