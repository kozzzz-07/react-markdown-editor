import { useCallback } from "react";
import { useArticleMutations } from "./useArticleMutations";

export const useUpdateArticle = () => {
  const { update } = useArticleMutations();

  const updateArticle = useCallback(
    (id, title, markdown) => {
      update({
        id,
        title,
        markdown,
      });
    },
    [update]
  );
  return { updateArticle };
};
