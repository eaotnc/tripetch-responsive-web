import { useEffect, useState } from "react";

import "./App.scss";
import rugby from "./assets/rugby-desktop.png";
import rugbyTablet from "./assets/rugby-tablet.png";
import rugbyMobile from "./assets/rugby-mobile.png";

import bass from "./assets/bass-desktop.png";
import bassTablet from "./assets/bass-tablet.png";
import bassMobile from "./assets/bass-mobile.png";
import AthleteSlider from "./Components/Sliders/AthleteSlider";
import { AthletePcAndTabletContent } from "./Components/AthletePcAndTabletContent";
import PlayersPcAndTabletContent from "./Components/PlayersPcAndTabletContent";

const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1920;

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerWidth,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerWidth,
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderRugbyImageByScreenSize = () => {
    if (windowSize.width >= DESKTOP_WIDTH) {
      return <img className="image-left" src={rugby} />;
    } else if (
      windowSize.width >= TABLET_WIDTH &&
      windowSize.width < DESKTOP_WIDTH
    ) {
      return <img className="image-left" src={rugbyTablet} />;
    }
  };
  const renderBassImageByScreenSize = () => {
    if (windowSize.width >= DESKTOP_WIDTH) {
      return <img className="image-right" src={bass} />;
    } else if (
      windowSize.width >= TABLET_WIDTH &&
      windowSize.width < DESKTOP_WIDTH
    ) {
      return <img className="image-right" src={bassTablet} />;
    }
  };

  return (
    <div>
      <div className="content">
        {renderRugbyImageByScreenSize()}
        <div className="main-header-right">ATHLETS</div>
        {windowSize.width < TABLET_WIDTH && (
          <img className="image-left" src={rugbyMobile} />
        )}
        {windowSize.width >= TABLET_WIDTH ? (
          <AthletePcAndTabletContent />
        ) : (
          <AthleteSlider />
        )}
      </div>

      <div className="content">
        {renderBassImageByScreenSize()}
        <div className="main-header-left">PLAYERS</div>
        {windowSize.width < TABLET_WIDTH && (
          <img className="image-right" src={bassMobile} />
        )}

        {windowSize.width >= TABLET_WIDTH ? (
          <PlayersPcAndTabletContent />
        ) : (
          <AthleteSlider />
        )}
      </div>
    </div>
  );
}

export default App;
