import WaveAdsHome from "@/pages/waveads-global-com/Home";
import WaveAdsContactUs from "@/pages/waveads-global-com/ContactUs";

export default {
  test: [
    {
      path: "/waveads/home",
      element: <WaveAdsHome />,
    },
    {
      path: "/waveads/contact-us",
      element: <WaveAdsContactUs />,
    },
  ],
  onLine: [
    {
      path: "/",
      element: <WaveAdsHome />,
    },
    {
      path: "/home",
      element: <WaveAdsHome />,
    },
    {
      path: "/contact-us",
      element: <WaveAdsContactUs />,
    },
  ],
};
