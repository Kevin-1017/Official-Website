import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import domainList from "@/utils/data/domainList";
import kuponz1Routes from "./modules/kuponz1";
import kuponz2Routes from "./modules/kuponz2";

//路由命名规范
// 1. 路由名称全部使用小写字母，多个单词使用下划线连接
// 2. 测试环境所有一级路由以相应官网名开头,官网几在后面填数字几。线上环境则不以官网名开头。
// 3. 首页用home命名，其他页面用模块名。示例:/kuponz1/home

const Router: React.FC = () => {
  const currentHostName = useMemo(() => window.location.hostname, []);

  //本地环境及测试环境通用的默认路由
  let actualRouter = [
    //kuponz官网一路由
    ...kuponz1Routes.test,

    //kuponz官网二路由
    ...kuponz2Routes.test,
  ];

  switch (currentHostName) {
    //当本地运行时
    // case "localhost":
    // case "172.16.104.9":
    //   break;
    //当发布到线上环境时

    //kuponz官网一
    case domainList.kuponz[0]:
      actualRouter = [...kuponz1Routes.onLine];
      break;
    //kuponz官网二
    case domainList.kuponz[1]:
      actualRouter = [...kuponz2Routes.onLine];
      break;
  }
  const router = createBrowserRouter(actualRouter);
  return <RouterProvider router={router} />;
};

export default Router;
