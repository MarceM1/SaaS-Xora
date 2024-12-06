// import clsx from "clsx";
// import { useState } from "react";
// import SlideDown from "react-slidedown";
// import "react-slidedown/lib/slidedown.css";
// /* eslint-disable react/prop-types */
// const FaqItem = ({ item, index }) => {
//   const [activeId, setActiveId] = useState(null);
//   const active = activeId === item.id;

//   return (
//     <div className="relative z-2 mb-16">
//       <div
//         className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
//         onClick={() => {
//           console.log("activeId initial: ", activeId);
//           setActiveId(activeId === item.id ? null : item.id);
//           console.log("activeId: ", activeId);
//           console.log("active: ", active);
//         }}
//       >
//         <div className="flex-1">
//           <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
//             {index < 10 ? "0" : ""}
//             {index}
//           </div>
//           <div
//             className={clsx(
//               "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
//               active && "max-lg:text-p1"
//             )}
//           >
//             {item.question}
//           </div>
//         </div>
//         <div
//           className={clsx(
//             "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
//             active && "before:bg-p1 after:rotate-0 after:bg-p1"
//           )}
//         >
//           <div className="g4 size-11/12 rounded-full shadow-300" />
//         </div>
//       </div>
//       <SlideDown>{activeId === item.id && <div className="body-3 px-7 py-3.5">{item.answer}</div>}</SlideDown>
// 			<div className={clsx('g5 absolute -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500', active && 'opacity-100')}>
// 				<div className="g4 absolute inset-0.5 -z-1 rounded-3xl"/>
// 				<div className="absolute left-8 top-0 h-0.5 w-40 bg-p1"/>
// 			</div>
//     </div>
//   );
// };

// export default FaqItem;

import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
/* eslint-disable react/prop-types */

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => setActiveId(activeId === item.id ? null : item.id)}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1"
            )}
          >
            {item.question}
          </div>
        </div>
        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:rotate-0 after:bg-p1"
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>
      {/* Animación de deslizamiento */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.01 }}
            className="body-3 px-7 py-3.5"
          >
            {item.answer}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={clsx(
          "g5 absolute -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500",
          active && "opacity-100"
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};

export default FaqItem;
