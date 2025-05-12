import { createBrowserRouter } from "react-router-dom";

import KuponzBlogList from "@/pages/kuponz/blog1/BlogList";
import KuponzArticleDetail from "@/pages/kuponz/blog1/ArticleDetail";

export default createBrowserRouter([
  {
    path: "/",
    element: <KuponzBlogList />,
  },
  {
    path: "/kuponz/blog1/blog-list",
    element: <KuponzBlogList />,
  },
  {
    path: "/kuponz/blog1/article-detail/:id",
    element: <KuponzArticleDetail />,
  },
]);
