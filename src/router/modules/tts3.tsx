import TTS3Home from "@/pages/youads-site/Home";
import TTS3ArticleDetail from "@/pages/youads-site/ArticleDetail";
export default {
  test: [
    {
      path: "/tts3/home",
      element: <TTS3Home />,
    },
    {
      path: "/tts3/article-detail/:id",
      element: <TTS3ArticleDetail />,
    },
  ],
  onLine: [
    {
      path: "/",
      element: <TTS3Home />,
    },
    {
      path: "/home",
      element: <TTS3Home />,
    },
    {
      path: "/article-detail/:id",
      element: <TTS3ArticleDetail />,
    },
  ],
};
