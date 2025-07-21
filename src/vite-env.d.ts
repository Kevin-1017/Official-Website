/// <reference types="vite/client" />
/// <reference types="react-scripts" />

// 新增全局翻译函数类型声明
interface Window {
  /** 全局国际化翻译函数 */
  $t: (key: string) => string;
}
