import TTS1Home from "@/pages/voyage-pub/Home";
import TTS1ArticleDetail from "@/pages/voyage-pub/ArticleDetail";
export default {
  test: [
    {
      path: "/tts1/home",
      element: <TTS1Home />,
    },
    {
      path: "/tts1/article-detail/:id",
      element: <TTS1ArticleDetail />,
    },
  ],
  onLine: [
    {
      path: "/",
      element: <TTS1Home />,
    },
    {
      path: "/home",
      element: <TTS1Home />,
    },
    {
      path: "/article-detail/:id",
      element: <TTS1ArticleDetail />,
    },
  ],
};
