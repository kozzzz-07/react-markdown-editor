import { PostId } from "../../models/article";

export const generateId: () => PostId = () => new Date().getTime().toString(36);
