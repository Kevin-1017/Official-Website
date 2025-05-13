import { createBrowserRouter } from "react-router-dom";

import KuponzBlogList from "@/pages/kuponz/blog1/BlogList";
import KuponzArticleDetail from "@/pages/kuponz/blog1/ArticleDetail";
import KuponzTravel from "@/pages/kuponz/bolg2/Travel";
import KuponzFrance from "@/pages/kuponz/bolg2/France";
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
    element: <KuponzTravel />,
  },
  {
    path: "/kuponz/blog2/france",
    element: <KuponzFrance />,
  },
]);
