import Kuponz1Home from "@/pages/kuponz-oline-mobi/BlogList";
import Kuponz1ArticleDetail from "@/pages/kuponz-oline-mobi/ArticleDetail";

export default {
  test: [
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
