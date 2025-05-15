import Kuponz2Home from "@/pages/kuponz/blog2/Home";
import Kuponz2France from "@/pages/kuponz/blog2/France";
import Kuponz2ArticleDetail from "@/pages/kuponz/blog2/ArticleDetail";
export default {
  test: [
    {
      path: "/home",
      element: <Kuponz2Home />,
    },
    {
      path: "/home/article-detail/:id",
      element: <Kuponz2ArticleDetail />,
    },
    {
      path: "/france",
      element: <Kuponz2France />,
    },
  ],
  onLine: [
    {
      path: "/",
      element: <Kuponz2Home />,
    },
    {
      path: "/home",
      element: <Kuponz2Home />,
    },
    {
      path: "/france",
      element: <Kuponz2France />,
    },
    {
      path: "/home/article-detail/:id",
      element: <Kuponz2ArticleDetail />,
    },
  ],
};
