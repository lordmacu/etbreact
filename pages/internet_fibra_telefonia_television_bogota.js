import Head from "next/head";
import Layout from "../components/layout/Layout";
import InfoHeader from "../components/layout/Hero/InfoHeader";
import Slider from "react-slick";
import CardPorperty from "../ui/cardProperty";
import CardPropertyTv from "../ui/cardPropertyTv";

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const ContainerSticks = styled.section`
  padding-right: 100px;
  padding-left: 100px;
`;

const Banner = styled.section`
  .container-right-image {
    img {
      width: 100%;
    }
  }

  background: #224b7f;
  /* height: 60vh; */
  padding-top: 90px;
  padding-bottom: 30px img {
    width: 100%;
  }

  .container-left-image {
    position: relative;
    img {
      overflow: auto;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }
  position: relative;

  .bannerInner {
    background-color: #204675;
    padding-top: 10px;
    position: relative;
    background-size: 40px;
    &::before {
    }
  }
`;

const FirstSection = styled.section`
  margin-top: 50px;
  padding-top:30px;
  h1 {
    text-align: center;
  }
  .orange {
    color: #fc7347;
  }
  .blue {
    color: #009bcf;
  }
  h1 {
    color: #224b7f;
  }

  .selectorStract {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 20px;
    .active {
      background-color: #009bcf !important;
      border-color: #009bcf !important;
      color: white !important;

      &.gold {
        background-color: #daac50 !important;
        background: #daac50 !important;
        font-size: 1.3rem;
        text-align: center;
        font-weight: 700;
        color: white;
        border: 0px !important;
      }

      &.silver {
        background-color: #c0c0c0 !important;
        background: #c0c0c0 !important;
        font-size: 1.3rem;
        text-align: center;
        font-weight: 700;
        color: white;
        border: 0px !important;
      }

      &.bronze {
        background-color: #cd7f32 !important;
        background: #cd7f32 !important;
        font-size: 1.3rem;
        text-align: center;
        font-weight: 700;
        color: white;
        border: 0px !important;
      }
    }
    .btn-group {
      .btn {
        background-color: white;
        color: #009bcf;
        border-color: #009bcf;
        font-size: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: auto;
      }
    }
  }
`;

