import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import KuponzBlogList from "@/pages/kuponz/blog1/BlogList";
import KuponzArticleDetail from "@/pages/kuponz/blog1/ArticleDetail";
import KuponzHome from "@/pages/kuponz/blog2/Home";
import KuponzFrance from "@/pages/kuponz/blog2/France";
import KuponzArticleDetail2 from "@/pages/kuponz/blog2/ArticleDetail";

const Router: React.FC = () => {
  const currentHostName = useMemo(() => window.location.hostname, []);

  let actualRouter = [
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
  ];

  switch (currentHostName) {
    //当本地运行时
    // case "localhost":
    // case "172.16.104.9":
    //   break;
    //当发布到线上环境时
    case "kuponz.oline.mobi":
      actualRouter = [
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
      ];
      break;
    case "casback.tech":
      actualRouter = [
        {
          path: "/",
          element: <KuponzHome />,
        },
        {
          path: "/kuponz/blog2",
          element: <KuponzHome />,
        },
        {
          path: "/kuponz/blog2/france",
          element: <KuponzFrance />,
        },
        {
          path: "/kuponz/blog2/article-detail/:id",
          element: <KuponzArticleDetail2 />,
        },
      ];
      break;
  }
  const router = createBrowserRouter(actualRouter);
  return <RouterProvider router={router} />;
};

export default Router;
