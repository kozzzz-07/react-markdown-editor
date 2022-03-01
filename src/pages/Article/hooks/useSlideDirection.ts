import { useCallback, useState } from "react";
import { SlideDirection } from "../_shared/Slidable";
import { useToggle } from "./useToggle";

export const useSlideDirection = (): [SlideDirection, () => void] => {
  const [slideDirection, setState] = useState<SlideDirection>("");
  const [state, toggle] = useToggle(true);

  const switchDirection = useCallback(() => {
    toggle();
    setState(state ? "slide-in" : "slide-out");
  }, [state]);

  return [slideDirection, switchDirection];
};
