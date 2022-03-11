import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Row from "react-bootstrap/Row";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ReactDOM from "react-dom";
import $ from "jquery";

import { ImLocation } from "react-icons/im";

import Mekong_basin_shapefile from "../geojson/Mekong_basin.geojson";
import Mekong_line from "../geojson/Mekong_line_filtered.geojson";
import Mekong_countries from "../geojson/Mekong_countries.geojson";
import Mekong_countries_centoids from "../geojson/Mekong_countries_centoids.geojson";
import golden_triangle_centoid from "../geojson/golden_triangle_centoid.geojson";

import Cam_no_flood from "../img/CAM_no_flood.png";
import Cam_flood from "../img/CAM_flood.png";

import "mapbox-gl/dist/mapbox-gl.css";
import "./Section1.css";

const Map1 = ({ mapContainer }) => {
  return (
    <div id="map1" ref={mapContainer} className="map-container">
      <div className="legend">
        <ImLocation /> <p className="legend-text"> </p>
      </div>
    </div>
  );
};

const Text1 = () => {
  return (
    <div className="text_overlap">
      <section id="section1">
        <div className="bubble dark righty" id="para1GreatRiver">
          <p>
            The Mekong River is one of the world's great rivers - the 12th
            longest in the world.
          </p>
        </div>
        <div className="bubble dark righty" id="para2Countries">
          <p>
            It also runs through 6 sovereign countries, creating conflict that
            deeply affects the lives of the 65 million people who live within
            its watershed. <sup> 1 </sup>
          </p>
        </div>
        <div className="bubble dark lefty" id="para3Source">
          <h2> China, the Upstream Powerhouse </h2>
          <p>
            The Mekong is fed by glacial meltwater from the Himalayas, flowing
            through the Tibetan plateau into Yunnan Province. The Chinese
            portion of the river is often known by its local name, the Lancang.
          </p>
          <p>
            China, as the source of the Mekong River, holds tremendous
            hydrological power over all countries downstream of it. A point of
            contention has historically been the building of dams without
            sharing hydrological data or engaging in adequate Environmefntal
            Impact Assessments, a tactic more recently adopted by other
            countries in the region.
          </p>
          <p>
            Under Xi Jinping, China has taken a more active role in engaging
            other Mekong countries. One press release from China 's government
            reads:
          </p>
          <blockquote>
            [China's Minister of Water Resources] said that China will
            unswervingly follow the road of peaceful development, actively
            promote the “Belt and Road” international cooperation, and promote
            the building of a community with a shared future for mankind. The
            concept of tolerance and the diplomatic policy of being good with
            neighbors and partnering with neighbors will deepen relations with
            neighboring countries, increase assistance to developing countries
            and especially to the least developed countries, and to narrow of
            the development gap between the North and the South. China will
            contribute more Chinese wisdom, Chinese solutions, and Chinese
            strength to the world, and promote the building of a world of
            "lasting peace, universal security, common prosperity, openness and
            tolerance, a world that is clean and beautiful", and build a
            glorious community of joint destiny in the world.<sup>2</sup>
          </blockquote>
        </div>
        <div className="bubble dark righty" id="para4GoldenTriangle">
          <h2> Crime and Sovereignty in the Golden Triangle </h2>
          <p>
            The river flows through the Southeast Asian Massif, defining the
            borders between China, Myanmar, Laos, and Thailand. The rugged hilly
            terrain has nurtured a panoply of many different culture and
            languages. The region has never been unified as a single polity; The
            empires of China, France, Britain, and Thailand, during the 1800s,
            divided the region into the domain of their lowland-culture based
            empires. These peripheral regions, however, had never been truly
            integrated into the nation-states of modernity. Of particularly note
            is the Myanma highlands, which has, since the end of the Second
            World War, been governed by separatist groups waging a 70-year long
            war against the lowland government dominated by ethnic Bama
            (Burmese) people.
          </p>
          <p>
            The porous borders of the region, and divided jurisdictions, also
            meant the bleed over of conflicts and other activities across
            borders. The main source of income for separatist groups in the
            Myanma highlands is drug production. Myanmar is historically the
            largest producer of Heroin and Methamphetamine in the world, only
            recently surpassed by Afghanistan. These drugs are smuggled through
            the region into China and the rest of Asia.
          </p>
          <p>
            One notable incident occurred in 5 October 2011, when unknown people
            - probably drug gangs - attacked two Chinese cargo ships, killing 13
            Chinese citizens. The Chinese ship was found carrying 900,000
            amphetamine pills. The Chinese government, incensed, suspended all
            trade along the Mekong and demanded the capture and extradition of
            alleged drug lords behind this attack. The Southeast Asian nations
            acquiesced, and worked with Chinese agents to capture and extradite
            the Myanma, Laotian, Thai, and "stateless" suspects to face trial in
            the People's Republic of China.
          </p>
          <p>
            In the aftermath, Southeast Asian states agreed to a Chinese
            proposal permitting Chinese police to patrol the territories of
            Southeast Asian nations. Some observers have observed this as a sign
            of China's increased role in regional security.
          </p>
          <p>
            The incident was played up in Chinese mass media. In 2016, the
            incident was adapted into a highly-fictionalised action movie named
            "Operation Mekong". The movie did not mention the Amphetamine pills
            found on the Chinese ship, and depicted Chinese law enforcement
            operating in a foreign rainforest to track down those responsible
            for the murder of Chinese citizens.
          </p>
        </div>
        <div className="bubble dark lefty" id="para5Cambodia">
          <h2>The Unique Hydrology of the Lower Mekong</h2>
          <p>
            Flowing further south, the Mekong River flows through Laos before
            entering Cambodia
          </p>
          <p>
            Flooding is a vital hydrological characteristic of the Mekong River
            Basin, caused by the yearly monsoon between May and November. The
            change in rainfall is the only “seasonal” weather change in an
            otherwise tropical region.
          </p>
          <p>As one report notes, flooding </p>
          <blockquote>
            improves water availability during the dry season, and maintains and
            35 increases the high productivity of ecosystems and biodiversity.
            As part of the annual flood cycle, floodwaters transport essential
            sediments and nutrients from the river channel into the floodplain,
            and distribute them across a wide area, fertilizing agricultural
            lands and enhancing floodplain productivity. Moreover, the wider the
            flood 40 extent, the larger the area of interaction between aquatic
            and terrestrial phases, which increases the potential transfer of
            floodplain terrestrial organic matter and energy into the aquatic
            phase.<sup>3</sup>
          </blockquote>
        </div>
      </section>
      <section class="comparisonSection" id="section2">
        <div className="comparisonImage beforeImage">
          <img src={Cam_no_flood} alt="before" />
          <div class="caption light">
            <p>Scroll down to compare Cambodia during dry and flood seasons.</p>
            <p>
              At low water levels, the river and the Tonlé Sap Lake drains into
              the South China Sea through its delta.
            </p>
          </div>
        </div>
        <div className="comparisonImage afterImage">
          <img src={Cam_flood} alt="after" />
          <div class="caption dark">
            <p>
              The severity of the Wet Monsoon season causes a unique
              hydrological phenomenon - the Mekong's discharge exceeds the
              capability of its delta and the river diverts into the Tonlé Sap
              Lake. The Tonlé Sap expands from 2,700 km<sup>2</sup> (1,050 mile
              <sup>2</sup>) to about 10,360 km<sup>2</sup> (4,000 mile
              <sup>2</sup>).
            </p>
          </div>
        </div>
      </section>
      <section id="section3">
        <p>
          Entire communities live floating on the Tonle Sap, depending on the
          lake for food, water, and everything else. Fleets of houseboats owned
          by the Cham people, an ethnic minority, are a common sight along the
          Cambodian sections of the Mekong River. For example - many Cham
          people, an ethnic minority, are nomadic on their fleet of houseboats,
          migrating along the Mekong river in their fleet-villages as the season
          change - even mooring in downtown Phnom Penh, much to the chagrin of
          Cambodian government officials.
        </p>
        <p>
          The Cambodian diet is dominated by rice and fish, with fish-related
          activities employing 45% of the population. Cambodians are the largest
          consumers of freshwater fish per capita in the world; fish comprise
          76% of all animal protein consumed in Cambodia. Therefore, the food
          security of entire countries are dependent on the ecology and
          sustainability of the Mekong River; the flow of nutrients and
          sediment, the lack of drought, and the yearly "heartbeat" of Mekong
          floods.<sup>4</sup>
        </p>
        <p>
          The ecological importance of the seasonal flood cycle cannot be
          overstated. The huge lake and surrounding wetlands created by the
          flooding support a diverse freshwater fish ecosystem, and the silt
          deposited by the floods renews forest and farmland alike. As the
          countries along the course of the Mekong make plans for more upstream
          dams and navigation channels, the seasonal cycle of the lower Mekong
          becomes threatened, as do the fisheries and farmlands dependent on it.
          What is good for one country or region might have devastating
          consequences for another. The governments in the area face a difficult
          problem as they try to balance the competing interests of flood
          control, hydroelectric power, shipping, fishing, agriculture, and
          environmental protection<sup>5</sup>
        </p>
      </section>
    </div>
  );
};

const Section1 = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(105);
  const [lat, setLat] = useState(15);
  const [zoom, setZoom] = useState(3.9);
  const [textHeight, setTextHeight] = useState();

  var anim;

  mapboxgl.accessToken = "pk.eyJ1IjoidmlyZ2lsd3h3IiwiYSI6ImNsMGUyMGh6bTBlbzAzY3BvZHpoZ3h0aHcifQ.zm6vOoHcflj3SVSSiqqwrg"

  useEffect(() => {
    setTextHeight($("#section1").height());

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/virgilwxw/cl0jy5edi000i15l8tipmxxxx",
      center: [lng, lat],
      zoom: zoom,
      interactive: false,
    });

    map.on("style.load", () => {
      map.addSource("Mekong_basin", {
        type: "geojson",
        data: Mekong_basin_shapefile,
      });
      map.addSource("Mekong_line", {
        type: "geojson",
        data: Mekong_line,
      });
      map.addSource("Mekong_countries", {
        type: "geojson",
        data: Mekong_countries,
      });
      map.addSource("Mekong_countries_centoids", {
        type: "geojson",
        data: Mekong_countries_centoids,
      });
      map.addSource("golden_triangle_centoid", {
        type: "geojson",
        data: golden_triangle_centoid,
      });

      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });

      map.setTerrain({ source: "mapbox-dem", exaggeration: 1 });

      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            0,
            5,
            0.3,
            8,
            1,
          ],
          // set up the sky layer for atmospheric scattering
          "sky-type": "atmosphere",
          // explicitly set the position of the sun rather than allowing the sun to be attached to the main light source
          "sky-atmosphere-sun": [99.86577616084836, 83.87966265185958],
          // set the intensity of the sun as a light source (0-100 with higher values corresponding to brighter skies)
          "sky-atmosphere-sun-intensity": 5,
        },
      });

      map.setFog({
        range: [1, 20],
        color: "white",
        "horizon-blend": 0.1,
      });

      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: "#map1",
        start: "top top",
        end: "top+=10000px top",
        pin: true,
        markers: true,
        id: "map1",
      });

      gsap.to("#para1GreatRiver", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para1GreatRiver",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
          //// markers: true,
          //id: "#para1GreatRiver opacity"
        },
      });

      gsap.to("#para2Countries", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para2Countries",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
          id: "#para2Countries opacity",
        },
      });

      gsap.to("#para3Source", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para3Source",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
          //markers: true,
          id: "#para3Source opacity",
        },
      });

      gsap.to("#para4GoldenTriangle", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para4GoldenTriangle",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
          // markers: true,
          id: "#para4GoldenTriangle opacity",
        },
      });

      gsap.to("#para5Cambodia", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para5Cambodia",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
          // markers: true,
          id: "#para5Cambodia opacity",
        },
      });

      ScrollTrigger.create({
        trigger: "#para1GreatRiver",
        start: "top 70%",
        onEnter: () => {
          watershed_overlay_in(map);
        },
        onLeaveBack: () => {
          watershed_overlay_out(map, lng, lat, zoom);
        },
        // markers: true,
        id: "watershed_layeroverlay",
      });

      ScrollTrigger.create({
        trigger: "#para2Countries",
        start: "top 70%",
        onEnter: () => {
          sixCountriesin(map);
        },
        onLeaveBack: () => {
          sixCountriesOut(map);
          watershed_overlay_in(map);
        },
        // markers: true,
        id: "sixCountries",
      });

      ScrollTrigger.create({
        trigger: "#para3Source",
        start: "top 70%",
        onEnter: () => {
          sixCountriesOut(map);
          SourceIn(map);
        },
        onLeaveBack: () => {
          stop(anim);
          anim = undefined;
          $(".legend").css("visibility", "hidden");

          sixCountriesin(map);
        },
        // markers: true,
        id: "sixCountries",
      });

      ScrollTrigger.create({
        trigger: "#para4GoldenTriangle",
        start: "top 40%",
        onEnter: () => {
          stop(anim);
          anim = undefined;
          GoldenTriangleIn(map);
        },
        onLeaveBack: () => {
          GoldenTriangleOut(map);
          SourceIn(map);
        },
        // markers: true,
        id: "para4GoldenTriangle",
      });
      ScrollTrigger.create({
        trigger: "#para5Cambodia",
        start: "top 40%",
        onEnter: () => {
          map.removeLayer("Mekong_countries");
          map.fitBounds([
            [102.346509255666902, 10.4227359886091246],
            [107.6363823439247085, 14.708618006184869],
          ]);
        },
        onLeaveBack: () => {
          GoldenTriangleIn(map);
        },
        // markers: true,
        id: "para5Cambodia",
      });

      gsap.utils.toArray(".comparisonSection").forEach((section) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "center center",
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => "+=" + section.offsetWidth,
            scrub: true,
            pin: true,
            labels: true,
            anticipatePin: 1,
          },
          defaults: { ease: "none" },
        });
        // animate the container one way...
        tl.fromTo(
          section.querySelector(".afterImage"),
          { xPercent: 100, x: 0 },
          { xPercent: 0 }
        )
          // ...and the image the opposite way (at the same time)
          .fromTo(
            section.querySelector(".afterImage img"),
            { xPercent: -100, x: 0 },
            { xPercent: 0 },
            0
          )
          .fromTo(
            section.querySelector(".afterImage div"),
            { xPercent: -100, x: 0 },
            { xPercent: 0 },
            0
          );
      });
    });
  });

  function SourceIn(map) {
    map.flyTo({
      zoom: 12,
      center: [98.769057, 28.576586],
      pitch: 76.5,
      bearing: 153.99,
    });

    $(".legend").css("visibility", "visible");
    $(".legend-text").empty();
    $(".legend-text").append("Mei Li Snow Mountains, Yunan, China");

    let animationIndex = 0;
    let animationTime = 0.0;

    // wait for the terrain and sky to load before starting animations
    map.once("moveend", () => {
      const animations = [
        {
          duration: 100000.0,
          animate: (phase) => {
            const start = [98.769057, 28.576586];
            const end = [98.83937673711154, 28.409545253840413];
            const alt = [5000.0, 5000.0];

            // interpolate camera position while keeping focus on a target lat/lng
            const position = lerp(start, end, phase);
            const altitude = lerp(alt[0], alt[1], phase);
            const target = [98.85455848138156, 28.34868534689601];

            updateCameraPosition(position, altitude, target, map);
          },
        },
      ];

      let lastTime = 0.0;

      function frame(time) {
        animationIndex %= animations.length;
        const current = animations[animationIndex];

        if (animationTime < current.duration) {
          // Normalize the duration between 0 and 1 to interpolate the animation
          const phase = animationTime / current.duration;
          current.animate(phase);
        }

        // Elasped time since last frame, in milliseconds
        const elapsed = time - lastTime;
        animationTime += elapsed;
        lastTime = time;

        if (animationTime > current.duration) {
          animationIndex++;
          animationTime = 0.0;
        }

        anim = window.requestAnimationFrame(frame);
      }
      start(frame);
    });
  }

  function start(frame) {
    if (!anim) {
      anim = window.requestAnimationFrame(frame);
    }
  }

  function stop(anim) {
    if (anim) {
      window.cancelAnimationFrame(anim);
      anim = undefined;
    }
  }

  function watershed_overlay_out(map, lng, lat, zoom) {
    map.removeLayer("Mekong_basin");
    map.removeLayer("Mekong_line");
    map.flyTo({
      center: [lng, lat],
      zoom: zoom,
      pitch: 0,
      bearing: 0,
    });
  }

  function watershed_overlay_in(map) {
    map.flyTo({
      zoom: 4.5,
      center: [103.815, 21.73],
      pitch: 0,
      bearing: 0,
    });

    map.addLayer({
      id: "Mekong_basin",
      type: "fill",
      source: "Mekong_basin",
      paint: {
        "fill-color": "#fff7fb",
        "fill-opacity": 0.6,
        "fill-outline-color": "blue",
      },
    });

    map.addLayer({
      id: "Mekong_line",
      type: "line",
      source: "Mekong_line",
      paint: {
        "line-color": {
          property: "straherm1",
          stops: [
            [2, "#a6bddb"],
            [6, "#045a8d"],
          ],
        },
        "line-opacity": 1,
        "line-width": ["get", "straherm1"],
      },
    });
  }

  function sixCountriesin(map) {
    map.removeLayer("Mekong_basin");
    map.removeLayer("Mekong_line");

    map.flyTo({
      zoom: 4.5,
      center: [103.815, 21.73],
      pitch: 0,
      bearing: 0,
    });
    map.addLayer({
      id: "Mekong_countries",
      type: "fill",
      source: "Mekong_countries",
      paint: {
        "fill-color": ["get", "Color"],
        "fill-opacity": 0.9,
      },
    });

    map.addLayer({
      id: "Mekong_basin",
      type: "fill",
      source: "Mekong_basin",
      paint: {
        "fill-color": "#fff7fb",
        "fill-opacity": 0.6,
        "fill-outline-color": "blue",
      },
    });

    map.addLayer({
      id: "Mekong_line",
      type: "line",
      source: "Mekong_line",
      paint: {
        "line-color": {
          property: "straherm1",
          stops: [
            [2, "#a6bddb"],
            [6, "#045a8d"],
          ],
        },
        "line-opacity": 1,
        "line-width": ["get", "straherm1"],
      },
    });

    map.addLayer({
      id: "Mekong_countries_centoids",
      type: "symbol",
      source: "Mekong_countries_centoids",
      paint: {
        "text-halo-width": 3,
        "text-halo-color": "white",
      },
      layout: {
        //"text-font": ["Viaoda Libre Regular", "Open Sans Regular"],
        "symbol-placement": "point",
        "text-anchor": "center",
        "text-field": ["get", "Name"],
        "text-size": 32,
      },
    });
  }

  function sixCountriesOut(map) {
    map.removeLayer("Mekong_countries");
    map.removeLayer("Mekong_countries_centoids");
    map.removeLayer("Mekong_basin");
    map.removeLayer("Mekong_line");
  }

  const lerp = (a, b, t) => {
    if (Array.isArray(a) && Array.isArray(b)) {
      const result = [];
      for (let i = 0; i < Math.min(a.length, b.length); i++)
        result[i] = a[i] * (1.0 - t) + b[i] * t;
      return result;
    } else {
      return a * (1.0 - t) + b * t;
    }
  };

  function updateCameraPosition(position, altitude, target, map) {
    const camera = map.getFreeCameraOptions();

    camera.position = mapboxgl.MercatorCoordinate.fromLngLat(
      position,
      altitude
    );
    camera.lookAtPoint(target);

    map.setFreeCameraOptions(camera);
  }

  return (
    <Row className="g-0">
      <Map1 mapContainer={mapContainer} /> <Text1 />
    </Row>
  );
};

