import TTS2Home from "@/pages/youads-site/Home";
import TTS2ArticleDetail from "@/pages/youads-site/ArticleDetail";
export default {
  test: [
    {
      path: "/tts2/home",
      element: <TTS2Home />,
    },
    {
      path: "/tts2/article-detail/:id",
      element: <TTS2ArticleDetail />,
    },
  ],
  onLine: [
    {
      path: "/",
      element: <TTS2Home />,
    },
    {
      path: "/home",
      element: <TTS2Home />,
    },
    {
      path: "/article-detail/:id",
      element: <TTS2ArticleDetail />,
    },
  ],
};
