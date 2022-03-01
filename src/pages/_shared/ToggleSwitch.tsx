import { FC, ReactNode } from "react";
import Switch, { SwitchChangeEventHandler } from "rc-switch";

type ToggleSwitchProps = {
  onChange?: SwitchChangeEventHandler;
  disabled?: boolean;
  checkedChildren: ReactNode;
  unCheckedChildren: ReactNode;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  onChange = () => {},
  disabled = false,
  ...props
}) => <Switch onChange={onChange} disabled={disabled} {...props} />;
