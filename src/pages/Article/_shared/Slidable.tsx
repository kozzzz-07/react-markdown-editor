import { FC, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

type SlidableComponentProps = PropsWithChildren<{
  className?: string;
  left: ReactNode;
  right: ReactNode;
  slideDirection: SlideDirection;
}>;

const SlidableComponent: FC<SlidableComponentProps> = (props) => (
  <div className={props.className}>
    <div className="inner">
      <div className={`adjuster ${props.slideDirection}`}>
        <div className="left">{props.left}</div>
        <div className="right">{props.right}</div>
      </div>
    </div>
  </div>
);

const StyledSlidableComponent = styled(SlidableComponent)`
  height: 100%;
  overflow: hidden;

  & > .inner {
    display: flex;
    width: 200%;
    height: 100%;

    /* スライドイン/スライドアウトの調整用要素 */
    & > .adjuster {
      position: relative;
      width: 100%;

      & > .left {
        width: 50%;
        height: 100%;
      }

      & > .right {
        width: 50%;
        height: 100%;

        /* エディタの右側へ要素を配置する */
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

  @keyframes SlideIn_SlideOut {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      transform: translateX(-50%);
    }
  }

  .slide-in {
    animation: SlideIn_SlideOut 0.5s ease-in forwards;
  }

  .slide-out {
    animation: SlideIn_SlideOut 0.5s ease-in;
    animation-direction: reverse;
  }
`;

export const Slidable: FC<SlidableProps> = (props) => <StyledSlidableComponent {...props} />;

export type SlidableProps = PropsWithChildren<{
  left: ReactNode;
  right: ReactNode;
  slideDirection: SlideDirection;
}>;

export type SlideDirection = "slide-in" | "slide-out" | "";