export default Section1;

function GoldenTriangleOut(map) {
  map.removeLayer("Mekong_line");
  map.removeLayer("Mekong_countries");
  map.removeLayer("golden_triangle_centoid");
}

function GoldenTriangleIn(map) {
  $(".legend").css("visibility", "hidden");

  map.flyTo({
    zoom: 7.27,
    center: [100.925916, 20.401068],
    pitch: 55.84,
    bearing: 27.06,
  });
  map.addLayer({
    id: "Mekong_line",
    type: "line",
    source: "Mekong_line",
    paint: {
      "line-color": {
        property: "straherm1",
        stops: [
          [2, "#a6bddb"],
          [6, "#045a8d"],
        ],
      },
      "line-opacity": 1,
      "line-width": ["get", "straherm1"],
    },
  });
  map.addLayer({
    id: "Mekong_countries",
    type: "fill",
    source: "Mekong_countries",
    paint: {
      "fill-color": ["get", "Color"],
      "fill-opacity": 0.2,
    },
  });
  map.addLayer({
    id: "golden_triangle_centoid",
    type: "symbol",
    source: "golden_triangle_centoid",
    paint: {
      "text-halo-width": 3,
      "text-halo-color": "white",
    },
    layout: {
      //"text-font": ["Viaoda Libre Regular", "Open Sans Regular"],
      "symbol-placement": "point",
      "text-anchor": "center",
      "text-field": ["get", "Name"],
      "text-size": 24,
    },
  });
}
