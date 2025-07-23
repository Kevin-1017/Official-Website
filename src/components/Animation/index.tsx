import { useRef, useEffect, ReactNode } from "react";
import styles from "./index.module.scss";
type AnimationType = "slide_right" | "appear" | "slide_up" | "slide_left";

interface AnimatedComponentProps {
  children: ReactNode;
  animationType: AnimationType;
}
const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  animationType,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const firstChild = element.children[0] as HTMLElement | undefined;
          if (firstChild) {
            if (entry.isIntersecting) {
              // 先移除再重新添加类名，确保动画重播
              firstChild.classList.remove(styles[animationType]);
              void firstChild.offsetWidth; // 强制重排
              firstChild.classList.add(styles[animationType]);
            } else {
              firstChild.classList.remove(styles[animationType]);
            }
          }
        });
      },
      {
        threshold: 0.01, // 当 % 的元素可见时触发
      }
    );
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animationType]);

  return <div ref={ref}>{children}</div>;
};
export default AnimatedComponent;
