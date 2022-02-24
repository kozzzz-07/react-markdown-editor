import { FC } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../mock/data/posted";
import { Viewer } from "./_shared/Viewer";

export const View: FC = (props) => {
  const { id } = useParams<"id">();
  const posted = items.find((item) => item.id === id);

  return posted ? (
    <Viewer title={posted.title} markdown={posted.markdown} />
  ) : null;
};
