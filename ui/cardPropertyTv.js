import React from "react";
import styled from "@emotion/styled";

const CardIndividual = styled.article`
  .containerButtonPidelo {
    text-align: center;
    margin-top: 20px;
    button {
      margin: auto;
      font-size: 1rem;
      font-weight: 700;
    }
  }

  .discount {
    background: #009bcf;
    color: white;
    border-radius: 30px;
    height: 50px;
    width: 50px;
    font-size: 20px;
    display: inline-block;
    line-height: 18px;
    text-align: center;
    font-size: 16px;
    margin-right: 7px;
    position: absolute;
    top: -8px;
    padding-top: 7px;
    right: -20px;
    font-weight: bold;
    @media only screen and (max-width: 600px) {
 
      right: 0px;

}
  }

  .promotion {
    border: 1px solid #dedede;
    border-radius: 30px;
    margin: 15px;
    transition: box-shadow 500ms;
    position: relative;
    margin-top: 50px;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 1px 0px 11px 5px rgba(214, 214, 214, 1);
      -moz-box-shadow: 1px 0px 11px 5px rgba(214, 214, 214, 1);
      box-shadow: 1px 0px 11px 5px rgba(214, 214, 214, 1);
    }
    .badgeItem {
      background-color: #ff5c39;
      color: white;
      width: 320px;
      border-top-left-radius: 20px;
      border-bottom-right-radius: 20px;
      padding-left: 20px;
      font-size: 1.4rem;
      font-weight: 700;

      &.blue {
        background-color: #009bcf;
      }
    }
  }

  .body {
    padding: 20px;
    position: relative;
    padding-top: 10px;
    .typePromotion {
      top: 60px;
      position: absolute;
      right: 0;
      background-color: #f2c75c;
      color: white;
      font-weight: 700;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .price {
      font-size: 30px;
      font-weight: 700;
    }
    .month {
      color: #ababab;
    }

    .planPrice {
      background: #efefef;
      display: block;
      width: fit-content;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 10px;
      &:hover {
        background: #efefefa6;
      }
    }

    .downSpeed {
      font-size: 0.7rem;
      text-align: center;
    }
    .containerMb {
      display: block;
      text-align: center;
      position: relative;
      img {
        width: 100px;
        margin: auto;
        @media only screen and (max-width: 600px) {
 
 width: 100%;

}
      }
      p {
        top: 5px;
        position: absolute;
        /* left: 41%; */
        font-size: 24px;
        font-weight: 800;
        color: #009bcf;
        width: 100%;
      }
    }

    .containerCall {
      display: block;
      text-align: center;
      position: relative;
      img {
        width: 60px;
      }
      p {
        top: 5px;
        position: absolute;
        /* left: 41%; */
        font-size: 24px;
        font-weight: 800;
        color: #009bcf;
        width: 100%;
      }
    }

    .description {
      margin-top: 45px;

      .discount {
        background-color: #224b7f;
        color: white;
        text-align: center;
      }

      ul {
        list-style: none;
        margin-top: 0px;
      }
      button {
      }

      li {
        font-size: 0.8em;
        text-align: center;
        font-weight: 300;
      }
    }
  }

  .overlay {
    background: #eaeaea91;
    width: 100%;
    height: 100%;
    z-index: 100;
    position: absolute;

    border-radius: 30px;
  }

  position: relative;

  .gold {
    background-color: #daac50 !important;
    background: #daac50 !important;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 700;
    color: white;
    border: 0px !important;
  }

  .silver {
    background-color: #c0c0c0 !important;
    background: #c0c0c0 !important;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 700;
    color: white;
    border: 0px !important;
  }

  .bronze {
    background-color: #cd7f32 !important;
    background: #cd7f32 !important;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 700;
    color: white;
    border: 0px !important;
  }
  .extra {
    padding-top: 30px;
    text-align:center;
    padding-bottom: 20px;
    img{
      margin-top:10px;
      margin:auto;
      width:100%
    }
    .hbo{
      margin-bottom:10px;
    }
  }

  .tvextra {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    text-align: center;
    span {
      background: #ff5c39;
      color: white;
      padding-left: 5px;
      padding-right: 5px;
      border-radius: 10px;
      margin-left: 5px;
      margin-right: 5px;
      display: inline-block;
      margin-bottom: 5px;
    }
  }
`;

const CardProperty = (props) => {
  return (
    <CardIndividual>
      {!props.item.stracts[props.stract] ? (
        <div className="overlay"></div>
      ) : null}
      <div className={"promotion"}>
        {props.item.dcto > 0 ? (
          props.item.stracts[props.stract] ? (
            <span className="discount">{props.item.dcto}% Dcto</span>
          ) : null
        ) : null}

        <div className={"badgeItem " + props.item.header}>
          {props.item.speed}
          {props.item.promotionMonth ? (
            <small> {props.item.promotionMonth}</small>
          ) : null}
        </div>
        <div className="body">
          <div className="typePromotion">{props.item.type}</div>
          <div className="priceCard">
            <span className="price">
              {props.item.stracts[props.stract]
                ? props.item.stracts[props.stract]["priceMotion"]
                : null}
            </span>
            /<span className="month">{props.item.monthsPromotion}</span>
            {props.item.stracts[props.stract] ? (
              <p className="planPrice">
                {props.item.stracts[props.stract]["price"] != 0 ? (
                  <span>
                    Tarifa plena
                    <b> {props.item.stracts[props.stract]["price"]}</b>
                  </span>
                ) : null}
              </p>
            ) : null}
            <div className="description">
              <div className="columns">
                {props.item.services.map((item, key) => (
                  <div
                    className={
                      props.item.services.length == 2 ? "col-6" : "col-4"
                    }
                    key={key}
                  >
                    <div className="containerMb">
                      {item.plan > 0 ? <p>{item.plan}</p> : null}
                      {item.type == "PHONE" ? (
                        <div className="containerCall">
                          <img src={item.img} />
                        </div>
                      ) : (
                        <img src={item.img} />
                      )}
                    </div>

                    <p className="downSpeed">{item.promotionTex}</p>
                  </div>
                ))}
                <div className={"col-12 " + props.plan}>PLAN {props.plan}</div>
                <div className="col-12 extra">
                {props.plan=="gold" ?  <img src="/static/img/hbo6.png" className="hbo" /> : null}
                <img src="/static/img/tvextra.png" />
               
             
                </div>
                <div className="col-12 tvextra">
                  <p>
                    {props.item.featuresTv.map((item, key) => (
                      <span key={key}>{item}</span>
                    ))}
                  </p>
                </div>
                <div className="col-12">
                  <ul>
                    {props.item.features.map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="col-12 containerButtonPidelo">
                  <button className="btn btn-orange">Pídelo Aquí</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardIndividual>
  );
};

export default CardProperty;
