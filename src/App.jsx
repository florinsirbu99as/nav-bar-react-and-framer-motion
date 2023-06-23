import { motion } from "framer-motion";
import { useState } from "react";
import Start from "./components/Start";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";

function App() {
  const [activeButton, setActiveButton] = useState("button1");
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setBackgroundPosition(
      buttonId === "button1" ? 0 : buttonId === "button2" ? 100 : 200
    );
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-center justify-center w-96 bg-[#FFFF] rounded-lg">
        <nav className="flex flex-row w-full justify-between relative">
          <motion.button
            className="w-32 h-12 flex items-center justify-center rounded-lg"
            id="button1"
            onClick={() => handleButtonClick("button1")}
            style={{
              position: "relative",
              zIndex: 2,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              style={{
                color:
                  activeButton === "button1" && backgroundPosition === 0
                    ? "#ffffff"
                    : "#000000",
              }}
            >
              Homepage
            </motion.span>
          </motion.button>

          <motion.button
            className="w-32 h-12 flex items-center justify-center"
            id="button2"
            onClick={() => handleButtonClick("button2")}
            style={{ position: "relative", zIndex: 2 }}
          >
            <motion.span
              style={{
                color:
                  activeButton === "button2" && backgroundPosition === 100
                    ? "#ffffff"
                    : "#000000",
              }}
            >
              Products
            </motion.span>
          </motion.button>

          <motion.button
            className="w-32 h-12 flex items-center justify-center"
            id="button3"
            onClick={() => handleButtonClick("button3")}
            style={{ position: "relative", zIndex: 2 }}
          >
            <motion.span
              style={{
                color:
                  activeButton === "button3" && backgroundPosition === 200
                    ? "#ffffff"
                    : "#000000",
              }}
            >
              About us
            </motion.span>
          </motion.button>

          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "128px",
              height: "100%",
              background: "rgb(2 6 23)",
              zIndex: 1,
              pointerEvents: "none",
              borderRadius: "8px",
            }}
            initial={{ x: 0 }}
            animate={{
              x: `${backgroundPosition}%`,
              transition: { duration: 0.5 },
            }}
          />
        </nav>

        {activeButton === "button1" && (
          <div className="w-96 p-5">
            <Start />
          </div>
        )}

        {activeButton === "button2" && (
          <div className="w-96 p-5">
            <Products />
          </div>
        )}

        {activeButton === "button3" && (
          <div className="w-96 p-5">
            <AboutUs />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
