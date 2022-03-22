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
import threes_basin from "../geojson/threes_basin.geojson";
import threes_river from "../geojson/threes_rivers.geojson";
import threes_river_names from "../geojson/threes_river_names.geojson";
import hydro_power_dams from "../geojson/hydro_power_dams_2022.geojson";

import Cam_no_flood from "../img/CAM_no_flood.png";
import Cam_flood from "../img/CAM_flood.png";
import Tonle_Sap_1 from "../img/Cambodia,_Tonle_Sap_IMG_3323.jpg";
import Tonle_Sap_2 from "../img/Cambodia,_Tonle_Sap_IMG_3307.jpg";
import Cham1 from "../img/20190920_175145.jpg";
import MRC from "../img/Mekong_River_Commission_banderole_au_Laos.jpg";

import "mapbox-gl/dist/mapbox-gl.css";
import "./Section1.css";

const Map1 = ({ mapContainer }) => {
  return (
    <div id="map1" ref={mapContainer} className="map-container">
      <div className="legend" id="yunan">
        <span className="r">
          <ImLocation />
        </span>
        <p className="legend-text">Mei Li Snow Mountains, Yunan, China</p>
      </div>
      <div className="legend" id="damslegend">
        <span className="r">
          <span className="circle" id="dams" />
        </span>
        <p className="legend-text">
          Circles indicates hydropower plants; radius is logarithmic and
          indicates hydropower output
        </p>
      </div>
      <div className="legend" id="damsconstructionlegend">
        <span className="r">
          <span className="circle" id="completed" />{" "}
          <p>Completed and Operational</p>
        </span>
        <span className="r">
          <span className="circle" id="construction" />{" "}
          <p>Under Construction</p>
        </span>
        <span className="r">
          <span className="circle" id="planned" /> <p>Planned</p>
        </span>
        <span className="r">
          <p className="legend-text">Radius indicates hydropower output</p>
        </span>
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
            deeply affects the lives of the 70 million people who live within
            its watershed. The population is expected to grow to 100 million by
            2050. <sup> 1 </sup>
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
            other Mekong countries. One press release from China's government
            addressing a forum of Mekong River states reads:
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
      <section className="comparisonSection" id="section2">
        <div className="comparisonImage beforeImage">
          <img src={Cam_no_flood} alt="before" />
          <div className="caption light">
            <p>Scroll down to compare Cambodia during dry and flood seasons.</p>
            <p>
              At low water levels, the river and the Tonlé Sap Lake drains into
              the South China Sea through its delta.
            </p>
          </div>
        </div>
        <div className="comparisonImage afterImage">
          <img src={Cam_flood} alt="after" />
          <div className="caption dark">
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
      <section className="textscreen" id="section3">
        <div className="left-content">
          <img
            id="TonleSap1"
            className="imageToShow"
            src={Tonle_Sap_1}
            alt="scrollimages"
          />
          <img
            id="TonleSap2"
            className="imageToShow"
            src={Tonle_Sap_2}
            alt="scrollimages"
          />
          <img id="MRC" className="imageToShow" src={MRC} alt="scrollimages" />
        </div>
        <div className="right-content">
          <h2 className="contentMarker" data-marker-content="TonleSap1">
            Riparian Lives
          </h2>
          <p>
            The Cambodian diet is dominated by rice and fish, with fish-related
            activities employing 45% of the population. Cambodians are the
            largest consumers of freshwater fish per capita in the world; fish
            comprise 76% of all animal protein consumed in Cambodia. Therefore,
            the food security of entire countries are dependent on the ecology
            and sustainability of the Mekong River; the flow of nutrients and
            sediment, the lack of drought, and the yearly "heartbeat" of Mekong
            floods.<sup>4</sup>
          </p>
          <p>
            The ecological importance of the seasonal flood cycle cannot be
            overstated. The huge lake and surrounding wetlands created by the
            flooding support a diverse freshwater fish ecosystem, and the silt
            deposited by the floods renews forest and farmland alike. As the
            countries along the course of the Mekong make plans for more
            upstream dams and navigation channels, the seasonal cycle of the
            lower Mekong becomes threatened, as do the fisheries and farmlands
            dependent on it. What is good for one country or region might have
            devastating consequences for another. The governments in the area
            face a difficult problem as they try to balance the competing
            interests of flood control, hydroelectric power, shipping, fishing,
            agriculture, and environmental protection<sup>5</sup>
          </p>
          <p>
            Entire communities live floating on the Tonle Sap, depending on the
            lake for food, water, and everything else. Amongst those who live
            floating lives are the Cham people, an ethnic minority. Many Cham
            people are nomadic, migrating along the Mekong river in their
            fleet-villages as the season change - even mooring in downtown Phnom
            Penh, much to the chagrin of Cambodian government officials.
          </p>
          <p>
            The Cham, like other ethnic minorities in Cambodia, were prosecuted
            by the Khmer Rouge during the Cambodian genocide, which sought to
            ethnically cleanse the Cham's Islamic identity from the
            Khmer-Buddhist ethnostate they sought to create. Although the Cham
            has managed to recover some of their old practices following
            liberation, the Cham - like other communities who live on floating
            villages - face existential questions about their lifestyle. To
            access school, healthcare, and public services, they would have to
            abandon their nomadic lifestyles; but buying land is expensive and
            forbidden for people without Cambodian citizenship. Many minorities
            were stripped of citizenship due to their ethnicity, or never
            registered for one, through Cambodia's post-independence history
            <sup>6</sup>
          </p>
          <h2>The impact of climate change</h2>
          <p className="contentMarker" data-marker-content="TonleSap2">
            Human-induced climate change are expected to considerably change the
            sensitive hydrology of the Mekong River. Although the yearly flow of
            the river is expected to rise, the Mekong will flow higher during
            flood-season and lower during dry season. As one study notes,
          </p>

          <blockquote>
            <p>
              First, higher peak discharges occurring at higher frequencies
              during the wet season will increase the flood risks across the
              basin. Higher flood risks will be particularly relevant for human
              safety and agricultural production in the lower Mekong region,
              including the Cambodian and Vietnamese delta. Vast agriculture
              areas along the main rivers and in the delta’s floodplain will
              likely experience higher flood water levels, thus having higher
              risks of reduced productivity and crop failure. Higher river flow,
              combined with sea level rise will also result in higher flood
              risks for urban areas in the Mekong Delta.
            </p>
            <p>
              <br />
              <br />
              Second, increased water availability during the dry season
              suggested by the Q95 and discharge deficit analyses can have
              positive implications. The projected higher river discharge during
              the dry season months could help to mitigate water shortage in the
              basin. Higher dry season flow will also contribute to control salt
              water intrusion in the Vietnamese Mekong delta, where fresh water
              flow from upstream is currently used to control the salt gradient
              in rivers and canals in the coastal area. Additionally, projected
              discharge reduction at the beginning of the wet season (i.e. in
              June) probably has negative impacts on ecological and agricultural
              productivity. Flow alteration in the early wet season will likely
              change the sediment and nutrient dynamics in the downstream
              floodplains, which are very important for existing ecosystems and
              agricultural practices. Lastly, rainfall reduction in some areas
              of the lower Mekong could damage agricultural production,
              especially rainfed agriculture.<sup>7</sup>
            </p>
          </blockquote>
          <p>
            Dams might be one way water resources are managed, but dams carry
            with them deep political and geographical implications.
          </p>
          <h2 id="para6Trigger">The Issue of Dams</h2>
          <p>
            Transboundary water governance has complicated traditional
            conceptualisations of resource geopolitics, given the conceptual
            challenges in securing riparian flows which disregard territorial
            boundaries, yet shared among nation-states.
          </p>
          <p>
            The Mekong River Commission (MRC) was founded by the four countries
            who share the Mekong River (sans China and Myanmar) to ensure the
            fair and sustainable use and governance of the Mekong River without
            'any harmful impacts on the signatory countries'
          </p>
          <p className="contentMarker" data-marker-content="MRC">
            However, the MRC is primarily a monitoring association and does not
            have any regulatory powers over sovereign nation-states. Upstream
            countries, thus, have complete sovereignty over the river as it
            flows through their countries. Nevertheless, China has sought to
            bypass the MRC, an organisation funded in part by international
            organisations and governments such as Germany <sup>8</sup> and the
            United States <sup>9</sup>, by launching their own multilateral
            organisation, the "Mekong-Lancang Cooperation". As a Chinese
            state-run newspaper puts it:
          </p>
          <blockquote>
            The Lancang-Mekong water resources cooperation affairs should be
            negotiated by the Lancang-Mekong countries themselves. The
            Lancang-Mekong Water Resources Cooperation plan should be led by our
            six countries, and only our six countries themselves.<sup>10</sup>
          </blockquote>
          <p>
            Some commentators have critiqued the Mekong-Lancang Cooperation as a
            tactic for China isolate smaller countries from international
            diplomatic support, accusing the organisation of being founded to
            cover for China's unilateral dam building.<sup>11</sup>
          </p>
          <p>
            Dam-building, whilst beneficial to the host country as a way to
            manage water resources and as a way to harvest renewable hydropower,
            have adverse downstream effects as hydrological and sediment regimes
            becomes altered.
          </p>
        </div>
      </section>
      <section id="section4">
        <div className="bubble dark lefty" id="para6Dams">
          <h2>The Case Study of the 3S Dams</h2>
          <p>
            One such example of this happening is in the “3S Region”, named for
            the Sesan, Sre Pok, and Sekong rivers that originate in the
            Vietnamese highlands before flowing into Cambodia.
          </p>
          <p>
            Due to the complicated history of Cambodia and Vietnam, Cambodia was
            not represented as the precursor organisation of the MRC until 1995,
            when the Cambodian peace process concluded and the MRC was founded.
            Until 1995, Cambodia was thus diplomatically dependent on Vietnam
            and require Vietnam's voting powers. Beyond hydrology, the current
            Cambodian government - in particular, its personalistic leader Hun
            Sen - traces their lineage to the puppet government set up by
            Vietnam following their invasion of Cambodia.
          </p>
        </div>
        <div className="bubble dark righty" id="para7Yali">
          <p>
            Cambodia, thus, did not contest the construction of the Yali Dam
            near the Cambodian border. Sithrith argues this is a result of
            Vietnam's twofold hydrological and diplomatic hegemony over Cambodia
            in the governance of the 3S Basin.
          </p>
          <p>
            Vietnam has shared 'very little information and hydrological data
            about the Yali Dam'. This is despite the limited scope of
            Environmental Impact Assessments carried out before the dam's
            construction in 1993, not considering water quality and quantity in
            Cambodia's Sesan. Despite 'strenuous efforts' at negotiating against
            the Yali Dam, Cambodia has been hampered by 'insufficient data' and
            'scientific information' to justify unjust impacts within its
            territory, further entrenching the upstream hegemony which Vietnam
            has over the 3S Basin.<sup>12</sup>
          </p>
        </div>
        <div className="bubble dark lefty" id="para8CambodianDams">
          <p>
            The government of Cambodia itself wants to build dams. The
            government of Cambodia, a country with low electrification rates
            where firewood remains widely used, is “aggressively pursuing”
            hydropower dam projects with the recent influx of Chinese technical
            and financial aid. Debates remain on whether these dams, built under
            the condition that China operates the dams and receives all revenues
            operated by the dam for 50 years , will benefit Cambodia
            economically.<sup>13</sup>
          </p>
          <p>
            The calcification of authoritarianism in the last 20 years has also
            disempowered rural communities in the 3S region directly
            experiencing the socio-ecological costs and hazards. In the village
            of Phluk, higher-than-expected rates of support for opposition
            parties led to higher eviction rates. In the village of Kbal Romeas,
            representatives of the ruling Cambodian People's Party are torn
            between toeing the party line and respecting anti-dam sentiments
            within their communities. <sup>14</sup>
          </p>
        </div>
        <div className="bubble dark righty" id="para9alldams">
          <p>
            What is happening in Cambodia is happening in every country that the
            Mekong flows through. Dam building, a point of contention between
            Southeast Asian Mekong states and China during the 1990s, has now
            been taken on as a political project in almost every Mekong country
            with the influx of Chinese developmental aid and expertise.
          </p>
        </div>
      </section>
      <section className="textscreen textscreen2" id="section5">
        <h2>Conclusion</h2>
        <p>
          The conflict over dams is often framed as a technical question: how
          will a dam affect the river's hydrology? How much land will it flood
          and how valuable is the land? What does a country gain from being the
          “battery of Asia”? How can we quantify the damage inflicted by the dam
          and weigh it against its benefits? Can it save us from human-induced
          climate change?
        </p>
        <p>
          Human beings and their interests, if they are to be considered at all,
          must be converted to a commensurable and fungible unit of utility - in
          most cases, money.
        </p>
        <p>
          Such narrow framing, however, paints over other forms of understanding
          and masks the people who are most affected by these hydropower
          projects. Cost-benefit assessments made by national capitals and
          Western cities where consultancies operate often leave out the very
          real impacts of locals who have to abandon their ancestral lands,
          people who have a level of understanding of the river that economists
          or hydrologists may not capture.
        </p>
        <p>
          The shock, for example, of a local discovering the Mekong is flowing
          clear, free from sediment, for the first time in their lives, of
          having to plan for rapid unexpected changes in water level or living
          through the man-made droughts as dams trap the river and fill their
          reservoirs and as extremely-strong monsoons flood vast swatches of
          people's homes. It is in the lived experienced of individuals that we
          will get the best picture of what is happening to the Mekong River.
        </p>
        <p>
          Local knowledge is less a hierarchy as a leaderless social network. It
          is located in communities and spans political borders. They are found
          in NGOs, and civil society, and within people's lived experiences,
          customs, folklore, and oral history. They are spread by word of mouth
          and by mass media. Deprived of formal power, the champions of folk
          knowledge form transnational linkages to pool knowledge and share on
          best practices, and lobby academics to turn local knowledge into
          technical knowledge.
        </p>
        <p>
          To truly grasp and tackle the issues of dam-building in the Mekong,
          then, we must find a way to integrate local knowledges into
          decision-making structures.
        </p>
      </section>

      <section className="textscreen textscreen2">
        <h2>Sources</h2>
        <ol>
          <li>
            https://www.sciencedirect.com/science/article/abs/pii/S0143622811000774?via%3Dihub
          </li>
          <li> http://www.mwr.gov.cn/xw/slyw/201804/t20180409_1034896.html</li>
          <li>
            https://nhess.copernicus.org/preprints/nhess-2021-65/nhess-2021-65.pdf
          </li>
          <li> https://pubs.iclarm.net/resource_centre/3494-11879-1-PB.pdf</li>
          <li>
            https://earthobservatory.nasa.gov/images/3483/tonle-sap-wetlands-cambodia
          </li>
          <li>
            https://www.aljazeera.com/news/2019/12/13/beautifying-phnom-penh-muslim-cham-face-eviction-in-cambodia
          </li>
          <li>https://hess.copernicus.org/articles/20/3027/2016/</li>
          <li>https://www.mrcmekong.org/news-and-events/news/pr-09-12-2021/</li>
          <li> https://www.mrcmekong.org/news-and-events/news/pr-18112021/</li>
          <li> https://world.huanqiu.com/article/9CaKrnKooZN</li>
          <li>
            https://thediplomat.com/2018/12/the-trouble-with-the-lancang-mekong-cooperation-forum/
          </li>
          <li>
            https://iwaponline.com/wp/article-abstract/18/6/1420/20520/Damming-the-Mekong-tributaries-water-security-and
          </li>
          <li>
            https://www.eastasiaforum.org/2018/08/15/cambodias-chinese-dam-conundrum/
          </li>
          <li>
            https://iwaponline.com/wp/article-abstract/18/6/1420/20520/Damming-the-Mekong-tributaries-water-security-and
          </li>
        </ol>
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

  mapboxgl.accessToken =
    "pk.eyJ1IjoidmlyZ2lsd3h3IiwiYSI6ImNsMGUyMGh6bTBlbzAzY3BvZHpoZ3h0aHcifQ.zm6vOoHcflj3SVSSiqqwrg";

  useEffect(() => {
    setTextHeight($("#section1").height());
    const contentMarkers = gsap.utils.toArray(".contentMarker");

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
      map.addSource("threes_basin", {
        type: "geojson",
        data: threes_basin,
      });
      map.addSource("threes_river", {
        type: "geojson",
        data: threes_river,
      });
      map.addSource("threes_river_names", {
        type: "geojson",
        data: threes_river_names,
      });
      map.addSource("hydro_power_dams", {
        type: "geojson",
        data: hydro_power_dams,
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
        endTrigger: "#section5",
        end: "bottom top",
        pin: true,
        //markers: true,
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
          stop(anim);
          anim = undefined;
          watershed_overlay_in(map);
        },
        onLeaveBack: () => {
          stop(anim);
          anim = undefined;
          watershed_overlay_out(map, lng, lat, zoom);
        },
        // markers: true,
        id: "watershed_layeroverlay",
      });

      ScrollTrigger.create({
        trigger: "#para2Countries",
        start: "top 70%",
        onEnter: () => {
          stop(anim);
          anim = undefined;
          sixCountriesin(map);
        },
        onLeaveBack: () => {
          stop(anim);
          anim = undefined;
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
          stop(anim);
          anim = undefined;
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
          stop(anim);
          anim = undefined;
          GoldenTriangleOut(map);
          map.fitBounds([
            [102.346509255666902, 9.5],
            [107.6363823439247085, 14.708618006184869],
          ]);
        },
        onLeaveBack: () => {
          stop(anim);
          anim = undefined;
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

      gsap.defaults({ overwrite: "auto" });
      ScrollTrigger.refresh();

      gsap.set(".left-content > *", { xPercent: -50, yPercent: -50 });

      // Set up our scroll trigger
      const ST2 = ScrollTrigger.create({
        trigger: "#section3",
        start: "top top",
        end: "bottom bottom",
        onUpdate: getCurrentSection,
        pin: ".left-content",
      });

      // Set up our content behaviors
      contentMarkers.forEach((marker) => {
        marker.content = document.querySelector(
          `#${marker.dataset.markerContent}`
        );

        if (marker.content.tagName === "IMG") {
          gsap.set(marker.content, { transformOrigin: "center" });

          marker.content.enter = function () {
            gsap.fromTo(
              marker.content,
              { autoAlpha: 0, rotateY: -30 },
              { duration: 0.3, autoAlpha: 1, rotateY: 0 }
            );
          };
        } else if (marker.content.tagName === "BLOCKQUOTE") {
          gsap.set(marker.content, { transformOrigin: "left center" });

          marker.content.enter = function () {
            gsap.fromTo(
              marker.content,
              { autoAlpha: 0, rotateY: 50 },
              { duration: 0.3, autoAlpha: 1, rotateY: 0 }
            );
          };
        }

        marker.content.leave = function () {
          gsap.to(marker.content, { duration: 0.1, autoAlpha: 0 });
        };
      });

      // Handle the updated position
      let lastContent;
      function getCurrentSection() {
        let newContent;
        const currScroll = window.scrollY;

        // Find the current section
        contentMarkers.forEach((marker) => {
          if (currScroll > marker.offsetTop) {
            newContent = marker.content;
          }
        });

        // If the current section is different than that last, animate in
        if (
          newContent &&
          (lastContent == null || !newContent.isSameNode(lastContent))
        ) {
          // Fade out last section
          if (lastContent) {
            lastContent.leave();
          }

          // Animate in new section
          newContent.enter();

          lastContent = newContent;
        }
      }

      const media = window.matchMedia("screen and (max-width: 600px)");
      ScrollTrigger.addEventListener("refreshInit", checkSTState);
      checkSTState();

      function checkSTState() {
        if (media.matches) {
          ST2.disable();
        } else {
          ST2.enable();
        }
      }
      gsap.to("#para6Dams", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para6Dams",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
          // markers: true,
          id: "#para6Dams opacity",
        },
      });

      gsap.to("#para7Yali", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para7Yali",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
          // markers: true,
          id: "#para7Yali opacity",
        },
      });
      gsap.to("#para8CambodianDams", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para8CambodianDams",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
          // markers: true,
          id: "#para8CambodianDams opacity",
        },
      });

      gsap.to("#para9alldams", {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#para9alldams",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
          // markers: true,
          id: "#para9alldams",
        },
      });

      ScrollTrigger.create({
        trigger: "#para6Trigger",
        start: "top 40%",
        onEnter: () => {
          stop(anim);
          anim = undefined;
          threesin(map);
        },
        onLeaveBack: () => {
          stop(anim);
          anim = undefined;
          threesout(map);
        },
        // markers: true,
        id: "para6Trigger",
      });

      ScrollTrigger.create({
        trigger: "#para7Yali",
        start: "top 40%",
        onEnter: () => {
          stop(anim);
          anim = undefined;
          threesout(map);
          map.flyTo({
            zoom: 14.53,
            center: [107.828087, 14.229384],
            pitch: 59.27,
            bearing: 19.96,
          });
        },
        onLeaveBack: () => {
          stop(anim);
          anim = undefined;
          threesin(map);
        },
        // markers: true,
        id: "para7Yali",
      });

      ScrollTrigger.create({
        trigger: "#para8CambodianDams",
        start: "top 75%",
        onEnter: () => {
          stop(anim);
          anim = undefined;
          Cambodiandamsin(map);
        },
        onLeaveBack: () => {
          stop(anim);
          anim = undefined;
          map.flyTo({
            zoom: 14.53,
            center: [107.828087, 14.229384],
            pitch: 59.27,
            bearing: 19.96,
          });
          map.removeLayer("hydro_power_dams");
          $("#damsconstructionlegend").css("visibility", "hidden");
        },
        //markers: true,
        id: "para8CambodianDams",
      });

      ScrollTrigger.create({
        trigger: "#para9alldams",
        start: "top 75%",
        onEnter: () => {
          stop(anim);
          anim = undefined;
          map.fitBounds(
            [
              [97, 11.5],
              [108.041, 31.87],
            ],
            { pitch: 0, bearing: 0 }
          );
        },
        onLeaveBack: () => {
          stop(anim);
          anim = undefined;
          Cambodiandamsin(map);
        },
        //markers: true,
        id: "para9alldams",
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

    $("#yunan").css("visibility", "visible");

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

function Cambodiandamsin(map) {
  map.fitBounds([
    [102.346509255666902, 10.4227359886091246],
    [107.6363823439247085, 14.708618006184869],
  ]);
  map.addLayer({
    id: "hydro_power_dams",
    type: "circle",
    source: "hydro_power_dams",
    paint: {
      "circle-radius": ["*", ["log10", ["number", ["get", "Mean Annua"]]], 4],
      "circle-color": [
        "case",
        ["==", ["get", "Status"], "In Operation"],
        ["string", "#198038"],
        ["==", ["get", "Status"], "Under construction"],
        ["string", "#b28600"],
        ["==", ["get", "Status"], "Planned project"],
        ["string", "#fa4d56"],
        "#ffffff",
      ],
      "circle-opacity": 0.7,
      "circle-stroke-color": "black",
      "circle-stroke-width": 4,
    },
  });

  $("#damsconstructionlegend").css("visibility", "visible");
}

function threesout(map) {
  map.fitBounds([
    [102.346509255666902, 10.4227359886091246],
    [107.6363823439247085, 14.708618006184869],
  ]);
  map.removeLayer("threes_basin");
  map.removeLayer("threes_river");
  map.removeLayer("threes_river_names");
  map.removeLayer("hydro_power_dams");
  $("#damslegend").css("visibility", "hidden");
}

function threesin(map) {
  map.flyTo({
    zoom: 7,
    center: [106.084986, 13.2],
    pitch: 49.47,
    bearing: 0.0,
  });
  map.addLayer({
    id: "threes_basin",
    type: "fill",
    source: "threes_basin",
    paint: {
      "fill-color": ["get", "color"],
      "fill-opacity": 0.3,
      "fill-outline-color": "blue",
    },
  });
  map.addLayer({
    id: "threes_river",
    type: "line",
    source: "threes_river",
    paint: {
      "line-color": "red",
      "line-opacity": 1,
      "line-width": 3,
    },
  });
  map.addLayer({
    id: "threes_river_names",
    type: "symbol",
    source: "threes_river_names",
    paint: {
      "text-halo-width": 3,
      "text-halo-color": "white",
    },
    layout: {
      //"text-font": ["Viaoda Libre Regular", "Open Sans Regular"],
      "symbol-placement": "point",
      "text-anchor": "center",
      "text-field": ["get", "name"],
      "text-size": 24,
    },
  });

  map.addLayer({
    id: "hydro_power_dams",
    type: "circle",
    source: "hydro_power_dams",
    paint: {
      "circle-radius": ["*", ["log10", ["number", ["get", "Mean Annua"]]], 4],
      "circle-color": "#7DA0C0",
      "circle-stroke-color": "black",
      "circle-stroke-width": 4,
    },
    filter: ["==", ["get", "Status"], "In Operation"],
  });

  $("#damslegend").css("visibility", "visible");
}

function GoldenTriangleOut(map) {
  map.removeLayer("Mekong_countries");
  map.removeLayer("golden_triangle_centoid");
}

function GoldenTriangleIn(map) {
  $("#yunan").css("visibility", "hidden");

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
