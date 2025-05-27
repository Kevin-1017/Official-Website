import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import vitePluginsAutoI18n, { YoudaoTranslator } from "vite-auto-i18n-plugin";

const i18nPlugin = vitePluginsAutoI18n({
  globalPath: "./lang",
  namespace: "lang",
  distPath: "./dist/assets",
  distKey: "index",
  targetLangList: ["ja", "ko", "es", "pt"],
  originLang: "en",
  translator: new YoudaoTranslator({
    appId: "7817aae70bbe6bf4",
    appKey: "psXHFipQBOG2XtxmEBzuJttKdahdr2Ua",
  }),
  translateType: "semi-auto",
});

export default defineConfig({
  plugins: [react(), i18nPlugin],
  server: {
    host: "0.0.0.0",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    // 设置文件./src路径为 @
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
});