const CobreArray = [
  {
    header: "blue",
    slug: "internet_3mb_llamadas_ilimitadas",
    speed: "3MB",
    promotionMonth: "",
    stracts: {
      "C1-2": {
        priceMotion: "$47.900",
        price: 0,
      },
      C3: {
        priceMotion: "$56.900",
        price: 0,
      },
      C4: {
        priceMotion: "$64.900",
        price: 0,
      },
      "C5-6": {
        priceMotion: "$75.900",
        price: 0,
      },
    },
    monthsPromotion: " Primer mes sin cobro",
    type: "Hogares Cobre",
    dcto: "0",
    services: [
      {
        plan: "3",
        promotionTex: "Hasta 3 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },

      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 800 kBPS",
      "Equipos Recomendados 1 Dispositivos",
      "Descarga una canción (7 Megas) 20 segundos",
      "Descarga de un juego (1 Gb) 35 minutos",
      "Descarga una pelicula HD (4 Gb) 2 horas",
    ],
  },
  {
    header: "orange",

    slug: "internet_6mb_llamadas_ilimitadas",
    speed: "6MB",
    promotionMonth: "",
    stracts: {
      "C1-2": {
        priceMotion: "$49.900",
        price: 0,
      },
      C3: {
        priceMotion: "$59.900",
        price: 0,
      },
      C4: {
        priceMotion: "$66.900",
        price: 0,
      },
      "C5-6": {
        priceMotion: "$77.900",
        price: 0,
      },
    },
    monthsPromotion: " Primer mes sin cobro",
    type: "Hogares Cobre",
    dcto: "0",
    services: [
      {
        plan: "6",
        promotionTex: "Hasta 6 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },

      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 800 kBPS",
      "Equipos Recomendados 3 Dispositivos",
      "Descarga una canción (7 Megas) 12 segundos",
      "Descarga de un juego (1 Gb) 24 minutos",
      "Descarga una pelicula HD (4 Gb) 1 hora 30 minutos",
    ],
  },
  {
    header: "blue",

    slug: "internet_10mb_llamadas_ilimitadas",
    speed: "10MB",
    promotionMonth: "",
    stracts: {
      "C1-2": {
        priceMotion: "$54.450",
        price: 0,
      },
      C3: {
        priceMotion: "$62.900",
        price: 0,
      },
      C4: {
        priceMotion: "$72.900",
        price: 0,
      },
      "C5-6": {
        priceMotion: "$85.900",
        price: 0,
      },
    },
    monthsPromotion: " Primer mes sin cobro",
    type: "Hogares Fibra",
    dcto: "0",
    services: [
      {
        plan: "10",
        promotionTex: "Hasta 10 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },

      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 800 kBPS",
      "Equipos Recomendados 4 Dispositivos",
      "Descarga una canción (7 Megas) 6 segundos",
      "Descarga de un juego (1 Gb) 14 minutos",
      "Descarga una pelicula HD (4 Gb) 55 minutos",
    ],
  },
];

const FibraArray = [
  {
    header: "blue",

    slug: "internet_30mb_llamadas_ilimitadas_fibra",
    speed: "30MB",
    promotionMonth: "",
    stracts: {
      "1-4": {
        priceMotion: "$40.450",
        price: "$80.000",
      },
    },
    monthsPromotion: " Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },

      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
  },
  {
    header: "orange",

    slug: "internet_50mb_llamadas_ilimitadas_fibra",
    speed: "50mb",
    promotionMonth: "80 MB x 6 meses",
    stracts: {
      "1-4": {
        priceMotion: "$45.450",
        price: "$90.900",
      },
      "5-6": {
        priceMotion: "$53.950",
        price: "$107.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },

      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
  },
  {
    header: "orange",

    slug: "internet_100mb_llamadas_ilimitadas_fibra",
    speed: "100mb",
    promotionMonth: "200 MB x 6 meses",
    stracts: {
      "1-4": {
        priceMotion: "$52.450",
        price: "$104.900",
      },
      "5-6": {
        priceMotion: "$60.950",
        price: "$121.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },

      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
  },
  {
    header: "blue",

    slug: "internet_200mb_llamadas_ilimitadas_fibra",
    speed: "200mb",
    promotionMonth: "",
    stracts: {
      "1-4": {
        priceMotion: "$64.950",
        price: "$129.900",
      },
      "5-6": {
        priceMotion: "$71.950",
        price: "$143.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },

      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
  },
  {
    header: "blue",

    slug: "internet_300mb_llamadas_ilimitadas_fibra",
    speed: "300mb",
    promotionMonth: "",
    stracts: {
      "1-4": {
        priceMotion: "$74.950",
        price: "$149.900",
      },
      "5-6": {
        priceMotion: "$83.450",
        price: "$166.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },

      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
  },
];

const FibraTvArray = [
  {
    header: "blue",

    plan: "bronze",
    slug: "internet_30mb_llamadas_ilimitadas_fibra",
    speed: "30MB",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$64.450",
        price: "$128.900",
      },
    },
    monthsPromotion: " Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "49 CANALES HD",
      "35 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
  {
    header: "orange",
    plan: "bronze",

    slug: "internet_50mb_llamadas_ilimitadas_fibra",
    speed: "50mb",
    promotionMonth: "80 MB x 6 meses",
    stracts: {
      "tv1-4": {
        priceMotion: "$69.450",
        price: "$138.900",
      },
      "tv5-6": {
        priceMotion: "$77.950",
        price: "$155.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "49 CANALES HD",
      "35 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
  {
    header: "orange",
    plan: "bronze",

    slug: "internet_100mb_llamadas_ilimitadas_fibra",
    speed: "100mb",
    promotionMonth: "200 MB x 6 meses",
    stracts: {
      "tv1-4": {
        priceMotion: "$76.450",
        price: "$152.900",
      },
      "tv5-6": {
        priceMotion: "$84.950",
        price: "$169.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "49 CANALES HD",
      "35 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
  {
    header: "blue",
    plan: "bronze",

    slug: "internet_200mb_llamadas_ilimitadas_fibra",
    speed: "200mb",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$88.950",
        price: "$177.900",
      },
      "tv5-6": {
        priceMotion: "$95.950",
        price: "$191.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "49 CANALES HD",
      "35 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
  {
    header: "blue",
    plan: "bronze",

    slug: "internet_300mb_llamadas_ilimitadas_fibra",
    speed: "300mb",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$98.950",
        price: "$197.900",
      },
      "tv5-6": {
        priceMotion: "$107.450",
        price: "$214.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "49 CANALES HD",
      "35 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },

  {
    header: "blue",

    plan: "silver",
    slug: "internet_30mb_llamadas_ilimitadas_fibra",
    speed: "30MB",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$64.450",
        price: "$134.000",
      },
      
    },
    monthsPromotion: " Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "72 CANALES HD",
      "44 STANDARD",
      "10 EMISORAS",
    ],
  },
  {
    header: "orange",
    plan: "silver",

    slug: "internet_50mb_llamadas_ilimitadas_fibra",
    speed: "50mb",
    promotionMonth: "80 MB x 6 meses",
    stracts: {
      "tv1-4": {
        priceMotion: "$72.450",
        price: "$144.900",
      },
      "tv5-6": {
        priceMotion: "$77.950",
        price: "$155.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "72 CANALES HD",
      "44 STANDARD",
      "10 EMISORAS",
    ],
  },
  {
    header: "orange",
    plan: "silver",

    slug: "internet_100mb_llamadas_ilimitadas_fibra",
    speed: "100mb",
    promotionMonth: "200 MB x 6 meses",
    stracts: {
      "tv1-4": {
        priceMotion: "$79.450",
        price: "$158.900",
      },
      "tv5-6": {
        priceMotion: "$87.950",
        price: "$175.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "72 CANALES HD",
      "44 STANDARD",
      "10 EMISORAS",
    ],
  },
  {
    header: "blue",
    plan: "silver",

    slug: "internet_200mb_llamadas_ilimitadas_fibra",
    speed: "200mb",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$91.950",
        price: "$183.900",
      },
      "tv5-6": {
        priceMotion: "$98.950",
        price: "$197.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "72 CANALES HD",
      "44 STANDARD",
      "10 EMISORAS",
    ],
  },
  {
    header: "blue",
    plan: "silver",

    slug: "internet_300mb_llamadas_ilimitadas_fibra",
    speed: "300mb",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$101.950",
        price: "$203.900",
      },
      "tv5-6": {
        priceMotion: "$110.450",
        price: "$220.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "72 CANALES HD",
      "44 STANDARD",
      "10 EMISORAS",
    ],
  },

  {
    header: "blue",

    plan: "gold",
    slug: "internet_30mb_llamadas_ilimitadas_fibra",
    speed: "30MB",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$74.450",
        price: "$150.000",
      },
    },
    monthsPromotion: " Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "80 CANALES HD",
      "54 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
  {
    header: "orange",
    plan: "gold",

    slug: "internet_50mb_llamadas_ilimitadas_fibra",
    speed: "50mb",
    promotionMonth: "80 MB x 6 meses",
    stracts: {
      "tv1-4": {
        priceMotion: "$80.450",
        price: "$160.900",
      },
      "tv5-6": {
        priceMotion: "$88.950",
        price: "$177.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "80 CANALES HD",
      "54 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
  {
    header: "orange",
    plan: "gold",

    slug: "internet_100mb_llamadas_ilimitadas_fibra",
    speed: "100mb",
    promotionMonth: "200 MB x 6 meses",
    stracts: {
      "tv1-4": {
        priceMotion: "$87.450",
        price: "$174.900",
      },
      "tv5-6": {
        priceMotion: "$95.950",
        price: "$191.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],

    featuresTv: [
      "80 CANALES HD",
      "54 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
  {
    header: "blue",
    plan: "gold",

    slug: "internet_200mb_llamadas_ilimitadas_fibra",
    speed: "200mb",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$99.950",
        price: "$199.900",
      },
      "tv5-6": {
        priceMotion: "$106.950",
        price: "$213.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],

    featuresTv: [
      "80 CANALES HD",
      "54 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
  {
    header: "blue",
    plan: "gold",

    slug: "internet_300mb_llamadas_ilimitadas_fibra",
    speed: "300mb",
    promotionMonth: "",
    stracts: {
      "tv1-4": {
        priceMotion: "$109.950",
        price: "$219.900",
      },
      "tv5-6": {
        priceMotion: "$118.450",
        price: "$236.900",
      },
    },

    monthsPromotion: "Mes 1,4,8,12",
    type: "Hogares Fibra",
    dcto: "50",
    services: [
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/mb.jpg",
      },
      {
        plan: "50",
        promotionTex: "Hasta 50 Mbps de bajada",
        type: "INTERNET",
        img: "/static/img/tv.jpg",
      },
      {
        plan: 0,
        promotionTex: "Telefonía Local Ilimitada",
        type: "PHONE",
        img: "/static/img/calls.jpg",
      },
    ],
    features: [
      "Velocidad de Subida 25 Mbps",
      "Equipos Recomendados 10 Dispositivos",
      "Punto cableado 1",
      "Opcional Repetidor WIFI Incluido",
      "Descarga una canción (7 Megas) 2 segundos",
      "Descarga de un juego (1 Gb) 7 minutos",
      "Descarga una pelicula HD (4 Gb) 25 minutos",
    ],
    featuresTv: [
      "49 CANALES HD",
      "35 STANDARD",
      "10 EMISORAS",
      "30 DE MUSICA",
      "1 DECO HD",
    ],
  },
];

export default function Home() {
  const [fibra, setFibra] = useState([]);
  const [stract, setStract] = useState("1-4");

  const [cobre, setCobre] = useState([]);
  const [stractC, setStractC] = useState("C1-2");

  const [fibraTv, setFibraTv] = useState([]);
  const [stractTv, setStractTv] = useState("tv1-4");

  const [tvType, setTvType] = useState(0);

  useEffect(() => {
    setFibra(FibraArray);
    setCobre(CobreArray);
    setFibraTv(FibraTvArray);
    setTvType(0);
  }, []);

  const changeStract = (stractValue) => {
    setStract(stractValue);
  };

  const changeStractC = (stractValue) => {
    setStractC(stractValue);
  };

  const changeStractTv = (stractValue) => {
    setStractTv(stractValue);
  };

  const setTvTypes = (tvtype) => {
    setTvType(tvtype);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Layout>
        <Banner>
          <div className="bannerInner">
            <div className="container grid-xl">
              <div className="columns ">
                <div className="col-6 col-xs-12 container-right-image">
                  <img src="/static/img/leftbanner.png" />
                </div>
                <div className="col-6 col-xs-12 container-left-image">
                  <img src="/static/img/rightbanner.png" />
                </div>
              </div>
            </div>
          </div>
        </Banner>
     
        <FirstSection className="container grid-xl" name="fibra_internet_telefonia_tv" id="fibra_internet_telefonia_tv">
          <h1>
            Television, <span className="orange">Internet y </span>
            <span className="blue">Telefonía</span> FIBRA ÓPTICA
          </h1>
          <div className="columns">
            <div className="col-6 col-xs-12">
              <div className="selectorStract">
                <div className="btn-group">
                  <button
                    className={
                      stractTv == "tv1-4" ? "btn btn-sm active" : "btn btn-sm"
                    }
                    onClick={() => {
                      changeStractTv("tv1-4");
                    }}
                  >
                    Estrato 1 - 2
                  </button>
                  <button
                    className={
                      stractTv == "tv5-6" ? "btn btn-sm active" : "btn btn-sm"
                    }
                    onClick={() => {
                      changeStractTv("tv5-6");
                    }}
                  >
                    Estrato 5 - 6
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 col-xs-12">
              <div className="selectorStract">
                <div className="btn-group">
                  <button
                    className={
                      tvType == 0 ? "btn btn-sm active bronze" : "btn btn-sm"
                    }
                    onClick={() => {
                      setTvTypes(0);
                    }}
                  >
                    Bronze
                  </button>
                  <button
                    className={
                      tvType == 1 ? "btn btn-sm active silver" : "btn btn-sm"
                    }
                    onClick={() => {
                      setTvTypes(1);
                    }}
                  >
                    Silver
                  </button>
                  <button
                    className={
                      tvType == 2 ? "btn btn-sm active gold" : "btn btn-sm"
                    }
                    onClick={() => {
                      setTvTypes(2);
                    }}
                  >
                    Gold
                  </button>
                </div>
              </div>
            </div>
            {tvType == 1 ? (
              <div className="col-12">
                <div className="columns">
                  {fibraTv.map((item, key) =>
                    item.plan == "silver" ? (
                        <div className="col-4 col-xs-12">
                      <CardPropertyTv
                        item={item}
                        key={key}
                        stract={stractTv}
                        plan="silver"
                      />
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ) : null}

            {tvType == 0 ? (
              <div className="col-12">
                <div className="columns">
                  {fibraTv.map((item, key) =>
                    item.plan == "bronze" ? (
                        <div className="col-4 col-xs-12">
                      <CardPropertyTv
                        item={item}
                        key={key}
                        stract={stractTv}
                        plan="bronze"
                      />
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ) : null}

            {tvType == 2 ? (
              <div className="col-12">
                <div className="columns">
                  {fibraTv.map((item, key) =>
                    item.plan == "gold" ? (
                        <div className="col-4 col-xs-12">

                        
                      <CardPropertyTv
                        item={item}
                        key={key}
                        stract={stractTv}
                        plan="gold"
                      />
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </FirstSection>

       
      </Layout>
    </>
  );
}
