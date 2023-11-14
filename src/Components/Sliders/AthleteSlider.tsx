import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
const settingsNoModules = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  dotsClass: "button__bar",
  arrows: false,
};
export default class AthleteSlider extends Component {
  render() {
    return (
      <div className="slider">
        <Slider {...settingsNoModules}>
          <div className="section-right">
            <div className="sub-header">
              <div>
                <div className="number-text">01</div>
                <div className="number-underline" />
              </div>
              CONNECTION
            </div>
            <div className="desc">
              Connect with coaches directly, you can ping coaches to view
              profile.
            </div>
          </div>
          <div className="section-right">
            <div className="sub-header">
              <div>
                <div className="number-text">02</div>
                <div className="number-underline" />
              </div>
              COLLABORATION
            </div>
            <div className="desc">
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </div>
          </div>
          <div className="section-right">
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
        </Slider>
      </div>
    );
  }
}
