import React, { Component } from "react";
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
        </Slider>
      </div>
    );
  }
}
