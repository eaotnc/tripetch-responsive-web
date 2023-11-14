import { useEffect, useState } from "react";

import "./App.scss";
import rugby from "./assets/rugby-desktop.png";
import rugbyTablet from "./assets/rugby-tablet.png";
import rugbyMobile from "./assets/rugby-mobile.png";

import bass from "./assets/bass-desktop.png";
import bassTablet from "./assets/bass-tablet.png";
import bassMobile from "./assets/bass-mobile.png";
import AthleteSlider from "./Components/Sliders/AthleteSlider";

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
    if (windowSize.width >= 1920) {
      return <img className="image-left" src={rugby} />;
    } else if (windowSize.width > 720 && windowSize.width <= 1920) {
      return <img className="image-left-tablet" src={rugbyTablet} />;
    }
  };
  const renderBassImageByScreenSize = () => {
    if (windowSize.width >= 1920) {
      return <img className="image-right" src={bass} />;
    } else if (windowSize.width > 720 && windowSize.width <= 1920) {
      return <img className="image-right-tablet" src={bassTablet} />;
    }
  };

  const renderAthletePcAndTabletContent = () => {
    return (
      <>
        <div className="section-right">
          <div className="sub-header">
            <div>
              <div className="number-text">01</div>
              <div className="number-underline" />
            </div>
            CONNECTION
          </div>
          <div className="desc">
            Connect with coaches directly, you can ping coaches to view profile.
          </div>
        </div>
        <div className="section-right second-color">
          <div className="sub-header">
            <div>
              <div className="number-text">02</div>
              <div className="number-underline" />
            </div>
            COLLABORATION
          </div>
          <div className="desc">
            Work with other student athletes to increase visability. When you
            share and like other players videos it will increase your visability
            as a player. This is the team work aspect to Surface 1.
          </div>
        </div>
        <div className="section-right third-color">
          <div className="sub-header">
            <div>
              <div className="number-text">03</div>
              <div className="number-underline white" />
            </div>
            GROWTH
          </div>
          <div className="desc">
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc
          </div>
        </div>
      </>
    );
  };

  const renderPlayersPcAndTabletContent = () => {
    return (
      <>
        <div className="section-left">
          <div className="sub-header">
            <div>
              <div className="number-text">01</div>
              <div className="number-underline" />
            </div>
            CONNECTION
          </div>
          <div className="desc">
            Connect with talented athlete directly, you can watch their skills
            through video showreels directly from Surface 1.
          </div>
        </div>
        <div className="section-left second-color">
          <div className="sub-header">
            <div>
              <div className="number-text">02</div>
              <div className="number-underline" />
            </div>
            COLLABORATION
          </div>
          <div className="desc">
            Work with recruiter to increase your chances of finding talented
            athlete.
          </div>
        </div>
        <div className="section-left bg-black">
          <div className="sub-header">
            <div>
              <div className="number-text text-white">03</div>
              <div className="number-underline " />
            </div>
            GROWTH
          </div>
          <div className="desc text-white">
            Save your time, recruit proper athlets for your team.
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="text-black">
      {windowSize.width}
      <div className="content">
        {renderRugbyImageByScreenSize()}
        <div className="main-header-right">ATHLETS</div>
        {windowSize.width < 720 && (
          <img className="image-left-mobile" src={rugbyMobile} />
        )}
        {windowSize.width > 720 ? (
          renderAthletePcAndTabletContent()
        ) : (
          <AthleteSlider />
        )}

        <div style={{ width: "500px" }}></div>
      </div>

      <div className="content">
        {renderBassImageByScreenSize()}
        <div className="main-header-left">PLAYERS</div>
        {windowSize.width < 720 && (
          <img className="image-right-mobile" src={bassMobile} />
        )}

        {windowSize.width > 720 ? (
          renderPlayersPcAndTabletContent()
        ) : (
          <AthleteSlider />
        )}
      </div>
    </div>
  );
}

export default App;
