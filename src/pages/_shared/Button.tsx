import { FC, MouseEventHandler } from "react";

type ButtonComponentProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const Button: FC<ButtonComponentProps> = ({
  onClick,
  disabled = false,
  children,
  ...props
}) => (
  <button onClick={onClick} disabled={disabled} {...props}>
    {children}
  </button>
);
