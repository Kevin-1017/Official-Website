import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import kuponz1Routes from "./modules/kuponz1";

import KuponzHome from "@/pages/kuponz/blog2/Home";
import KuponzFrance from "@/pages/kuponz/blog2/France";
import KuponzArticleDetail2 from "@/pages/kuponz/blog2/ArticleDetail";

//路由命名规范
// 1. 路由名称全部使用小写字母，多个单词使用下划线连接
// 2. 所有一级路由以相应官网名开头,官网几在后面填数字几。示例:/kuponz1
// 3. 首页用home命名，其他页面用模块名

const Router: React.FC = () => {
  const currentHostName = useMemo(() => window.location.hostname, []);

  const domainList = useMemo(
    () => ({
      kuponz: ["kuponz.oline.mobi", "casback.tech"],
    }),
    []
  );

  //本地环境及测试环境通用的默认路由
  let actualRouter = [
    //kuponz官网一路由
    ...kuponz1Routes,

    //kuponz官网二测试路由
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

    //kuponz官网一
    case domainList.kuponz[0]:
      actualRouter = [...kuponz1Routes];
      break;

    case domainList.kuponz[1]:
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
