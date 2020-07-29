import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --red: #ff5a5f;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #da552f;
            --organic-arrow-color: white;
          }
          a {
            color: #484848;
            &:visited {
              color: #484848;
            }
            &:hover {
              color: #040404;
            }
          }

          .awssld__controls {
            z-index: 1000000;
          }

          .btn {
            border-radius: 20px;
            padding-left: 20px;
            padding-right: 20px;
          }

          body {
            background-color: white;
            color: #224b7f;
          }

          :focus {
            outline: -webkit-focus-ring-color auto 0px;
          }
          button {
            cursor: pointer;
          }
          .form-group {
            input {
              border-radius: 20px;
              padding-top: 10px;
              height: auto;
              padding-bottom: 10px;
              padding-left: 20px;
              padding-right: 20px;
            }

            select {
              border: 0.05rem solid #bcc3ce;
              border-radius: 20px;
              height: auto !important;
              padding-top: 10px !important;
              padding-bottom: 10px !important;
            }
          }

          .btn-orange {
            background-color: #f2c75c;
            color: white;
            border-color: #f2c75c;
            &:hover {
              background-color: #224b7f;
            }

            &:active {
              background-color: #224b7f;
            }
            &:focus {
              background-color: #224b7f;
            }
          }
          .slick-next:before,
          .slick-prev:before {
            color: #000;
            @media only screen and (max-width: 600px) {
 
 display:none !important
}
          }

          .slick-prev, .slick-next{
            display:none !important
          }
          .slick-prev:before {
            content: " ";
            background-image: url(/static/img/back.png);
            width: 30px;
            height: 100px;
            display: block;
            position: absolute;
            left: -20px;
            background-size: 100%;
            background-repeat: no-repeat;
          }
          .slick-next:before {
            content: " ";
            background-image: url(/static/img/next.png);
            width: 30px;
            height: 100px;
            display: block;
            position: absolute;
            right: -20px;
            background-size: 100%;
            background-repeat: no-repeat;
          }
          html {
  scroll-behavior: smooth;
}
body{
  padding-bottom:100px;
}
@media only screen and (max-width: 600px) {
 
  .selectorStract{
  padding-left: 10px;
    padding-right: 10px;
    button{
      margin-bottom:10px !important;
      border-radius:30px !important;
      margin-left:5px  !important;
      margin-right:5px !important;
    }
}

.container-left-image{
  display:none
}
}


        `}
      ></Global>

      <Head>
        <title>Product Hunt Firebase y Next.js</title>

        <link href="/static/css/responsive.css" rel="stylesheet" />
        <link href="/static/css/icons.css" rel="stylesheet" />

   

 
 
      </Head>
      <Header />
     
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
