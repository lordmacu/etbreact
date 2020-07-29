import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../../ui/Button";

const FormSearch = styled.form`
  position: relative;

  .input_search {
    background-color: #f7f7f7;
    border: none;
    border-radius: 25px;
    height: 50px;
    padding-left: 30px;
    padding-right: 50px;
    &:focus {
      border: 0px;
      outline: -webkit-focus-ring-color auto 00px;
    }
  }

  .search-button {
    border: 0px;
    background-color: transparent;
    position: absolute;
    right: 10px;
    top: 8px;
    padding: 5px;
  }
`;

const HeaderTag = styled.header`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color:#224b7f;

  z-index: 1000;
  position: fixed;
  top: 0px;
  margin-left: 0px;
  width: 100%;
  left: 0px;

  transition: background-color 0.5s ease;

  .navbar-section {
    .btn-link {
      color: #484848;
      line-height: 1.2;
    }

    .navbar-brand {
      margin-right: 1.5rem;
      span {
        position: relative;
        bottom: 15px;
        margin-left: 10px;
        font-size: 1rem;
      }
    }
  }


  &.static_navbar {
    .navbar-section {
      a {
        color: white;
      }
      .btn-link {
        color: white !important;
      }

      .btn-red {
        background-color: white;
        color: #ff5a5f !important;
      }
    }
    border-bottom: 1px solid #ffffff26;
    -webkit-box-shadow: -1px 7px 5px 0px rgba(0,0,0,0.1);
-moz-box-shadow: -1px 7px 5px 0px rgba(0,0,0,0.1);
box-shadow: -1px 7px 5px 0px rgba(0,0,0,0.1);
    .darklogo{
      display:none
    }

    .lightlogo{
      display:block

    }
  }

  &.fixed_navbar {
    z-index: 1000;
    -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.09);
    -o-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.09);
    background-color: white;

    .navbar-section {
    }

    .darklogo{
      display:block
    }

    .lightlogo{
      display:none

    }
  }

  @media only screen and (max-width: 600px) {
 .linksMenu{
   display:none
 }
 padding:10px;

 .navbar-section{
 
  a{
    
  } 

  .btn-blue{
    margin-top:10px;
  }
  img{

  }
 }
}
`;

const DinamicNavBar = styled.div`
 
`;

const Header = () => {
  useEffect(() => {
    window.onscroll = function () {
      scrollDectector();
    };
  });

  function scrollDectector() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document
        .getElementById("header-general")
        .classList.remove("static_navbar");
      document.getElementById("header-general").classList.add("fixed_navbar");
    } else {
      document.getElementById("header-general").classList.add("static_navbar");
      document
        .getElementById("header-general")
        .classList.remove("fixed_navbar");
    }
  }

  return (
    <>
       <HeaderTag className="navbar  static_navbar" id="header-general">
          <section className="navbar-section">
            <a href="/" className="navbar-brand">
            <img src="static/img/logoetb.png" className="darklogo" />
            <img src="static/img/logoetbw.png"  className="lightlogo" />
  
            </a>
 
          </section>
          <section className="navbar-section ">
            <a href="/internet_fibra_telefonia_bogota#fibra_internet_telefonia" className="btn btn-link linksMenu">
            Internet Fibra + Telefonìa
            </a>
            <a href="/internet_telefonia_bogota#cobre_internet_telefonia" className="btn btn-link linksMenu">
            Internet + Telefonìa 
            </a>
            <a href="/internet_fibra_telefonia_television_bogota#fibra_internet_telefonia_tv" className="linksMenu btn btn-link">
            Internet + Telefonìa + Television
            </a>
            
            <Button buttonType="btn-blue" fontSize="0.8">
              <i className="icon icon-plus"></i> Contratar
            </Button>
          </section>
        </HeaderTag>
    </>
  );
};

export default Header;
