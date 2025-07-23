import Kuponz2Home from "@/pages/casback-tech/Home";
import Kuponz2France from "@/pages/casback-tech/France";
import Kuponz2ArticleDetail from "@/pages/casback-tech/ArticleDetail";
export default {
  test: [
    {
      path: "/kuponz2/home",
      element: <Kuponz2Home />,
    },
    {
      path: "/kuponz2/article-detail/:id",
      element: <Kuponz2ArticleDetail />,
    },
    {
      path: "/kuponz2/france",
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
      path: "/article-detail/:id",
      element: <Kuponz2ArticleDetail />,
    },
  ],
};
