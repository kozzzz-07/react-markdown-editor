import { FC } from "react";
import { markdown } from "../../mock/data/markdown";
import { Viewer } from "./_shared/Viewer";

export const View: FC = (props) => {
  return <Viewer title="hoge" markdown={markdown} />;
};
