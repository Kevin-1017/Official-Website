import { createBrowserRouter } from "react-router-dom";

import KuponzBlogList from "@/pages/kuponz/blog1/BlogList";
import KuponzArticleDetail from "@/pages/kuponz/blog1/ArticleDetail";
import KuponzHome from "@/pages/kuponz/blog2/Home";
import KuponzFrance from "@/pages/kuponz/blog2/France";
import KuponzArticleDetail2 from "@/pages/kuponz/blog2/ArticleDetail";
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
  {
    path: "/kuponz/blog2",
    element: <KuponzHome />,
  },
  {
    path: "/kuponz/blog2/article-detail/:id",
    element: <KuponzArticleDetail2 />,
  },
  {
    path: "/kuponz/blog2/france",
    element: <KuponzFrance />,
  },
]);
