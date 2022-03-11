import React from "react";
import "./Title.css";
import Row from "react-bootstrap/Row";

const Title = ({ content }) => {
  return (
    <Row className="py-5 g-0">
      <ol>
        <li> https: //www.mrcmekong.org/about/mekong-basin/people/</li>
        <li> http: //www.mwr.gov.cn/xw/slyw/201804/t20180409_1034896.html</li>
        <li> https://nhess.copernicus.org/preprints/nhess-2021-65/nhess-2021-65.pdf</li>
        <li> https://pubs.iclarm.net/resource_centre/3494-11879-1-PB.pdf</li>
        <li> https://earthobservatory.nasa.gov/images/3483/tonle-sap-wetlands-cambodia</li>
      </ol>
    </Row>
  );
};

export default Title;
