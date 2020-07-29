import React from "react";
import styled from "@emotion/styled";

const Button = (props) => {
  const Button = styled.a`
    border: 0px;
  
   


    &.btn-red {
      background-color: #009bcf ;
      color: white !important;

      &:hover {
        background-color: #009bcf ;
      }
    }

    &.btn-blue {
      background-color: #009bcf ;
      color: white !important;

      &:hover {
        background-color: #009bcf ;
      }
    }


    &.btn {
      border: 0px;
      position: relative;
      font-size: ${props.fontSize + "rem" || "1rem"};
    line-height: ${props.fontSize * 11 + "px "};
    margin-right: ${props.marginRight || "0rem"};
    margin-left: ${props.marginLeft || "0rem"};
    padding: ${props.padding || "0rem"};
    padding-left: ${props.paddingLeft || "0.8rem"} !important;
    padding-right: ${props.paddingRight || "0.8rem"} !important;
    padding-top: ${props.paddingTop || "0.5rem"} !important;
    padding-bottom: ${props.paddingBottom || "0.5rem"} !important;
    height:auto;
     }
   
    &.btn-white {
      background-color: white;
      color: var(--red) !important;

      &:hover {
        background-color: #f1f1f1;
      }
    }

    &.pointer {
      &:before {
        background-color: #ff5a5f;
        content: "";
        height: 20px;
        margin-left: 5px;
        position: absolute;
        top: 18px;
        width: 20px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        z-index: -1;
      }
    }
    i {
      margin-right: 5px;
      font-size: 10px;
      line-height: 190px;
      position: relative;
      top: -1px;
    }

  `;

  const container_buttona = styled.span``;

 

  return (
    <Button href="" className={`btn ${props.buttonType}`}>
    {props.children}
  </Button>
  );
};

export default Button;
