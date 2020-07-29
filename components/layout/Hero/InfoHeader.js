import React from "react";
import styled from "@emotion/styled";
import Search from "../Hero/Search"
import Slider from "react-slick";

const Info= styled.div`
        left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 20vh;
    z-index: 100057;
    p{
        color:white;
        text-align:center
    }

    h2{
        color:white;
        text-align:center;
        font-size:2.8rem !important;
        margin-bottom:0.4rem
    }
`
const InfoHeader = () => {
  return (
    <Info className="container  grid-lg">
       <h2>Find Your Dream Home</h2>
       <p>From as low as $10 per day with limited time offer discounts.</p>
       <Search></Search>
     </Info>
  );
};

export default InfoHeader;
