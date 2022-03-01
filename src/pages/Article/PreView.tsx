import { FC } from "react";
import { Article } from "../../models/article";
import { Viewer } from "./_shared/Viewer";

type PreViewProps = {
  title: Article["title"];
  markdown: Article["markdown"];
};

export const PreView: FC<PreViewProps> = (props) => {
  const { title, markdown } = props;

  return <Viewer title={title} markdown={markdown} />;
};
