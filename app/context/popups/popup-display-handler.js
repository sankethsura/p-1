import { useRouter } from "next/navigation";
import { PopupHandlerContext } from "./popup-context";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
const PopupDisplayHandler = ({ children }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(PopupHandlerContext);
  const [currentlyShowPopup, setCurrentlyShowPopup] = useState();

  useEffect(() => {
    setCurrentlyShowPopup(state.currentlyShow);
  }, [state]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div>
      {currentlyShowPopup && (
        <motion.div
          className="z-50 w-screen h-screen bg-[#39393944] backdrop-blur-sm flex items-center overflow-hidden fixed"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeIn}
          style={{ backgroundColor: "rgba(60,60,60,0.1)" }}
        >
          <motion.div
            className={`flex items-center justify-center h-full w-full ${
              router.pathname === "/" || router.pathname === "/home"
                ? "md:max-w-6xl lg:max-w-7xl xl:max-w-7xl mx-auto"
                : ""
            }`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popIn}
          >
            {true && <p className="text-green-500" onClick={()=>{dispatch("")}}> asdasd</p>}
          </motion.div>
        </motion.div>
      )}
      <div className={`${currentlyShowPopup ? "overflow-hidden" : ""}`}>{children}</div>
    </div>
  );
};

export default PopupDisplayHandler;
