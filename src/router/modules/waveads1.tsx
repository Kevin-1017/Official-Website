import WaveAds1Home from "@/pages/WaveAds/blog1/Home";
import WaveAds1ContactUs from "@/pages/WaveAds/blog1/ContactUs";

export default {
  test: [
    {
      path: "/waveads1/home",
      element: <WaveAds1Home />,
    },
    {
      path: "/waveads1/contact-us",
      element: <WaveAds1ContactUs />,
    },
  ],
  onLine: [
    {
      path: "/",
      element: <WaveAds1Home />,
    },
    {
      path: "/home",
      element: <WaveAds1Home />,
    },
    {
      path: "/contact-us",
      element: <WaveAds1ContactUs />,
    },
  ],
};
