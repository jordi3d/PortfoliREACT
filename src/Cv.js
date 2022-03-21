import "./Cv.css";
import React from "react";
import { useState } from "react";
import { idiomes_web, idiomes, llengues } from "./idiomes";
import { formacio_reglada, educacio, cursos } from "./formacio";
import {
  experiencia_professional,
  feines,
  entrevistes_i_conferencies,
  entrevistes,
  conferencies,
} from "./experiencia";
import {
  nom,
  congressos,
  altres,
  afiliacions,
  aficions,
  copyright,
} from "./altres";

export default function Cv() {
  const [language, setLanguage] = useState("CAT");

  function changeLanguage() {
    let tmp = idiomes_web.indexOf(language);
    if (tmp >= idiomes_web.length - 1) tmp = -1;
    let next = idiomes_web[tmp + 1];
    setLanguage(next);
    return next;
  }
  return (
    <div className="cv">
      <header>
        <div id="barraMenu">
          <nav>
            <div id="logo">
              <div className="dropdownbis">
                <div className="dropbtnbis">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="60" height="60" fill="#F4BA07" />
                    <path
                      id="cleft"
                      d="M 30 40
           A 11 10, 0, 0, 1, 30 18
           L 30 38 Z"
                      fill="black"
                    />
                    <rect
                      id="cam"
                      x="30"
                      y="14"
                      width="0"
                      height="10"
                      fill="black"
                    />
                    <path
                      id="cright"
                      d="M 30 40
           A 11 10, 0, 0, 0, 30 18
           L 30 38 Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="dropdown-contentbis">
                  <a
                    href="https://www.jordialonso.com"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    Anar al Blog Veni Vidi Vici
                  </a>
                  <a href="#0bis">Experi&egrave;ncia Professional</a>
                  <a href="#0ter">Entrevistes i Confer&egrave;ncies</a>
                  <a href="#0quad">Educaci&oacute;</a>
                  <a href="#0penta">Altres</a>
                  <a href="#0hexa">Descarregar CV</a>
                </div>
              </div>
            </div>
          </nav>
          <div id="titol"> {nom[0][language]} </div>
          <div id="idioma" onClick={() => changeLanguage()}>
            {language}
          </div>
        </div>
        <div id="separador"> </div>
        <div id="fotoMain"></div>
      </header>
      <section>
        <h1 className="main"> {experiencia_professional[0][language]} </h1>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[0][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a
                href="https://www.youtube.com/watch?v=aPbVrFLgIgE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  El cl&agrave;sico en VR
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                    alt="mediapro"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/clasicoVR.jpg"}
                  alt="Prova de concepte de F&ugrave;tbol en VR des del Santiago Bernab&egrave;u"
                  width="500"
                />
                <figcaption>
                  Prova de concepte de futbol VR. El Cl&agrave;sico 2018
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.mundodeportivo.com/futbol/laliga/20180302/441187363437/la-tecnologia-que-hay-detras-de-laliga-explicada-al-detalle.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Not&igrave;cia a El Mundo Deportivo</h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.youtube.com/watch?v=ZYNbuYREyeE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  La Rosa de Foc 3D
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                    alt="mediapro"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/Larosadefoc.jpg"}
                  alt="Cartell de La Rosa de Foc"
                  width="500"
                />
                <figcaption>Cartell de la pel·l&iacute;cula</figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.live-production.tv/news/4k-8k-arising/mediapro-group-produced-live-3d-concert-portuguese-group-deolinda.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Deolinda 3D des del Coliseu, Lisboa 28/01/2011
                  <img
                    src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                    alt="mediapro"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.youtube.com/watch?v=AlTtevooKGE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Abrunhosa 3D des del Coliseu, Porto 20/11/2010
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                    alt="mediapro"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.youtube.com/watch?v=NU2ZXZFZhY4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Klepth 3D des de Casa da M&ugrave;sica, Porto 30/10/2010
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                    alt="mediapro"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/obvan_ext2.jpg"}
                  alt="Unitat mòbil 3D de Medialuso. Casa da Música (Porto)"
                  width="500"
                />
                <figcaption>
                  Unitat m&ograve;bil 3D de Medialuso a Casa da M&ugrave;sica de
                  Porto
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.youtube.com/watch?v=zEckoGCYMkY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  RIP Curl World Cup of Surfing, Peniche 8-10/10/2010
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                    alt="mediapro"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/RIPCurlPeniche.jpg"}
                  alt="Mundial de Surf a Peniche"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  RIP Curl World Cup of Surfing des de Peniche, Portugal
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.live-production.tv/news/4k-8k-arising/3d-screening-bar%C3%A7a-%E2%80%93-madrid-match-was-big-success.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Futbol 3D Live 10/12/2010
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                    alt="mediapro"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/cartellFutbol3D.jpg"}
                  alt="Cartell de promoci&ograve; del Cl&agrave;sico en 3D"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  Primera retransmissi&ograve; d&apos;El Cl&agrave;sico en 3D en
                  directe
                </figcaption>
              </figure>
            </article>
            <article>
              <a href="#1">
                <h3>Benfica-Sporting de Lisboa 3D 28/11/2009</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img"}
                  alt="Est&aacute;dio da Luz, Lisboa"
                  width="500"
                />
                <figcaption>Primer partit 3D a Portugal</figcaption>
              </figure>
            </article>
            <article>
              <a href="#1">
                <h3>Catalunya-Col&ograve;mbia 3D 28/12/2008</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img"}
                  alt="Nou Camp"
                  width="500"
                />
                <figcaption>
                  Primeres proves de 3D amb c&agrave;meres de cinema
                </figcaption>
              </figure>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[1][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a
                href="https://www.neom.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>NEOM The Line 2020</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/NEOM_theline.jpg"}
                  alt="NEOM The Line"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  Mapa de The Line a NEOM, Nord-oest de l&apos;Ar&agrave;bia
                  Saudita
                </figcaption>
              </figure>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/NEOM_theline2.jpg"}
                  alt="NEOM The Line Detalls"
                  width="500"
                  heigth="375"
                />
                <figcaption>Detalls de The Line a NEOM</figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.youtube.com/watch?v=OLIpvPvQ14E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  The Zone of Hope
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/tzoh.png"}
                  alt="The Zone oh Hope"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  The Zone of Hope v1 per Aig&uuml;es de Barcelona
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://mediaproexhibitions.com/ca/project/messi-challenge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Messi Challenge: sigues Messi per un dia</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/messi10.jpg"}
                  alt="Messi Challenge"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  Messi Challenge a la representaci&oacute; Messi10 de Cirque du
                  Soleil. Setembre 2019
                </figcaption>
              </figure>
            </article>
            <article>
              <a href="#7">
                <h3>BTS Woody Allen&apos;s visit to Spain 2019</h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.neom.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>NEOM Tourism Book &amp; Map 2019</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/NEOM_tourism.jpg"}
                  alt="Book and Tourism map"
                  width="500"
                />
                <figcaption>
                  Primer llibre i mapa tur&iacute;stic de NEOM
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.wtm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>NEOM Immersive 2019</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/NEOM_immersive.jpg"}
                  alt="Interior al World Travel Market de Londres"
                  width="500"
                />
                <figcaption>
                  NEOM Immersive, presentat amb motiu de la fira mundial del
                  turisme de Londres
                </figcaption>
              </figure>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/NEOM_immersive2.jpg"}
                  alt="Stand al World Tourism Expo a Londres"
                  width="500"
                />
                <figcaption>
                  Stand de NEOM a la fira mundial del turisme de Londres
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.neom.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>NEOM Smart City 2019</h3>
              </a>
            </article>
            <article>
              <a
                href="https://mediaproexhibitions.com/ca/project/mep"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>MEP (Messi Experience Park) 2018</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/mep.jpg"}
                  alt="Messi Experience Park"
                  width="500"
                  heigth="375"
                />
                <figcaption>Messi Experience Park a Nanjing, China</figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.youtube.com/watch?v=bKJ9cW0xRuw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  VR Live Gulf League 2018
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/vrlive.jpg"}
                  alt="VR Live Gulf League 2018"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  VR Live: Gulf Fooball League. Dubai, EAU
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.youtube.com/watch?v=5M49dCMpQJw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  AutomaticTV 2014
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/automatictv.jpg"}
                  alt="AutomaticTV"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  AutomaticTV: producci&oacute; autom&agrave;tica de continguts
                  en directe
                </figcaption>
              </figure>
            </article>
            <article>
              <a href="#14">
                <h3>ImmersiveTV 2010</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/immersivetv.jpg"}
                  alt="ImmersiveTV"
                  width="500"
                />
                <figcaption>
                  ImmersiveTV: projecte de recerca nacional
                </figcaption>
              </figure>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/immersivetv2.jpg"}
                  alt="ImmersiveTV #2"
                  width="500"
                />
                <figcaption>
                  &Uacute;s de diferents tecnologies immersives 2D i 3D
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://vimeo.com/41780222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Project FINE 2010
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/ProjectFINE.jpg"}
                  alt="Roll up de ProjectFINE"
                  width="500"
                />
                <figcaption>
                  Andr&egrave;s Iniesta va cedir la seva imatge al projecte de
                  recerca Europeu
                </figcaption>
              </figure>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/FINE_IBC2012.jpg"}
                  alt="IBC2012"
                  width="500"
                />
                <figcaption>
                  Guanyadors de la distinci&oacute; "What Caught My Eye"
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.futbol3d.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Futbol 3D Temporades 2010-11 i 2011-12</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/futbol3d.jpg"}
                  alt="Logo Fútbol 3D"
                />
                <figcaption>
                  Transmissions via sat&egrave;l·lit:
                  <br />
                  FCB-RMA 5-0 29/11/2010 9 posicions de c&agrave;mera 3D i
                  visionat al Palacio de Congresos de Madrid
                  <br />
                  FCB-MAL 4-1 15/01/2011 Visionat a M&agrave;laga
                  <br />
                  ATM-ATH 0-2 30/01/2011 Visionat a Bilbao
                  <br />
                  RMA-FCB 1-1 16/04/2011 Visionat a Imagina
                  <br />
                  RMA-FCB 1-3 10/12/2011 6 c&agrave;meres 3D i visionat a
                  Imagina
                  <br />
                  FCB-VAL 5-1 18/02/2012 Visionat a Val&egrave;ncia
                </figcaption>
              </figure>
            </article>
            <article>
              <a href="#16">
                <h3>APIDIS 2009</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/apidis.jpg"}
                  alt="Logo APIDIS"
                />
              </figure>
            </article>
            <article>
              <a href="#17">
                <h3>2020 3D Media 2008</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/20203DMedia.jpg"}
                  alt="Logo 2020 3D Media"
                />
              </figure>
            </article>
            <article>
              <a href="#18">
                <h3>i3media 2008</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/i3media.png"}
                  alt="Logo i3media"
                  width="250"
                />
              </figure>
            </article>
            <article>
              <a href="#19">
                <h3>IP-racine 2008</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/ipracine.jpg"}
                  alt="Logo IP-racine"
                  width="250"
                />
              </figure>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[2][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a
                href="https://www.thevrara.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>VRARA: The VR/AR Association</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/VRARA.png"}
                  alt="VR/AR Association"
                  width="250"
                />
                <figcaption>Chapter President</figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.sun.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Sun Microsystems</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/sun.jpg"}
                  alt="Sun Microsystems"
                  width="250"
                />
                <figcaption>
                  Technical Account Manager for Strategic Accounts
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.netscape.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Netscape</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/Netscape.png"}
                  alt="Netscape"
                  width="250"
                />
                <figcaption>
                  Enterprise Service Account Manager iPlanet products
                </figcaption>
              </figure>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[3][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a
                href="https://www.esade.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>ESADE Mentor alumnes del M&agrave;ster</h3>
              </a>
            </article>
            <article>
              <a href="#24">
                <h3>
                  <em>La Salle*</em>
                </h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.eram.cat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>ERAM UdG</h3>
              </a>
            </article>
            <article>
              <a href="#26">
                <h3>MSc UPC</h3>
              </a>
            </article>
            <article>
              <a href="#27">
                <h3>Mediapro AutomaticTV</h3>
              </a>
            </article>
            <article>
              <a href="#28">
                <h3>Mediapro 3D</h3>
              </a>
            </article>
            <article>
              <a href="#29">
                <h3>RTVE Catalunya</h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.escac.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>ESCAC Escola Superior de Cinema</h3>
              </a>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[4][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a href="#23">
                <h3>Brainstorm Studio</h3>
              </a>
            </article>
            <article>
              <a href="#23">
                <h3>Softimage 3D</h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.youtube.com/watch?v=Crq3--XXwxc"
                alt="Vídeo demo Accom Elset any 1999 a Broadcat Madrid"
                rel="noopener noreferrer"
              >
                <h3>
                  Accom Elset Live NT
                  <img
                    src={process.env.PUBLIC_URL + "/img/yt20.png"}
                    alt="youtube"
                    style={{ margin: "0px 0px 0px 15px" }}
                  />
                </h3>
              </a>
            </article>
            <article>
              <a href="#25">
                <h3>Avid DS</h3>
              </a>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[5][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a
                href="https://www.thevrara.com/barcelona"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>The VR/AR Association Catalonia Chapter</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/VRARA1.jpg"}
                  alt="Sopar gala VRARA foto1"
                  width="500"
                />
                <figcaption>Sopar de Gala anual durant el MWC</figcaption>
              </figure>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/VRARA3.jpg"}
                  alt="Sopar gala VRARA foto2"
                  width="500"
                />
                <figcaption>Sopar de Gala anual durant el MWC</figcaption>
              </figure>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/VRARA5.jpg"}
                  alt="Una de les sessions trimestrals"
                  width="500"
                />
                <figcaption>
                  Sessi&oacute; trimestral a Can&ograve;drom BCN
                </figcaption>
              </figure>
            </article>
            <article>
              <a href="#23">
                <h3>Promovisa Catalunya</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/promovisa.jpg"}
                  alt="Logo Promovisa"
                />
                <figcaption>
                  Delegat regional per Catalunya i Balears
                </figcaption>
              </figure>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[6][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a href="#31">
                <h3>Glory Day: The mystery of the Sagrada Familia</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/gloryday.jpg"}
                  alt="Caixa CD-ROM de Glory Day"
                  width="500"
                />
                <figcaption>
                  La pel·l&igrave;cula mai no es va acabar, per&agrave; es va
                  editar un CD-ROM
                </figcaption>
              </figure>
            </article>
            <article>
              <a href="#32">
                <h3>Cap&ccedil;alera Sitges Film Festival</h3>
              </a>
            </article>
            <article>
              <a href="#33">
                <h3>Anunci Catalunya M&uacute;sica</h3>
              </a>
            </article>
            <article>
              <a href="#34">
                <h3>Anunci La Agenda</h3>
              </a>
            </article>
            <article>
              <a href="#35">
                <h3>Dobles: Curtmetratge</h3>
              </a>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[7][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a href="#36">
                <h3>
                  HTML5, CSS3, JS, SVG, ReactJS, ThreeJS, Web3D per Portfolio
                  personal
                </h3>
              </a>
            </article>
            <article>
              <a href="#37">
                <h3>
                  SEO, SEM, Wordpress, Python, Keras, PHP, MySQL per webs
                  pròpies
                </h3>
              </a>
            </article>
            <article>
              <a href="#38">
                <h3>
                  HTML5, CSS2, JS, Ajax, jQuery, PHP, MariaDB, krpano (plugin
                  360 per Mediapro)
                </h3>
              </a>
            </article>
            <article>
              <a href="#39">
                <h3>Macromedia Flash per Webs de clients</h3>
              </a>
            </article>
            <article>
              <a href="#40">
                <h3>HTML4, CSS2, JS, PHP per video online a cine.com</h3>
              </a>
            </article>
            <article>
              <a href="#41">
                <h3>HTML4, CSS2, JS per e-commerce a reg2.net</h3>
              </a>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[8][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a
                href="https://www.jordialonso.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Blog Veni Vidi Vici</h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.cine3d.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Blog cine3D.com</h3>
              </a>
            </article>
            <article>
              <a href="#42">Blog cine.com</a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/DougTrumbull_Sitges.jpg"}
                  alt="entrevista a Doug Trumbull"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  Entrevista a Doug Trumbull durant el festival de Sitges 2007
                  per cine.com
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://jordialonso.wordpress.com/2011/02/04/entrevista-a-steve-schklair-ceo-de-3ality-en-ibc-2010/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Entrevista a Steve Schklair, CEO de 3ALITY</h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.elperiodico.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>El Peri&ograve;dico de Catalunya</h3>
              </a>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/Elperiodico1.jpg"}
                  alt="Article#1 El Periódico"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  Article a El Peri&ograve;dico de Catalunya (suplement de
                  tecnologia)
                </figcaption>
              </figure>
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "/img/Elperiodico2.jpg"}
                  alt="Article#2 El Periódico"
                  width="500"
                  heigth="375"
                />
                <figcaption>
                  Article a El Peri&ograve;dico de Catalunya (suplement de
                  tecnologia)
                </figcaption>
              </figure>
            </article>
            <article>
              <a
                href="https://www.3dmagazine.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>3D Magazine</h3>
              </a>
            </article>
            <article>
              <a href="#43">
                <h3>Onda Cero Radio. Mar&ccedil; 2010</h3>
              </a>
            </article>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <h2>{feines[9][language]}</h2>
          </div>
          <div className="dropdown-content">
            <article>
              <a href="#44">
                <h3>
                  Serveis de formaci&ograve; CGI, 3D, XR, web, Presentacions en
                  p&ugrave;blic
                </h3>
              </a>
            </article>
            <article>
              <a href="#45">
                <h3>SEO, SEM, Optimitzaci&ograve; de webs WordPress</h3>
              </a>
            </article>
            <article>
              <a
                href="https://www.openvino.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Blockchain/NFT: Projecte OpenVino.org &amp; OpenCava.org
                  (2017)
                </h3>
              </a>
            </article>
            <article>
              <a href="#46">
                <h3>Crypto: mineria &amp; trading (2013)</h3>
              </a>
            </article>
            <article>
              <a href="#47">
                <h3>Domainer: +1.000 dominis (actualment +100)</h3>
              </a>
            </article>
            <article>
              <a href="#48">
                <h3>VoD: cine.com desc&agrave;rregues legals (1999)</h3>
              </a>
            </article>
            <article>
              <a href="#49">
                <h3>Iberseller e-commerce solutions (1997)</h3>
              </a>
            </article>
            <article>
              <a href="#50">
                <h3>AI: Sistema Expert en PDC-PROLOG/UNIX (1992)</h3>
              </a>
            </article>
            <article>
              <a href="#51">
                <h3>
                  CADAT Inform&ograve;tica: importacions, muntatge de PC&apos;s
                  (1988)
                </h3>
              </a>
            </article>
            <article>
              <a href="#52">
                <h3>
                  Desenvolupament d&apos;aplicacions en Clipper/MS-DOS (1987)
                </h3>
              </a>
            </article>
          </div>
        </div>
      </section>
      <section>
        <h1 className="main">{entrevistes_i_conferencies[0][language]}</h1>
        <section>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>{entrevistes[0][language]}</h2>
            </div>
            <div className="dropdown-content">
              <article>
                <a
                  href="https://www.youtube.com/watch?v=XadyIOiavgk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    VR al 360 Film Fest de Barcelona
                    <img
                      src={process.env.PUBLIC_URL + "/img/yt20.png"}
                      alt="youtube"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
              </article>
              <article>
                <a
                  href="https://www.ccma.cat/catradio/alacarta/el-mat-de-catalunya-rdio-manel-fuentes/avatar/audio/398359/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    3D als Matins de Catr&agrave;dio 18/12/2009
                    <img
                      src={process.env.PUBLIC_URL + "/img/yt20.png"}
                      alt="youtube"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
                <figure>
                  <figcaption>
                    Als matins de Catalunya R&agrave;dio amb Manel Fuentes
                  </figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="http://www.tv3.cat/videos/2843310/Telenoticies-vespre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    TV3 Telenot&iacute;cies 16/04/2010 cine3D (minut 37)
                    <img
                      src={process.env.PUBLIC_URL + "/img/yt20.png"}
                      alt="youtube"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
              </article>
              <article>
                <a
                  href="http://www.catradio.com/pcatradio/crPrograma.jsp?hiPrograma=156908479&amp;hiEmissora=cr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>CATRADIO internet v&iacute;deo 17/06/2006 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Menci&oacute; al final del programa La Finestra Indiscreta
                    amb &Agrave;lex Gorina
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#53">BTV (betev&eacute;) 17/05/2006</a>
                <figure>
                  <figcaption>
                    Infonit Not&iacute;cies a les 21:50. Desc&agrave;rregues per
                    internet
                  </figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="https://play.cadenaser.com/audio/20060404csrcsr_5.Aes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    CadenaSER: Hoy por Hoy 4/04/2006 @cine.com
                    <img
                      src={process.env.PUBLIC_URL + "/img/yt20.png"}
                      alt="youtube"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
              </article>
              <article>
                <a href="#54">El Pa&iacute;s 4/04/2006 @cine.com</a>
                <figure>
                  <figcaption>
                    Suplemento de Tecnolog&iacute;a: Paso a Paso. Cine legal en
                    Internet
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#55">
                  <h3>RTVE TVE1 14/03/2006 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Telediario mediod&iacute;a (15:00) y noche (21:00) y Canal
                    Internacional
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#56">
                  <h3>El Mundo del siglo XXI 9/03/2006 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Art&iacute;culo de Quico Alsedo en la secci&oacute;n de
                    cultura, con motivo del estreno simult&aacute;neo de
                    "Catarsis"
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#57">
                  <h3>Canal+ Estrena simult&agrave;nia de Catarsis</h3>
                </a>
              </article>
              <article>
                <a href="#58">
                  <h3>La Vanguardia el 12/02/2006 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Art&iacute;culo de Alex Barnet "El ocaso de la gran
                    pantalla: Internet y las nuevas tecnolog&iacute;as arrebatan
                    espectadores a las salas de cine"
                  </figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="
              http://www.catradio.com/pcatradio/crPrograma.jsp?hiPrograma=109447807&amp;hiEmissora=cr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>CATRADIO internet v&iacute;deo 28/01/2006 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Entrevista al programa L&apos;Internauta amb Vicent Partal
                  </figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="http://www.comradio.com/programes/programa.asp?id=10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>COMRadio internet v&iacute;deo 25/01/2006 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Entrevista al programa La Malla de COM R&agrave;dio
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#59">
                  <h3>El Peri&oacute;dico de Catalunya 18/01/2006 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Lanzamiento del servicio online en cine.com P&aacute;gina 37
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#60">
                  <h3>e-commerce @reg2.net</h3>
                </a>
              </article>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>{conferencies[0][language]}</h2>
            </div>
            <div className="dropdown-content">
              <article>
                <a
                  href="https://www.youtube.com/watch?v=einYD7AtS2M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    5º Congreso APD. XR: the next big thing?
                    <img
                      src={process.env.PUBLIC_URL + "/img/yt20.png"}
                      alt="youtube"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/apd.jpg"}
                    alt="Xerrada al 5º congreso APD sobre XR"
                    width="500"
                  />
                  <figcaption>
                    XR: the next big thing? durant el 5º Congreso APD 2019 al
                    CCIB de Barcelona
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#61">
                  <h3>
                    GITEX 2019. Huawei 5G Keynote
                    <img
                      src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                      alt="mediapro"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/Huawei2.jpg"}
                    alt="keynote 5G per Huawei a GITEX Dubai"
                    width="500"
                  />
                  <figcaption>
                    Xerrada sobre 5G per Huawei durant el GITEX 2019 de Dubai
                  </figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="https://www.youtube.com/watch?v=B1ZwJULAiBU&amp;t=1203s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    La Liga Technology Showcase Shanghai 15/07/2019
                    <img
                      src={process.env.PUBLIC_URL + "/img/yt20.png"}
                      alt="youtube"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                      alt="mediapro"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/LaLigaASIA.png"}
                    alt="LaLiga Technology Showcase. Shanghai"
                    width="500"
                  />
                  <figcaption>
                    Presentaci&ograve; de la prova de concepte de futbol en VR
                    per LaLiga
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#62">
                  <h3>
                    La Liga Technology Showcase BCN 4/03/2019
                    <img
                      src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                      alt="mediapro"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/LaLigaBCN.jpg"}
                    alt="LaLiga Technology Showcase. RCD Stadium"
                    width="500"
                  />
                  <figcaption>
                    Presentaci&oacute; de la prova de concepte de futbol en VR
                    per LaLiga
                  </figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="https://www.rebuildexpo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    REBUILD 2018. Construcci&oacute; 4.0
                    <img
                      src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                      alt="mediapro"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/rebuild2018.jpg"}
                    alt="REBUILD Expo 2018"
                    width="500"
                  />
                  <figcaption></figcaption>
                </figure>
              </article>
              <article>
                <a href="#64">
                  <h3>
                    COEIC media &amp; IT
                    <img
                      src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                      alt="mediapro"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
              </article>
              <article>
                <a href="#64bis">
                  <h3>IBC Project FINE 20/09/2012</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/FINE_IBC2012bis.jpg"}
                    alt="IBC 2020 3D Media"
                    width="500"
                  />
                  <figcaption>
                    Xerrada a l&apos;equip de What Caught My Eye
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#65">
                  <h3>
                    Auditori Mediapro 2020 3D Media
                    <img
                      src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                      alt="mediapro"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
              </article>
              <article>
                <a href="#66">
                  <h3>
                    IBC 2020 3D Media 03/09/2011
                    <img
                      src={process.env.PUBLIC_URL + "/img/mediapro.png"}
                      alt="mediapro"
                      style={{ margin: "0px 0px 0px 15px" }}
                    />
                  </h3>
                </a>
              </article>
              <article>
                <a href="#67">
                  <h3>Radio +QueCine 12/12/2011</h3>
                </a>
              </article>
              <article>
                <a href="#68">
                  <h3>Expo 3D 23-29/05/2011 a Madrid</h3>
                </a>
              </article>
              <article>
                <a
                  href="https://jordialonso.wordpress.com/2008/10/11/jornadas-agapi-en-santiago-ultimo-dia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>AGAPI a Santiago de Compostela 10/10/2008 @cine.com</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/AGAPI.jpg"}
                    alt="Conferencia sobre vídeo per internet a AGAPI"
                    width="500"
                  />
                  <figcaption>
                    Xerrada sobre v&iacute;deo per internet a Santiago de
                    Compostela, 9-10/10/2008
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#69">
                  <h3>Torre Agbar 24/04/2008 @cine.com</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/cpac02.jpg"}
                    alt="CPAC r-evolució difital 24/04/2008 a Torre Agbar"
                    width="500"
                    heigth="375"
                  />
                  <figcaption>
                    Confer&egrave;ncia a la Torre Agbar 24/04/2008 pel CPAC:
                    r-evoluci&oacute; digital (cine.com)
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#70">
                  <h3>Todos en Alta (TeA06) 14-18/06/2006 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Xerrada sobre la distribuci&oacute; de v&iacute;deo HD a
                    trav&eacute;s d&apos;IP
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#71">
                  <h3>Festival de cinema Zoom Igualada 10/11/2005 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Xerrada sobre la distribuci&oacute; de cinema a
                    trav&eacute;s d&apos;internet
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#72">
                  <h3>Foro HD en Barcelona 11/10/2005 @cine.com</h3>
                </a>
                <figure>
                  <figcaption>
                    Xerrada sobre la distribuci&oacute; de v&iacute;deo HD a
                    trav&eacute;s d&apos;internet
                  </figcaption>
                </figure>
              </article>
              <article>
                <a href="#72bis">
                  <h3>Festival de cinema de Sitges @cine.com</h3>
                </a>
              </article>
              <article>
                <a href="#73">
                  <h3>CGIx Glory Day</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/CGIx.jpg"}
                    alt="CGIx a Barcelona el 1999"
                    width="500"
                  />
                  <figcaption>
                    Presentaci&oacute; del projecte "Glory Day" al CGIx de
                    Barcelona 4/02/1999
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </section>
      </section>
      <section>
        <section>
          <h1 className="main">{educacio[0][language]}</h1>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>{formacio_reglada[0][language]}</h2>
            </div>
            <div className="dropdown-content">
              <article>
                <a
                  href="https://photonics.masters.upc.edu/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>MSc Photonics a la UPC</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/logoUPC.png"}
                    alt="Logo UPC"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://www.esade.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>MBA a ESADE -no acabat-</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/esade.jpg"}
                    alt="Logo ESADE"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://www.escac.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>MA Computer Animation a l&apos;ESCAC</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/escac.jpg"}
                    alt="Logo ESCAC"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://www.uab.cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>BSc Computer Science a la UAB</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/uab.png"}
                    alt="Logo UAB"
                    width="250"
                  />
                </figure>
              </article>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>{cursos[0][language]}</h2>
            </div>
            <div className="dropdown-content">
              <article>
                <a href="#75">
                  <h3>Front-end web developer</h3>
                </a>
                <figure>Certificaci&oacute; Tecnocampus</figure>
              </article>
              <article>
                <a href="#76">
                  <h3>Machine Learning</h3>
                </a>
                <figure>Certificaci&oacute; Coursera/Stanford</figure>
              </article>
              <article>
                <a href="#77">
                  <h3>SCRUM/Agile</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/scrum-agile.png"}
                    alt="Logo SCRUM Agile"
                    width="250"
                  />
                  <figcaption>Certificaci&oacute; Mediapro</figcaption>
                </figure>
              </article>
              <article>
                <a href="#78">
                  <h3>ITIL Essentials</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/itil.jpg"}
                    alt="Logo ITIL"
                    width="250"
                  />
                  <figcaption>Certificaci&oacute; EXIN</figcaption>
                </figure>
              </article>
              <article>
                <a href="#79">
                  <h3>Project Manager</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/PMI_logo.gif"}
                    alt="Logo PMI"
                    width="250"
                  />
                  <figcaption>Certificaci&oacute; PMI</figcaption>
                </figure>
              </article>
              <article>
                <a href="#79">
                  <h3>Lean 6-sigma</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/lean6sigma.png"}
                    alt="Logo Lean 6 Sigma"
                    width="250"
                  />
                  <figcaption>Certificaci&oacute; Sun Microsystems</figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="https://telecos.upc.edu/ca/noticies/cursos-destiu-aess"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Arduino Basic &amp; Advanced 2014</h3>
                </a>
                <figure>Certificaci&oacute; UPC</figure>
              </article>
              <article>
                <a href="#80bis">
                  <h3>S3 Campus Juny 2012</h3>
                </a>
                <figure>
                  Stage a Par&iacute;s amb el gran estereoscopista Alain
                  D&eacute;robe
                </figure>
              </article>
              <article>
                <a
                  href="https://en.wikipedia.org/wiki/Avid_DS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Avid DS</h3>
                </a>
                <figure>Certificaci&oacute; Avid DS 101-501</figure>
              </article>
              <article>
                <a
                  href="https://en.wikipedia.org/wiki/Softimage_3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Softimage 3D</h3>
                </a>
                <figure>Certificaci&oacute; Softimage 101-501</figure>
              </article>
              <article>
                <a
                  href="https://en.wikipedia.org/wiki/Silicon_Graphics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>VR amb SGI</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/sgi.jpg"}
                    alt="Curs VR al 1993"
                    width="500"
                  />
                </figure>
              </article>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>{congressos[0][language]}</h2>
            </div>
            <div className="dropdown-content">
              <article>
                <a
                  href="https://www.siggraph.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>SIGGRAPH</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/Siggraph.jpg"}
                    alt="SIGGRAPH 2016"
                    width="500"
                  />
                  <figcaption>
                    Atenent ininterrompudament des de 1994
                  </figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="https://www.nabshow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>NAB</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/NABAutomaticTV.jpg"}
                    alt="NAB 2018"
                    width="500"
                  />
                  <figcaption>Stand d&apos;AutomaticTV al NAB Show</figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="https://www.ibc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>IBC</h3>
                </a>
              </article>
              <article>
                <a
                  href="https://www.mwcbarcelona.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>MWC</h3>
                </a>
              </article>
              <article>
                <a
                  href="https://3dtv-con.org/silja-serenade/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    3DTV-CON Training School IEEE. 2018 Stockholm-Helsinki
                  </h3>
                </a>
              </article>
              <article>
                <a
                  href="https://www.3d-contournet.eu/cost-training-school-3d-avcom-2015/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>3D-AVCom Training School (EU-COST Action) 2015 Lisbon</h3>
                </a>
              </article>
              <article>
                <a
                  href="https://www.3d-contournet.eu/plenoptics-2013/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    3D-ConTourNet Training School (EU-COST Action) 2013
                    Sundsvall
                  </h3>
                </a>
              </article>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>{idiomes[0][language]}</h2>
            </div>
            <div className="dropdown-content">
              <article>
                <a href="#86">
                  <h3>{llengues[0][language]}</h3>
                </a>
                <figure>Idioma Nadiu</figure>
                <figure>Certificaci&oacute; C1</figure>
              </article>
              <article>
                <a href="#87">
                  <h3>{llengues[1][language]}</h3>
                </a>
                <figure>Idioma Nadiu</figure>
              </article>
              <article>
                <a href="#88">
                  <h3>{llengues[2][language]}</h3>
                </a>
                <figure>Nivell negociaci&oacute;</figure>
                <figure>Michigan Proficiency</figure>
              </article>
              <article>
                <a href="#89">
                  <h3>{llengues[3][language]}</h3>
                </a>
                <figure>Estudiat durant 7 anys a l&apos;escola</figure>
                <figure>Cal refrescar-lo</figure>
              </article>
              <article>
                <a href="#90">
                  <h3>{llengues[4][language]}</h3>
                </a>
                <figure>Principiant</figure>
                <figure>
                  Estudiat fins 2on curs a l&apos;EOI Barcelona-Drassanes
                </figure>
              </article>
              <article>
                <a href="#91">
                  <h3>{llengues[5][language]}</h3>
                </a>
                <figure>Principiant</figure>
                <figure>Curs online d&apos;iniciaci&oacute;</figure>
              </article>
              <article>
                <a href="#92">
                  <h3>{llengues[6][language]}</h3>
                </a>
                <figure>Principiant</figure>
                <figure>Curs online d&apos;iniciaci&oacute;</figure>
              </article>
              <article>
                <a href="#93">
                  <h3>{llengues[7][language]}</h3>
                </a>
                <figure>Principiant</figure>
                <figure>Curs online d&apos;iniciaci&oacute;</figure>
              </article>
              <article>
                <a href="#94">
                  <h3>{llengues[8][language]}</h3>
                </a>
                <figure>Principiant</figure>
                <figure>Curs online d&apos;iniciaci&oacute;</figure>
                <figure>Classes particulars</figure>
              </article>
            </div>
          </div>
        </section>
      </section>
      <section>
        <h1 className="main">{altres[0][language]}</h1>
        <section>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>{afiliacions[0][language]}</h2>
            </div>
            <div className="dropdown-content">
              <article>
                <a
                  href="https://www.siggraph.org/connect/computer-graphics-pioneers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>SIGGRAPH Pioneers</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/Siggraph.png"}
                    alt="Logo Siggraph"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://www.acm.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>ACM</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/acm.png"}
                    alt="Logo ACM"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://theadvancedimagingsociety.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Advanced Imaging Society</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/ais.jpg"}
                    alt="Logo AIS"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://enginyeriainformatica.cat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>COEINF</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/COEIC.png"}
                    alt="Logo COEIC"
                  />
                  <figcaption>Col·legiat 444</figcaption>
                </figure>
              </article>
              <article>
                <a
                  href="https://www.thevrara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>The VR/AR Association</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/VRARA.png"}
                    alt="Logo VRARA"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://www.neuralink.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Open Neuralink</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/Neuralink.jpg"}
                    alt="Logo NeuraLink"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a href="#99">
                  <h3>MENSA</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/mensa.png"}
                    alt="Logo Mensa"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a href="#99bis">
                  <h3>Barcelon@ Connection</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/bcnconnection.png"}
                    alt="Barcelona Connection"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a href="#100">
                  <h3>Virtual Production @Facebook</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/vp.jpg"}
                    alt="Virtual Production"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://www.ctbarcino.cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>CT Barcino</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/ctbarcino.jpg"}
                    alt="Logo CT Barcino"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://www.catgolf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>FCG</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/fcg.jpg"}
                    alt="Logo FCG"
                    width="250"
                  />
                </figure>
              </article>
              <article>
                <a
                  href="https://www.periodistes.cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>ACPJG</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/acpjg.jpg"}
                    alt="Logo ACPJG"
                    width="250"
                  />
                </figure>
              </article>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <h2>{aficions[0][language]}</h2>
            </div>
            <div className="dropdown-content">
              <article>
                <a href="#102">
                  <h3>Tennis</h3>
                </a>
                <figure>3ª Categoria Grup 8</figure>
              </article>
              <article>
                <a href="#103">
                  <h3>Tennis taula</h3>
                </a>
                <figure>3ª Categoria</figure>
              </article>
              <article>
                <a href="#104">
                  <h3>Golf</h3>
                </a>
                <figure>Millor h&agrave;ndicap 15.5</figure>
              </article>
              <article>
                <a href="#105">
                  <h3>Esqu&iacute;</h3>
                </a>
              </article>
              <article>
                <a href="#106">
                  <h3>Submarinisme</h3>
                </a>
                <figure>FEDAS 1*</figure>
              </article>
              <article>
                <a href="#107">
                  <h3>Trekking</h3>
                </a>
              </article>
              <article>
                <a href="#108">
                  <h3>Beat Saber</h3>
                </a>
                <figure>Nivell Expert</figure>
              </article>
              <article>
                <a href="#109">
                  <h3>Guitarra</h3>
                </a>
                <figure>Cursos online</figure>
              </article>
              <article>
                <a href="#110">
                  <h3>Piano</h3>
                </a>
                <figure>M&apos;han donat classes particulars</figure>
                <figure>4rt de solfeig</figure>
              </article>
              <article>
                <a href="#111">
                  <h3>Lectura</h3>
                </a>
                <figure>Darrers llibres:</figure>
                <figure>04/2022 The Cerebral Cortex</figure>
                <figure>03/2022 A Thousand Minds</figure>
                <figure>02/2022 JavaScript The Definitive Guide</figure>
                <figure>01/2022 LifeSpan</figure>
                <figure>12/2021 El Mecanisme</figure>
              </article>
              <article>
                <a href="#112">
                  <h3>Cuina</h3>
                </a>
              </article>
              <article>
                <a href="#113">
                  <h3>Cinema</h3>
                </a>
                <figure>
                  Veig totes les pel·lis en 3D i tamb&eacute; d&apos;altres
                </figure>
              </article>
              <article>
                <a
                  href="https://www.fototurismo.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Fotografia de viatges</h3>
                </a>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/kiruna.jpg"}
                    alt="Sol de mitjanit a Kiruna"
                    width="500"
                  />
                  <figcaption>
                    Sol de mitjanit+Superlluna a Kiruna (Su&egrave;cia)
                    23/06/2013
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/Georgios.jpg"}
                    alt="Georgios G. Shipwreck at NEOM by Ben Thouard"
                    width="500"
                  />
                  <figcaption>
                    Georgios G. shipwreck a NEOM (Ar&agrave;bia Saudita),
                    30/09/2018
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/img/fototurismo.jpg"}
                    alt="Web personal de fotos de turisme"
                    width="500"
                  />
                  <figcaption>
                    M&egrave;s fotos a la meva web FotoTurismo.net
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </section>
      </section>
      <footer>
        <section>
          <div id="peu">
            <a
              href="https://linkedin.com/in/jordialonso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/linkedin.svg"}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://twitter.com/jordialonso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/twitter.svg"}
                alt="twitter"
              />
            </a>
            <a
              href="https://instagram.com/jordialonso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/instagram.svg"}
                alt="instagram"
              />
            </a>
            <a
              href="https://facebook.com/jordi.alonso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/facebook.svg"}
                alt="facebook"
              />
            </a>
            <a
              href="https://youtube.com/user/cine3Dtv/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/img/youtube.svg"}
                alt="youtube"
              />
            </a>
            <a href="mailto:info@synthespian.net?subject=Web de Jordi Alonso">
              <img
                id="email"
                src={process.env.PUBLIC_URL + "/img/email.svg"}
                alt="email"
                width="45"
              />
            </a>
          </div>
          <div className="break"></div>
          <div id="copy">
            <h5>
              &copy; 2022 {nom[0][language]}. {copyright[0][language]}
            </h5>
          </div>
        </section>
      </footer>
    </div>
  );
}
