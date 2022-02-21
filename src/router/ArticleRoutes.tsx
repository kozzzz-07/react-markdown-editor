import { Add } from "../pages/Article/Add";
import { Edit } from "../pages/Article/Edit";
import { View } from "../pages/Article/View";

export const articleRoutes = [
  {
    path: ":id",
    element: <View />,
  },
  {
    path: ":id/edit",
    element: <Edit />,
  },
  {
    path: ":id/add",
    element: <Add />,
  },
] as const;
