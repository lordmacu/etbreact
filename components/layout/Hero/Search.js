import React from "react";
import styled from "@emotion/styled";
import Button from "../../../ui/Button";

const ListSearchButtons = styled.ul`
  border-bottom: none;
  margin: 0 auto;
  text-align: center;
  list-style: none;
  display: table;
  li {
    float: right;
    .white-button {
      background-color: white;
      color: var(--red);
    }
    .red-button {
      background-color: var(--red);
      color: white;
      &:hover {
        color: white;
      }
    }
  }
`;

const SearchBar = styled.div`
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;
  background-color: white;
  margin-top: 30px;
  padding: 20px;
  /* border: 10px solid red; */
  border: 10px solid rgb(255 255 255 / 22%);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;

  .form-group {
    padding-right: 10px;
    padding-left: 10px;
  }

  .button_container {
    margin-top: 10px;
  }
  .col-3 {
    text-align: center;
  }
`;

const Search = () => {
  return (
    <>
      <ListSearchButtons className="nav nav-pills">
        <li className="nav-item">
          <Button
            buttonType="btn-red pointer"
            fontSize="0.8"
            paddingTop="0.6rem"
            paddingBottom="0.6rem"
            marginLeft="0.4rem"
          >
            Alquilar
          </Button>
        </li>
        <li className="nav-item">
          <Button
            buttonType="btn-white"
            fontSize="0.8"
            paddingTop="0.6rem"
            paddingBottom="0.6rem"
            marginRight="0.4rem"
          >
            Comprar
          </Button>
        </li>
      </ListSearchButtons>
      <SearchBar className="columns">
          <div className="col-3">
            <div className="form-group">
            <select className="form-select select-lg">
                <option>Choose an option</option>
                <option>Slack</option>
                <option>Skype</option>
                <option>Hipchat</option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
            <select className="form-select select-lg">
                <option>Choose an option</option>
                <option>Slack</option>
                <option>Skype</option>
                <option>Hipchat</option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <select className="form-select select-lg">
                <option>Choose an option</option>
                <option>Slack</option>
                <option>Skype</option>
                <option>Hipchat</option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <Button
              buttonType="btn-red"
              fontSize="1"
              paddingTop="15px"
              paddingBottom="15px"
            >
              <i className="icon icon-plus"></i> Buscar
            </Button>
          </div>
        </SearchBar>
    </>
  );
};

export default Search;
