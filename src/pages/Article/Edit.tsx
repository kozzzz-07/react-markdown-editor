import { FC } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../mock/data/posted";
import { Editor } from "./_shared/Editor";

export const Edit: FC = (props) => {
  const { id } = useParams<"id">();
  const { title, markdown } = items.find((item) => item.id === id)!;

  return <Editor title={title} markdown={markdown} />;
};
