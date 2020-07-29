import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

const ContainerSlider = styled.div`
  .awssld__controls__arrow-right {
    &::after {
      background-color: white !important;
    }
    &::before {
      background-color: white !important;
    }
  }
  .awssld__controls__arrow-left {
    &::after {
      background-color: white !important;
    }
    &::before {
      background-color: white !important;
    }
  }

  .sliderImages {
    height: 70vh;
  }



  .awssld__content {
    &::after {
      background-image: -moz-linear-gradient(
        -36deg,
        rgb(62, 62, 165) 0%,
        rgb(255, 90, 95) 100%
      );
      background-image: -webkit-linear-gradient(
        -36deg,
        rgb(62, 62, 165) 0%,
        rgb(255, 90, 95) 100%
      );
      background-image: -ms-linear-gradient(
        -36deg,
        rgb(62, 62, 165) 0%,
        rgb(255, 90, 95) 100%
      );
      left: 0;
      opacity: 0.902;
      position: absolute;
      right: 0;
      content: "";
      top: 0;
      bottom: 0;
    }
  }
`;

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <ContainerSlider>
        <AutoplaySlider
          className="sliderImages"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          media={[
            {
              source:
                "https://grandetest.com/theme/findhouse-html/images/home/2.jpg",
            },
            {
              source:
                "https://grandetest.com/theme/findhouse-html/images/home/2.jpg",
            },
            {
              source:
                "https://grandetest.com/theme/findhouse-html/images/home/2.jpg",
            },
          ]}
        />
      </ContainerSlider>
    </>
  );
};

export default Slider;
