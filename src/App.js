import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "./App.css";
import RupeeNote from "./assets/500_rupee_note.JPG";
import BAG from "./assets/BAG.jpeg.jpg";
import BallPen from "./assets/Ball Pen.jpg";
import CottonShawl from "./assets/Cotton Shawl.jpg";
import EyeGlasses from "./assets/Eye glasses.jpg";
import Ford from "./assets/Ford Ecosport.jpg";
import Guitar from "./assets/guitar.jpg";
import HeroHonda from "./assets/HeroHondaSplendor.jpg";
import IDCard from "./assets/ID Card.jpg";
import KeyChain from "./assets/KeyChain.jpg";
import Paracetamol from "./assets/Paracetamol tablets.jpeg";
import RubiksCube from "./assets/Rubiks Cube.jpg";
import SeasonBall from "./assets/Season Ball.jpg.JPG";
import Shoes from "./assets/Shoes.jpg";
import SilverRing from "./assets/Silver ring .PNG";
import TissusePaper from "./assets/Tissuepaper .jpeg";
import Wallet from "./assets/Wallet.jpg";
import WaterBottle from "./assets/Water bottle.jpg";
import WristWatch from "./assets/Wristwatch.jpg";

function App() {
  const [index, setIndex] = useState(0);

  const imageObjects = [
    { name: "500 Rupee Note (Final Object)", url: RupeeNote },
    { name: "BAG", url: BAG },
    { name: "Ball Pen", url: BallPen },
    { name: "Cotton Shawl", url: CottonShawl },
    { name: "Eye Glasses", url: EyeGlasses },
    { name: "Ford", url: Ford },
    { name: "Guitar", url: Guitar },
    { name: "Hero Honda", url: HeroHonda },
    { name: "ID Card", url: IDCard },
    { name: "KeyChain", url: KeyChain },
    { name: "Paracetamol", url: Paracetamol },
    { name: "Rubik's Cube", url: RubiksCube },
    { name: "Season Ball", url: SeasonBall },
    { name: "Shoes", url: Shoes },
    { name: "Silver Ring", url: SilverRing },
    { name: "Tissue Paper", url: TissusePaper },
    { name: "Wallet", url: Wallet },
    { name: "Water Bottle", url: WaterBottle },
    { name: "Wrist Watch", url: WristWatch }
  ];

  useEffect(() => {
    const preloadImages = () => {
      imageObjects.forEach((imageObject) => {
        const img = new Image();
        img.src = imageObject.url;
      });
    };

    preloadImages();
  }, []);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imageObjects.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) =>
        prevIndex === 0 ? imageObjects.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
      <>
        <div className="heading">STS Objects (Group-03)</div>

        <div className="slider" {...handlers}>
          <AnimatePresence initial={false}>
            <motion.img
                key={index}
                src={imageObjects[index].url}
                alt={imageObjects[index].name}
                className="slider-image"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            />

          </AnimatePresence>
          <div
              className="overlay-text"
              style={{
                color:
                    imageObjects[index].name === "500 Rupee Note (Final Object)" ? "green" : "#fff",
                backgroundColor:
                    imageObjects[index].name === "500 Rupee Note (Final Object)"
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(0,0,0,0.7)"
              }}
          >
            {imageObjects[index].name}
          </div>
          <button onClick={prevImage} className="prev-button">
            ‹
          </button>
          <button onClick={nextImage} className="next-button">
            ›
          </button>
        </div>
      </>
  );
}

export default App;
