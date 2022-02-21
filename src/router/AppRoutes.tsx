import { VFC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ArticlePage } from "../pages/Article/ArticlePage";
import { PageLayout } from "../pages/_layout/PageLayout";
import { articleRoutes } from "./ArticleRoutes";

export const AppRoutes: VFC = () => (
  <Routes>
    <Route element={<PageLayout />}>
      <Route path="/" element={<Navigate to="/articles" />} />
      <Route path="/articles" element={<ArticlePage />}>
        {articleRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/articles" />} />
    </Route>
  </Routes>
);
