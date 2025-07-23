// import { useEffect, useRef, useState } from "react";
// import styles from "./index.module.scss";
// import { wallData, caseImg, caseData } from "./config";
// // import AnimatedComponent from "@/components/Animation";
// // import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// {
//   window.$t("");
// }
// function Wall() {
//   const trackRef = useRef<HTMLUListElement | null>(null);
//   const tabListRef = useRef<(HTMLLIElement | null)[]>([]);
//   const intervalRef = useRef<number | null>(null);
//   // case初始化
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // case总的数量
//   const totalItems = caseImg.length;

//   const isInitialized = useRef(false);
//   useEffect(() => {
//     // 页面刷新后开始播放case
//     restartAutoPlay();
//     window.scrollTo(0, 0); // 页面加载时滚动到顶部
//     // 防止保存时克隆多个li
//     if (isInitialized.current) return;
//     isInitialized.current = true;
//     // list克隆逻辑
//     const setupTrack = (trackElement: HTMLUListElement | null) => {
//       if (!trackElement) return;
//       const slides = Array.from(trackElement.children);
//       slides.forEach((slide) => {
//         const clone = slide.cloneNode(true);
//         trackElement.appendChild(clone);
//       });
//     };

//     setupTrack(trackRef.current);
//   }, []);

//   // case的播放逻辑，点击前进后退之后重新开始自动播放
//   const restartAutoPlay = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }

//     intervalRef.current = window.setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
//     }, 5000);
//   };

//   // 点击前进
//   const handlePrev = () => {
//     clearIntervalIfExists();
//     setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
//     restartAutoPlay();
//   };
//   // 点击后退
//   const handleNext = () => {
//     clearIntervalIfExists();
//     setCurrentIndex((prev) => (prev + 1) % totalItems);
//     restartAutoPlay();
//   };

//   // 封装清除定时器逻辑
//   const clearIntervalIfExists = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   return (
//     <div className={styles.wall}>
//       <h1>{window.$t("Trusted by Global Leading Brands")}</h1>
//       <AnimatedComponent animationType="slide_up">
//         <div className={styles.slide_wall}>
//           <div className={styles.wrapper}>
//             <div className={styles.case}>
//               <ul
//                 style={{
//                   transform: `translateX(-${currentIndex * 100}%)`,
//                   transition: "transform 0.5s ease",
//                 }}
//               >
//                 {caseImg.map((item) => (
//                   <li className={styles.case_li}>
//                     <div className={styles.case_top}></div>
//                     <div className={styles.case_div}>
//                       <div className={styles.case_text}>
//                         <p>{caseData[0].caseData1}</p>
//                       </div>
//                       <div>
//                         <img src={item} alt="" />
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div
//               className={styles.btn_left}
//               onClick={() => {
//                 handlePrev();
//               }}
//             >
//               {/* <LeftOutlined /> */}
//             </div>
//             <div
//               className={styles.btn_right}
//               onClick={() => {
//                 handleNext();
//               }}
//             >
//               {/* <RightOutlined /> */}
//             </div>
//           </div>
//           <div className={styles.tab}>
//             <ul>
//               {[...Array(6)].map((_, index) => (
//                 <li
//                   key={index}
//                   ref={(el) => (tabListRef.current[index] = el)}
//                   className={currentIndex === index ? styles.active : ""}
//                   onClick={() => {
//                     clearIntervalIfExists();
//                     setCurrentIndex(index);
//                     restartAutoPlay();
//                   }}
//                 ></li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </AnimatedComponent>
//       <div className={styles.wall_list}>
//         <ul className={styles.wall_list_ul} ref={trackRef}>
//           {wallData.map((item) => (
//             <li>
//               <img src={item} alt="" />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// export default Wall;
