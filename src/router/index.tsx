import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import domainList from "@/utils/data/domainList";
import NotFound from "@/components/NotFound";
import kuponz1Routes from "./modules/kuponz1";
import kuponz2Routes from "./modules/kuponz2";
import waveadsRoutes from "./modules/waveads";
import tts1Routes from "./modules/tts1";
import tts2Routes from "./modules/tts2";
import tts3Routes from "./modules/tts3";

//路由命名规范
// 1. 路由名称全部使用小写字母，多个单词使用下划线连接
// 2. 测试环境所有一级路由以相应官网名开头,官网几在后面填数字几。线上环境则不以官网名开头。
// 3. 首页用home命名，其他页面用模块名。示例:/kuponz1/home

const Router: React.FC = () => {
  const currentHostName = useMemo(() => window.location.hostname, []);

  //本地环境及测试环境通用的默认路由
  let actualRouter = [
    //默认路由
    { path: "*", element: <NotFound /> },

    //kuponz官网一路由
    ...kuponz1Routes.test,

    //kuponz官网二路由
    ...kuponz2Routes.test,

    //waveads路由
    ...waveadsRoutes.test,

    //tts官网一路由
    ...tts1Routes.test,

    //tts官网二路由
    ...tts2Routes.test,

    //tts官网三路由
    ...tts3Routes.test,
  ];

  switch (currentHostName) {
    //当本地运行时
    // case "localhost":
    // case "172.16.104.9":
    //   break;
    //当发布到线上环境时

    //kuponz官网一
    case domainList.kuponzVersion1[0]:
      actualRouter = [...kuponz1Routes.onLine];
      break;
    case domainList.kuponzVersion2[0]:
      actualRouter = [...kuponz1Routes.onLine];
      break;
    //kuponz官网二
    case domainList.kuponzVersion1[1]:
      actualRouter = [...kuponz2Routes.onLine];
      break;
    case domainList.kuponzVersion2[1]:
      actualRouter = [...kuponz2Routes.onLine];
      break;
    // //waveads官网
    // case domainList.waveads[0]:
    //   actualRouter = [...waveadsRoutes.onLine];
    //   break;
    // tts官网一
    case domainList.tts[0]:
      actualRouter = [...tts1Routes.onLine];
      break;
    // tts官网二
    case domainList.tts[1]:
      actualRouter = [...tts2Routes.onLine];
      break;
    // tts官网三
    case domainList.tts[2]:
      actualRouter = [...tts3Routes.onLine];
      break;
  }
  const router = createBrowserRouter(actualRouter);
  return <RouterProvider router={router} />;
};

export default Router;
