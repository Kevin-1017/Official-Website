import Kuponz1Home from "@/pages/kuponz/blog1/BlogList";
import Kuponz1ArticleDetail from "@/pages/kuponz/blog1/ArticleDetail";

export default {
  test: [
    {
      path: "/",
      element: <Kuponz1Home />,
    },
    {
      path: "/kuponz1/home",
      element: <Kuponz1Home />,
    },
    {
      path: "/kuponz1/article_detail/:id",
      element: <Kuponz1ArticleDetail />,
    },
  ],
  onLine: [
    {
      path: "/",
      element: <Kuponz1Home />,
    },
    {
      path: "/home",
      element: <Kuponz1Home />,
    },
    {
      path: "/article_detail/:id",
      element: <Kuponz1ArticleDetail />,
    },
  ],
};
